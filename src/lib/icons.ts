// Shared by the Keystatic schema (as select options) and the Icon component.
export const iconOptions = [
  { value: "heart", label: "Hart" },
  { value: "book", label: "Boek" },
  { value: "sun", label: "Zon" },
  { value: "home", label: "Huis" },
  { value: "moon", label: "Maan" },
  { value: "hands", label: "Handen" },
  { value: "pin", label: "Locatie" },
  { value: "education", label: "Opleiding" },
  { value: "calendar", label: "Kalender" },
  { value: "plus", label: "Plus" },
] as const;

export type IconName = (typeof iconOptions)[number]["value"];
