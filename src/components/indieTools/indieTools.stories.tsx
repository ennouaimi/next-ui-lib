import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { IndieBadge, IndieButton, IndieCard, IndieInput, IndieMetric, IndieToolItem, indieToolsCanvas } from "./indieTools";

const Pack = () => <div style={{ ...indieToolsCanvas, minHeight: 520 }}><div style={{ maxWidth: 900, margin: "0 auto" }}><IndieBadge>Indie Tools UI</IndieBadge><h1 style={{ fontFamily: "Georgia, serif", fontSize: 48, letterSpacing: "-.05em", margin: "20px 0 8px" }}>Tools without the noise.</h1><p style={{ color: "#49614f", maxWidth: 600, lineHeight: 1.7 }}>Editorial typography, warm paper surfaces, square controls and restrained utility-first interactions.</p><div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 20, marginTop: 30 }}><IndieCard title="Utilities"><IndieToolItem title="Color Studio" description="Palette & contrast" active /><IndieToolItem title="JSON Formatter" description="Format & validate" /><IndieToolItem title="Timezone" description="Convert local time" /></IndieCard><div style={{ display: "grid", gap: 16 }}><IndieCard title="Workspace"><IndieInput label="Project name" placeholder="my-next-product" /><div style={{ display: "flex", gap: 8, marginTop: 14 }}><IndieButton>Generate</IndieButton><IndieButton variant="ghost">Reset</IndieButton></div></IndieCard><div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}><IndieMetric value="14" label="TOOLS" /><IndieMetric value="0" label="TRACKERS" /><IndieMetric value="100%" label="LOCAL" /></div></div></div></div></div>;

const meta = { title: "Indie Tools UI/Overview", component: Pack, parameters: { layout: "fullscreen" } } satisfies Meta<typeof Pack>;
export default meta;
type Story = StoryObj<typeof meta>;
export const PackOverview: Story = {};
