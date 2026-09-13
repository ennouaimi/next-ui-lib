import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { IndieBadge, IndieButton, IndieCard, IndieInput, IndieMetric, IndieToolItem, indieToolsCanvas } from "./indieTools";

const Gallery = () => <div style={{ ...indieToolsCanvas, minHeight: 500 }}><div style={{ display: "grid", gap: 22, maxWidth: 760 }}><section><p style={{ fontSize: 10, letterSpacing: ".12em" }}>BUTTONS</p><div style={{ display: "flex", gap: 10 }}><IndieButton>Primary action</IndieButton><IndieButton variant="ghost">Ghost action</IndieButton></div></section><section><p style={{ fontSize: 10, letterSpacing: ".12em" }}>INPUT & BADGE</p><div style={{ display: "grid", gap: 12 }}><IndieInput label="Utility input" placeholder="Paste a value..." /><div><IndieBadge>Client-side</IndieBadge></div></div></section><section><p style={{ fontSize: 10, letterSpacing: ".12em" }}>CARDS & METRICS</p><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}><IndieCard title="Tool card">A warm, square utility surface with an offset shadow.</IndieCard><IndieMetric value="42" label="RESULTS" /></div></section><section><p style={{ fontSize: 10, letterSpacing: ".12em" }}>NAVIGATION ITEM</p><div style={{ maxWidth: 280 }}><IndieToolItem title="JSON Formatter" description="Format, validate & minify" active /></div></section></div></div>;

const meta = { title: "Indie Tools UI/Components", component: Gallery, parameters: { layout: "fullscreen" } } satisfies Meta<typeof Gallery>;
export default meta;
type Story = StoryObj<typeof meta>;
export const GalleryView: Story = {};
