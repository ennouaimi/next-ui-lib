# next-ui-lib

A reusable React + TypeScript component library built for fast product development, with a playful visual style and a focus on simple, composable UI primitives.

The library is developed with **Vite**, **Tailwind CSS** and **Storybook**, and ships typed React components that can be reused across applications.

## Components

The current public API includes:

- **Button** — primary/secondary variants, multiple sizes and customizable colors
- **Card** — reusable content container
- **ProgressBar** — progress and completion states
- **Toggle** — interactive boolean control
- **WeekStreak** — weekly activity/streak visualization
- **LeaderBoard** — ranked user/data display
- **GraphBar** — bar-chart based data visualization
- **BgIcon** — icon container/background primitive

The repository also contains additional UI work such as emoji, checkbox and internal UI primitives.

## Tech stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Storybook
- Vitest
- Playwright
- Lucide React
- Nivo

## Usage

Import components from the library entry point and include the bundled stylesheet:

```tsx
import { Button, Card, ProgressBar } from "next-ui-lib";
import "next-ui-lib/styles.css";

export default function Example() {
  return (
    <Card>
      <ProgressBar />
      <Button
        label="Continue"
        variant="primary"
        size="medium"
        onClick={() => console.log("clicked")}
      />
    </Card>
  );
}
```

`Button`, for example, supports `primary` and `secondary` variants as well as `small`, `medium`, `large` and `full` sizes.

## Local development

Clone the repository and install dependencies:

```bash
git clone https://github.com/ennouaimi/next-ui-lib.git
cd next-ui-lib
npm install
```

Start the Vite development environment:

```bash
npm run dev
```

## Storybook

Components are developed and documented in isolation with Storybook.

```bash
npm run storybook
```

Storybook runs locally on port `6006` by default.

Build the static Storybook:

```bash
npm run build-storybook
```

## Build

Create the production library bundle, TypeScript declarations and compiled Tailwind stylesheet:

```bash
npm run build
```

The generated package output is written to `dist/` and exposes:

```text
next-ui-lib
├── dist/ui.es.js
├── dist/ui.umd.js
├── dist/index.d.ts
└── dist/styles.css
```

## Development scripts

```bash
npm run dev             # Start Vite
npm run build           # Build the library
npm run lint            # Run ESLint
npm run storybook       # Start Storybook
npm run build-storybook # Build Storybook
```

## Project structure

```text
src/
├── components/     # Reusable React components
├── constants/      # Shared design constants
├── fonts/          # Local font assets
├── lib/            # Shared utilities
├── index.ts        # Public component exports
└── tailwind-entry.css
```

## Design goals

`next-ui-lib` is meant to keep commonly reused UI patterns consistent across projects without turning the design system into a heavy framework.

The main goals are:

- reusable and strongly typed components
- consistent styling and interaction patterns
- fast integration into React applications
- isolated component development through Storybook
- a small, explicit public API

## Contributing

Contributions are welcome through pull requests. When adding or changing a component, keep the API focused and update or add its Storybook story where appropriate.

---

Built as a reusable UI foundation for shipping React products faster.