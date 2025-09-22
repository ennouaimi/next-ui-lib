export const buttonColors = {
  lightBlue: {
    primary: { text: '#FFFFFF', value: '#27a7e3', dark: '#1f8ecb' },
    secondary: { text: '#1CB0F6', value: '#E0F3FF', dark: '#B3DFFC' }
  },
  amber: {
    primary: { text: '#936E00', value: '#FFC107', dark: '#D39E00' },
    secondary: { text: '#936E00', value: '#FFE082', dark: '#FFCA28' }
  },
  cyan: {
    primary: { text: '#FFFFFF', value: '#00BCD4', dark: '#0097A7' },
    secondary: { text: '#00BCD4', value: '#B2EBF2', dark: '#80DEEA' }
  }
} as const;

export const colors = {
  red: { value: "#FF5733", dark: "#C74422" },
  amber: { text: "#936E00", value: "#FFC107", dark: "#D39E00" },
  green: { value: "#79C70B", dark: "#619F08" },
  blue: { value: "#2196F3", dark: "#1976D2" },
  purple: { value: "#9C27B0", dark: "#7B1FA2" },
  orange: { value: "#FF9800", dark: "#E68900" },
  pink: { text: "#FFFFFF", value: "#E91E63", dark: "#C2185B" },
  cyan: { text: "#FFFFFF", value: "#00BCD4", dark: "#0097A7" },
} as const;

export type ColorName = keyof typeof colors;

export const staticColors = {
  Gray: { value: '#F1F1F1' }
} as const;

export type ButtonColor = keyof typeof buttonColors;
