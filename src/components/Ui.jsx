import { useState } from 'react';
import { TOKENS, mono } from '../tokens.js';
import { useIsMobile } from '../hooks.js';

export function SectionHeader({ tag, title, right, maxTitle = 880 }) {
  const isMobile = useIsMobile();
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "240px 1fr auto",
      gap: isMobile ? 16 : 64,
      marginBottom: isMobile ? 32 : 48,
      alignItems: "baseline",
    }}>
      <div style={{ ...mono, color: TOKENS.ink55, paddingTop: isMobile ? 0 : 6 }}>{tag}</div>
      <h2 style={{
        fontFamily: TOKENS.fontSans, fontWeight: 500,
        fontSize: isMobile ? 30 : 44,
        margin: 0, letterSpacing: "-0.02em", maxWidth: maxTitle, lineHeight: 1.08,
      }}>
        {title}
      </h2>
      {right && !isMobile && <div style={{ ...mono, color: TOKENS.ink55 }}>{right}</div>}
    </div>
  );
}

export function ArcsMotif({ size = 240, color = TOKENS.teal, rings = [24, 44, 68, 96, 130, 170], dot = 10, style }) {
  return (
    <svg viewBox="0 0 200 200" style={{ width: size, height: size, display: "block", ...style }}>
      {rings.map((r) => (
        <circle key={r} cx="100" cy="100" r={r} fill="none" stroke={color} strokeOpacity={0.32} strokeWidth="1" />
      ))}
      <circle cx="100" cy="100" r={dot} fill={color} />
    </svg>
  );
}

export function Faq({ q, a, last }) {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  return (
    <div style={{ borderBottom: last ? "none" : `1px solid ${TOKENS.rule}` }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%", background: "transparent", border: "none", cursor: "pointer",
          padding: isMobile ? "20px 22px" : "24px 32px",
          display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 16,
          fontFamily: TOKENS.fontSans, color: TOKENS.navy, textAlign: "left",
        }}
      >
        <span style={{ fontSize: isMobile ? 16 : 19, fontWeight: 500, letterSpacing: "-0.01em" }}>{q}</span>
        <span style={{
          width: 28, height: 28, borderRadius: 999, border: `1px solid ${TOKENS.rule}`,
          display: "grid", placeItems: "center", transition: "transform 0.2s",
          transform: open ? "rotate(45deg)" : "rotate(0)",
          flexShrink: 0,
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke={TOKENS.navy} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div style={{ padding: isMobile ? "0 22px 22px" : "0 32px 28px", color: TOKENS.ink70, fontSize: 15, maxWidth: 820, lineHeight: 1.55 }}>
          {a}
        </div>
      )}
    </div>
  );
}

export function Field({ label, children, required }) {
  return (
    <label style={{ display: "block", marginBottom: 14 }}>
      <span style={{ ...mono, color: TOKENS.ink55, display: "block", marginBottom: 8 }}>
        {label}{required && <span style={{ color: TOKENS.teal, marginLeft: 6 }}>*</span>}
      </span>
      {children}
    </label>
  );
}

export function HeroArcs({ teal }) {
  return (
    <svg viewBox="0 0 900 900" style={{
      position: "absolute",
      top: -120, right: -180,
      width: 1000, height: 1000,
      opacity: 0.9, pointerEvents: "none",
    }}>
      {[80, 140, 210, 290, 380, 480, 590, 710].map((r) => (
        <circle key={r} cx="450" cy="450" r={r} fill="none" stroke={teal} strokeOpacity={0.3} strokeWidth="1" />
      ))}
      <circle cx="450" cy="450" r="22" fill={teal} />
      <circle cx="450" cy="450" r="44" fill="none" stroke={teal} strokeWidth="2" />
    </svg>
  );
}

export function HeroArcsMobile({ teal }) {
  return (
    <svg viewBox="0 0 900 900" style={{
      position: "absolute",
      top: -200, right: -380,
      width: 700, height: 700,
      opacity: 0.9, pointerEvents: "none",
    }}>
      {[80, 140, 210, 290, 380, 480, 590, 710].map((r) => (
        <circle key={r} cx="450" cy="450" r={r} fill="none" stroke={teal} strokeOpacity={0.3} strokeWidth="1" />
      ))}
      <circle cx="450" cy="450" r="22" fill={teal} />
      <circle cx="450" cy="450" r="44" fill="none" stroke={teal} strokeWidth="2" />
    </svg>
  );
}

export function CtaArcs({ teal }) {
  return (
    <svg viewBox="0 0 1440 500" preserveAspectRatio="xMaxYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      {[60, 130, 220, 330, 460, 610].map((r) => (
        <circle key={r} cx="1200" cy="250" r={r} fill="none" stroke={teal} strokeOpacity={0.22} strokeWidth="1" />
      ))}
      <circle cx="1200" cy="250" r="16" fill={teal} />
    </svg>
  );
}
