export const buttonColors = {
  primary: { text: '#FFFFFF', value: '#27a7e3', dark: '#1f8ecb' },
  secondary: { text: '#1CB0F6', value: '#E0F3FF', dark: '#B3DFFC' }
} as const;

export type ButtonColor = keyof typeof buttonColors;

