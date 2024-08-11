import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "2-digit",
    month: "long",
  };
  const formattedDate = new Intl.DateTimeFormat("pt-BR", options).format(date);

  // Capitaliza a primeira letra do dia e do mês
  return formattedDate.replace(/^\w/, (c) => c.toUpperCase());
}
