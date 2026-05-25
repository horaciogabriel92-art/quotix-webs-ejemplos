export type CurrencyCode = "USD" | "UYU" | "ARS" | "BRL" | "EUR";

export interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  name: string;
  flag: string;
  decimals: number;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  USD: { code: "USD", symbol: "US$", name: "Dólar estadounidense", flag: "🇺🇸", decimals: 0 },
  UYU: { code: "UYU", symbol: "$U", name: "Peso uruguayo", flag: "🇺🇾", decimals: 0 },
  ARS: { code: "ARS", symbol: "$", name: "Peso argentino", flag: "🇦🇷", decimals: 0 },
  BRL: { code: "BRL", symbol: "R$", name: "Real brasileño", flag: "🇧🇷", decimals: 0 },
  EUR: { code: "EUR", symbol: "€", name: "Euro", flag: "🇪🇺", decimals: 0 },
};

// Fallback rates (updated manually if API fails)
export const FALLBACK_RATES: Record<CurrencyCode, number> = {
  USD: 1,
  UYU: 42,
  ARS: 1250,
  BRL: 5.8,
  EUR: 0.95,
};

// Country code (ISO 3166-1 alpha-2) → default currency
export const COUNTRY_TO_CURRENCY: Record<string, CurrencyCode> = {
  UY: "UYU",
  AR: "ARS",
  BR: "BRL",
  // EU countries → EUR
  ES: "EUR", PT: "EUR", FR: "EUR", DE: "EUR", IT: "EUR", NL: "EUR",
  BE: "EUR", AT: "EUR", IE: "EUR", LU: "EUR", MT: "EUR", CY: "EUR",
  SK: "EUR", SI: "EUR", LT: "EUR", LV: "EUR", EE: "EUR", FI: "EUR",
  GR: "EUR", HR: "EUR", // Croatia joined EU/Eurozone
};

export function getDefaultCurrency(countryCode: string): CurrencyCode {
  return COUNTRY_TO_CURRENCY[countryCode.toUpperCase()] || "USD";
}

export function formatPrice(amount: number, currency: CurrencyCode): string {
  const info = CURRENCIES[currency];
  const formatter = new Intl.NumberFormat(
    currency === "BRL" ? "pt-BR" : currency === "EUR" ? "es-ES" : "es-AR",
    {
      style: "decimal",
      minimumFractionDigits: info.decimals,
      maximumFractionDigits: info.decimals,
    }
  );
  return `${info.symbol} ${formatter.format(Math.round(amount))}`;
}
