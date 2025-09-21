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

export const staticColors = {
  Gray: { value: '#F1F1F1' }
} as const;

export type ButtonColor = keyof typeof buttonColors;
