export interface Country {
  code: string;
  name: string;
  flag: string;
}

export interface FilterState {
  search: string;
  startDate: Date | null;
  endDate: Date | null;
  country: string;
}

export const countries: Country[] = [
  { code: "us", name: "Estados Unidos", flag: "🇺🇸" },
  { code: "mx", name: "México", flag: "🇲🇽" },
  { code: "es", name: "España", flag: "🇪🇸" },
  { code: "ar", name: "Argentina", flag: "🇦🇷" },
  { code: "br", name: "Brasil", flag: "🇧🇷" },
  { code: "co", name: "Colombia", flag: "🇨🇴" },
  { code: "cl", name: "Chile", flag: "🇨🇱" },
  { code: "pe", name: "Perú", flag: "🇵🇪" },
  { code: "ve", name: "Venezuela", flag: "🇻🇪" },
  { code: "ec", name: "Ecuador", flag: "🇪🇨" },
  { code: "uy", name: "Uruguay", flag: "🇺🇾" },
  { code: "py", name: "Paraguay", flag: "🇵🇾" },
  { code: "bo", name: "Bolivia", flag: "🇧🇴" },
  { code: "fr", name: "Francia", flag: "🇫🇷" },
  { code: "it", name: "Italia", flag: "🇮🇹" },
  { code: "de", name: "Alemania", flag: "🇩🇪" },
  { code: "gb", name: "Reino Unido", flag: "🇬🇧" },
  { code: "ca", name: "Canadá", flag: "🇨🇦" },
  { code: "jp", name: "Japón", flag: "🇯🇵" },
  { code: "kr", name: "Corea del Sur", flag: "🇰🇷" },
];
