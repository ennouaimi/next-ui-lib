import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { MidnightBadge, MidnightButton, MidnightCard, MidnightInput, MidnightMetric, MidnightNavItem, midnightCanvas } from "./midnightSaaS";

const Overview = () => (
  <div style={{ ...midnightCanvas, minHeight: 620 }}>
    <div style={{ maxWidth: 980, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <div>
          <MidnightBadge tone="cyan">Midnight SaaS UI</MidnightBadge>
          <h1 style={{ fontSize: 46, letterSpacing: "-.04em", margin: "16px 0 8px" }}>A darker, sharper SaaS system.</h1>
          <p style={{ color: "#9aa8c7", maxWidth: 640, lineHeight: 1.7, margin: 0 }}>Built for modern dashboards, developer tools and premium B2B products.</p>
        </div>
        <MidnightButton>Start building</MidnightButton>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 20, marginTop: 28 }}>
        <MidnightCard title="Navigation">
          <div style={{ display: "grid", gap: 6 }}>
            <MidnightNavItem label="Overview" icon="⌂" active />
            <MidnightNavItem label="Analytics" icon="↗" />
            <MidnightNavItem label="Projects" icon="◇" />
            <MidnightNavItem label="Settings" icon="⚙" />
          </div>
        </MidnightCard>

        <div style={{ display: "grid", gap: 16 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
            <MidnightMetric value="$24.8k" label="Monthly revenue" trend="+12.4%" />
            <MidnightMetric value="1,284" label="Active users" trend="+8.1%" />
            <MidnightMetric value="3.7%" label="Conversion rate" trend="+0.6%" />
          </div>

          <MidnightCard title="Create project" eyebrow="Workspace">
            <MidnightInput label="Project name" placeholder="acme-dashboard" />
            <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
              <MidnightButton>Create</MidnightButton>
              <MidnightButton variant="secondary">Preview</MidnightButton>
              <MidnightButton variant="ghost">Cancel</MidnightButton>
            </div>
          </MidnightCard>
        </div>
      </div>
    </div>
  </div>
);

const meta = { title: "Midnight SaaS UI/Overview", component: Overview, parameters: { layout: "fullscreen" } } satisfies Meta<typeof Overview>;
export default meta;
type Story = StoryObj<typeof meta>;
export const PackOverview: Story = {};
