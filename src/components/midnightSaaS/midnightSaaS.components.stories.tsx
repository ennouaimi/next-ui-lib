import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { MidnightBadge, MidnightButton, MidnightCard, MidnightInput, MidnightMetric, MidnightNavItem, midnightCanvas } from "./midnightSaaS";

const Gallery = () => (
  <div style={{ ...midnightCanvas, minHeight: 560 }}>
    <div style={{ display: "grid", gap: 24, maxWidth: 820 }}>
      <section>
        <p style={{ color: "#7f8caf", fontSize: 11, fontWeight: 800, letterSpacing: ".12em" }}>BUTTONS</p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <MidnightButton>Primary</MidnightButton>
          <MidnightButton variant="secondary">Secondary</MidnightButton>
          <MidnightButton variant="ghost">Ghost</MidnightButton>
        </div>
      </section>

      <section>
        <p style={{ color: "#7f8caf", fontSize: 11, fontWeight: 800, letterSpacing: ".12em" }}>BADGES</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <MidnightBadge>Pro</MidnightBadge>
          <MidnightBadge tone="cyan">Live</MidnightBadge>
          <MidnightBadge tone="green">Healthy</MidnightBadge>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <MidnightCard title="Card" eyebrow="Component">
          <p style={{ color: "#9aa8c7", lineHeight: 1.6, margin: 0 }}>Dark layered surfaces, subtle borders and a violet/cyan accent system.</p>
        </MidnightCard>
        <MidnightMetric value="98.9%" label="Uptime" trend="+0.4%" />
      </section>

      <section>
        <p style={{ color: "#7f8caf", fontSize: 11, fontWeight: 800, letterSpacing: ".12em" }}>INPUT</p>
        <MidnightInput label="Workspace name" placeholder="my-startup" />
      </section>

      <section>
        <p style={{ color: "#7f8caf", fontSize: 11, fontWeight: 800, letterSpacing: ".12em" }}>NAVIGATION</p>
        <div style={{ maxWidth: 260, display: "grid", gap: 6 }}>
          <MidnightNavItem label="Dashboard" icon="⌂" active />
          <MidnightNavItem label="Analytics" icon="↗" />
        </div>
      </section>
    </div>
  </div>
);

const meta = { title: "Midnight SaaS UI/Components", component: Gallery, parameters: { layout: "fullscreen" } } satisfies Meta<typeof Gallery>;
export default meta;
type Story = StoryObj<typeof meta>;
export const ComponentGallery: Story = {};
