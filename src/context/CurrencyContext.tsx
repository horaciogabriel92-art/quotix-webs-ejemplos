"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import {
  type CurrencyCode,
  CURRENCIES,
  FALLBACK_RATES,
  getDefaultCurrency,
  formatPrice,
} from "@/lib/currencies";

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  rates: Record<CurrencyCode, number>;
  loading: boolean;
  format: (usdAmount: number) => string;
  convert: (usdAmount: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType | null>(null);

const RATES_CACHE_KEY = "quotix-rates";
const RATES_CACHE_TS_KEY = "quotix-rates-ts";
const CURRENCY_PREF_KEY = "quotix-currency";
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24h

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("USD");
  const [rates, setRates] = useState<Record<CurrencyCode, number>>(FALLBACK_RATES);
  const [loading, setLoading] = useState(true);

  // Detect country + load saved preference
  useEffect(() => {
    const saved = localStorage.getItem(CURRENCY_PREF_KEY) as CurrencyCode | null;
    if (saved && CURRENCIES[saved]) {
      setCurrencyState(saved);
      setLoading(false);
      return;
    }

    // Detect country by IP
    fetch("https://ipapi.co/json/", { mode: "cors" })
      .then((r) => r.json())
      .then((data) => {
        const detected = getDefaultCurrency(data.country_code || "US");
        setCurrencyState(detected);
      })
      .catch(() => {
        setCurrencyState("USD");
      })
      .finally(() => setLoading(false));
  }, []);

  // Fetch exchange rates (cached 24h)
  useEffect(() => {
    const cached = localStorage.getItem(RATES_CACHE_KEY);
    const cachedTs = localStorage.getItem(RATES_CACHE_TS_KEY);
    const now = Date.now();

    if (cached && cachedTs && now - parseInt(cachedTs) < CACHE_TTL_MS) {
      try {
        setRates(JSON.parse(cached));
        return;
      } catch {
        // ignore parse error, fetch fresh
      }
    }

    fetch("https://api.exchangerate-api.com/v4/latest/USD", { mode: "cors" })
      .then((r) => r.json())
      .then((data) => {
        if (data?.rates) {
          const mapped: Record<CurrencyCode, number> = {
            USD: 1,
            UYU: data.rates.UYU || FALLBACK_RATES.UYU,
            ARS: data.rates.ARS || FALLBACK_RATES.ARS,
            BRL: data.rates.BRL || FALLBACK_RATES.BRL,
            EUR: data.rates.EUR || FALLBACK_RATES.EUR,
          };
          setRates(mapped);
          localStorage.setItem(RATES_CACHE_KEY, JSON.stringify(mapped));
          localStorage.setItem(RATES_CACHE_TS_KEY, String(now));
        }
      })
      .catch(() => {
        // keep fallback rates
      });
  }, []);

  const setCurrency = useCallback((c: CurrencyCode) => {
    setCurrencyState(c);
    localStorage.setItem(CURRENCY_PREF_KEY, c);
  }, []);

  const convert = useCallback(
    (usdAmount: number) => {
      return usdAmount * (rates[currency] || 1);
    },
    [rates, currency]
  );

  const format = useCallback(
    (usdAmount: number) => {
      return formatPrice(convert(usdAmount), currency);
    },
    [convert, currency]
  );

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, rates, loading, format, convert }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }
  return ctx;
}
