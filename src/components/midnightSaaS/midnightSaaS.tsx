import React from "react";

export type MidnightButtonVariant = "primary" | "secondary" | "ghost";

const palette = {
  bg: "#0b1020",
  panel: "#121a2f",
  panelSoft: "#17213b",
  line: "#283657",
  text: "#f7f9ff",
  muted: "#9aa8c7",
  accent: "#7c5cff",
  accent2: "#22d3ee",
  success: "#36d399",
};

export function MidnightButton({
  children,
  variant = "primary",
  onClick,
}: {
  children: React.ReactNode;
  variant?: MidnightButtonVariant;
  onClick?: () => void;
}) {
  const styles = {
    primary: { background: palette.accent, color: "#fff", border: `1px solid ${palette.accent}` },
    secondary: { background: palette.panelSoft, color: palette.text, border: `1px solid ${palette.line}` },
    ghost: { background: "transparent", color: palette.muted, border: "1px solid transparent" },
  }[variant];

  return (
    <button
      onClick={onClick}
      style={{
        ...styles,
        borderRadius: 12,
        padding: "10px 14px",
        fontWeight: 700,
        cursor: "pointer",
        boxShadow: variant === "primary" ? "0 10px 24px rgba(124,92,255,.25)" : "none",
      }}
    >
      {children}
    </button>
  );
}

export function MidnightCard({
  title,
  children,
  eyebrow,
}: {
  title: string;
  children: React.ReactNode;
  eyebrow?: string;
}) {
  return (
    <section
      style={{
        background: "linear-gradient(180deg,#121a2f 0%,#0f1729 100%)",
        border: `1px solid ${palette.line}`,
        borderRadius: 18,
        padding: 18,
        boxShadow: "0 18px 50px rgba(0,0,0,.22)",
        color: palette.text,
      }}
    >
      {eyebrow && (
        <div style={{ color: palette.accent2, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 8 }}>
          {eyebrow}
        </div>
      )}
      <h3 style={{ margin: "0 0 14px", fontSize: 18 }}>{title}</h3>
      {children}
    </section>
  );
}

export function MidnightInput({ label, placeholder = "Type here..." }: { label: string; placeholder?: string }) {
  return (
    <label style={{ display: "grid", gap: 7, color: palette.muted, fontSize: 12 }}>
      <span>{label}</span>
      <input
        placeholder={placeholder}
        style={{
          background: "#0d1528",
          color: palette.text,
          border: `1px solid ${palette.line}`,
          borderRadius: 12,
          padding: "11px 12px",
          outline: 0,
        }}
      />
    </label>
  );
}

export function MidnightBadge({ children, tone = "violet" }: { children: React.ReactNode; tone?: "violet" | "cyan" | "green" }) {
  const map = {
    violet: { color: "#c8bdff", bg: "rgba(124,92,255,.14)", border: "rgba(124,92,255,.35)" },
    cyan: { color: "#8beaff", bg: "rgba(34,211,238,.12)", border: "rgba(34,211,238,.3)" },
    green: { color: "#8bf0c7", bg: "rgba(54,211,153,.12)", border: "rgba(54,211,153,.3)" },
  }[tone];

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 9px", borderRadius: 999, fontSize: 11, fontWeight: 700, color: map.color, background: map.bg, border: `1px solid ${map.border}` }}>
      {children}
    </span>
  );
}

export function MidnightMetric({ value, label, trend }: { value: string; label: string; trend?: string }) {
  return (
    <div style={{ background: palette.panel, border: `1px solid ${palette.line}`, borderRadius: 16, padding: 16, color: palette.text }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
        <strong style={{ fontSize: 28, letterSpacing: "-.03em" }}>{value}</strong>
        {trend && <MidnightBadge tone="green">{trend}</MidnightBadge>}
      </div>
      <div style={{ marginTop: 6, color: palette.muted, fontSize: 12 }}>{label}</div>
    </div>
  );
}

export function MidnightNavItem({ label, active = false, icon = "•" }: { label: string; active?: boolean; icon?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 12, background: active ? "rgba(124,92,255,.16)" : "transparent", color: active ? palette.text : palette.muted, border: `1px solid ${active ? "rgba(124,92,255,.28)" : "transparent"}` }}>
      <span style={{ width: 26, height: 26, display: "grid", placeItems: "center", borderRadius: 8, background: active ? palette.accent : palette.panelSoft, color: palette.text }}>{icon}</span>
      <span style={{ fontWeight: 700, fontSize: 13 }}>{label}</span>
    </div>
  );
}

export const midnightCanvas: React.CSSProperties = {
  background: `radial-gradient(circle at top left, rgba(124,92,255,.18), transparent 26%), ${palette.bg}`,
  color: palette.text,
  minHeight: "100%",
  padding: 28,
  fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
};
