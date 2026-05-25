"use client";

import { useCurrency } from "@/context/CurrencyContext";

interface Props {
  usd: number;
  className?: string;
}

export function FormattedPrice({ usd, className }: Props) {
  const { format } = useCurrency();
  return <span className={className}>{format(usd)}</span>;
}
