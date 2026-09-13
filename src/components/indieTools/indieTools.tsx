import React from "react";

export type IndieButtonVariant = "primary" | "ghost";

export function IndieButton({ children, variant = "primary", onClick }: { children: React.ReactNode; variant?: IndieButtonVariant; onClick?: () => void }) {
  return <button onClick={onClick} style={{ font: "inherit", padding: "10px 14px", border: "1px solid #183424", borderRadius: 0, background: variant === "primary" ? "#183424" : "transparent", color: variant === "primary" ? "#f3eddc" : "#183424", boxShadow: "none", cursor: "pointer" }}>{children}</button>;
}

export function IndieCard({ title, children }: { title: string; children: React.ReactNode }) {
  return <section style={{ background: "rgba(255,255,255,.18)", border: "1px solid #a99d7d", padding: 18, boxShadow: "3px 3px 0 rgba(169,157,125,.2)", color: "#183424" }}><h3 style={{ margin: "0 0 14px", fontSize: 14 }}>{title}</h3>{children}</section>;
}

export function IndieInput({ label, placeholder = "Type something..." }: { label: string; placeholder?: string }) {
  return <label style={{ display: "flex", flexDirection: "column", gap: 7, color: "#49614f", fontSize: 11 }}><span>{label}</span><input placeholder={placeholder} style={{ font: "inherit", padding: "11px 12px", border: "1px solid #a99d7d", borderRadius: 0, background: "#f7f1e3", color: "#183424", outline: 0 }} /></label>;
}

export function IndieBadge({ children }: { children: React.ReactNode }) {
  return <span style={{ display: "inline-flex", padding: "5px 8px", border: "1px solid #a99d7d", color: "#49614f", fontSize: 10, textTransform: "uppercase", letterSpacing: ".08em" }}>{children}</span>;
}

export function IndieMetric({ value, label }: { value: string; label: string }) {
  return <div style={{ padding: 15, border: "1px solid #a99d7d", background: "#eee5cf", color: "#183424" }}><strong style={{ display: "block", fontFamily: "Georgia, serif", fontSize: 28, letterSpacing: "-.03em" }}>{value}</strong><span style={{ fontSize: 10, color: "#49614f" }}>{label}</span></div>;
}

export function IndieToolItem({ title, description, active = false }: { title: string; description: string; active?: boolean }) {
  return <div style={{ display: "flex", gap: 10, alignItems: "center", padding: "10px 9px", border: `1px solid ${active ? "#d2c6a6" : "transparent"}`, background: active ? "#e4dabd" : "transparent", color: "#183424" }}><span style={{ width: 30, height: 30, display: "grid", placeItems: "center", border: "1px solid #cfc4a8", background: active ? "#183424" : "transparent", color: active ? "#f3eddc" : "#49614f" }}>⌘</span><span><strong style={{ display: "block", fontSize: 12 }}>{title}</strong><small style={{ color: "#766e5c", fontSize: 9 }}>{description}</small></span></div>;
}

export const indieToolsCanvas: React.CSSProperties = { background: "#f3eddc", padding: 28, color: "#183424", fontFamily: '"DM Mono", "IBM Plex Mono", Consolas, monospace' };
