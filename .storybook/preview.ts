import type { Preview } from '@storybook/react-vite';
import React from 'react';
import '../src/index.css';

export const decorators = [
  (Story: any, context: { globals: { font: string; }; }) => {
    const font = context.globals.font || 'Roboto';
    return React.createElement('div', { style: { fontFamily: font } }, React.createElement(Story));
  },
];

export const globalTypes = {
  font: {
    name: 'Font',
    description: 'Global font for components',
    defaultValue: 'Gabarito',
    toolbar: {
      icon: 'text',
      items: ['Gabarito'],
    },
  },
};

const preview: Preview = {
    tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
