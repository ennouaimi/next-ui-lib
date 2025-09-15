export const buttonColors = {
  primary: { text: '#FFFFFF', value: '#27a7e3', dark: '#1f8ecb' },
  secondary: { text: '#1CB0F6', value: '#E0F3FF', dark: '#B3DFFC' },
  amber: { text: '#936E00', value: '#FFC107', dark: '#D39E00' },
} as const;

export type ButtonColor = keyof typeof buttonColors;

