import { useState } from 'react';
import { TOKENS, PAGES, mono } from '../tokens.js';
import { useIsMobile, useWrap, useRoute } from '../hooks.js';
import { VerisLogo, Arrow } from './Logo.jsx';

export function SiteLink({ to, children, style, onClick, ...rest }) {
  const href = `#/${to}`;
  return (
    <a
      href={href}
      onClick={onClick}
      style={{ color: "inherit", textDecoration: "none", cursor: "pointer", ...style }}
      {...rest}
    >
      {children}
    </a>
  );
}

function Hamburger({ open, onClick, color = "#fff" }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      style={{
        background: "transparent", border: "none", cursor: "pointer",
        width: 44, height: 44, padding: 0,
        display: "grid", placeItems: "center",
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        {open ? (
          <path d="M5 5l14 14M19 5L5 19" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        ) : (
          <path d="M4 7h16M4 17h16" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        )}
      </svg>
    </button>
  );
}

function MobileMenu({ open, onClose }) {
  const route = useRoute();
  if (!open) return null;
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 100,
      background: TOKENS.navy, color: "#fff",
      padding: "24px 20px",
      display: "flex", flexDirection: "column",
      animation: "fadeIn 200ms ease-out",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 40 }}>
        <SiteLink to="" onClick={onClose}>
          <VerisLogo wordmarkColor="#fff" markColor={TOKENS.teal} height={58} />
        </SiteLink>
        <Hamburger open onClick={onClose} color="#fff" />
      </div>
      <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {PAGES.map((p) => {
          const active = route === p.route;
          return (
            <SiteLink key={p.id} to={p.route} onClick={onClose} style={{
              padding: "18px 0", fontSize: 28, fontWeight: 500,
              color: active ? TOKENS.teal : "#fff",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              letterSpacing: "-0.02em",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              {p.label}
              <Arrow color={active ? TOKENS.teal : "rgba(255,255,255,0.5)"} size={18} />
            </SiteLink>
          );
        })}
      </nav>
      <div style={{ marginTop: "auto", ...mono, color: "rgba(255,255,255,0.5)", paddingTop: 32 }}>
        // hello@verisresearch.com
      </div>
    </div>
  );
}

export function Nav({ variant = "light" }) {
  const route = useRoute();
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = variant === "dark";
  const linkColor = isDark ? "rgba(255,255,255,0.85)" : TOKENS.navy;
  const activeColor = isDark ? "#fff" : TOKENS.teal;
  const wordmarkColor = isDark ? "#fff" : TOKENS.navy;
  const wrapStyle = { maxWidth: 1320, margin: "0 auto", padding: isMobile ? "20px" : "24px 56px" };

  return (
    <>
      <header style={{
        ...wrapStyle,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "relative", zIndex: 5,
      }}>
        <SiteLink to="" style={{ display: "block" }}>
          <VerisLogo wordmarkColor={wordmarkColor} markColor={TOKENS.teal} height={isMobile ? 51 : 61} />
        </SiteLink>

        {isMobile ? (
          <Hamburger open={false} onClick={() => setMenuOpen(true)} color={isDark ? "#fff" : TOKENS.navy} />
        ) : (
          <>
            <nav style={{ display: "flex", gap: 32, fontSize: 14.5, fontWeight: 500 }}>
              {PAGES.slice(1, -1).map((p) => {
                const active = route === p.route;
                return (
                  <SiteLink key={p.id} to={p.route} style={{
                    color: active ? activeColor : linkColor,
                    borderBottom: active ? `1.5px solid ${activeColor}` : "1.5px solid transparent",
                    paddingBottom: 4,
                    fontWeight: active ? 600 : 500,
                  }}>
                    {p.label}
                  </SiteLink>
                );
              })}
            </nav>
            <SiteLink to="contact">
              <button style={{
                background: TOKENS.teal, color: TOKENS.navy, border: "none",
                padding: "11px 20px", borderRadius: 4, fontSize: 14,
                fontFamily: TOKENS.fontSans, fontWeight: 600, cursor: "pointer",
                display: "inline-flex", alignItems: "center", gap: 8,
              }}>
                Contact <Arrow color={TOKENS.navy} />
              </button>
            </SiteLink>
          </>
        )}
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export function Footer() {
  const isMobile = useIsMobile();
  const w = useWrap();
  return (
    <footer style={{ background: TOKENS.navyDeep, color: "#fff" }}>
      <div style={{ ...w, padding: isMobile ? "48px 20px 28px" : "64px 56px 32px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.6fr 1fr 1fr 1fr 1fr",
          gap: isMobile ? 32 : 40,
          paddingBottom: isMobile ? 32 : 48,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}>
          <div>
            <VerisLogo wordmarkColor="#fff" markColor={TOKENS.teal} height={58} />
            <p style={{ fontSize: 14, marginTop: 22, color: "rgba(255,255,255,0.6)", maxWidth: 320, lineHeight: 1.5 }}>
              Independent clinical research site, passionately partnered with the Federally Qualified Health Centers
              that already serve the populations most underrepresented in research.
            </p>
          </div>
          <div style={{ display: isMobile ? "grid" : "contents", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[
              { h: "// pathways", items: [["Patients", "patients"], ["Sponsors / CROs", "sponsors"], ["FQHC Partners", "fqhc"]] },
              { h: "// company",  items: [["Mission", "about"]] },
              { h: "// resources", items: [["Patient FAQ", "patients?scroll=faq"]] },
              { h: "// contact",  items: [["General inquiries", "contact?as=other"], ["Press inquiries", "contact?as=press"], ["Refer a patient", "contact?as=patient"]] },
            ].map((col) => (
              <div key={col.h}>
                <div style={{ ...mono, color: TOKENS.teal, marginBottom: 18 }}>{col.h}</div>
                {col.items.map(([label, route]) => (
                  <SiteLink to={route} key={label}>
                    <div style={{ fontSize: 13.5, color: "rgba(255,255,255,0.75)", marginBottom: 10 }}>{label}</div>
                  </SiteLink>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div style={{
          display: "flex", flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 12 : 0,
          justifyContent: "space-between", paddingTop: 24,
          fontSize: 12, color: "rgba(255,255,255,0.45)", ...mono,
        }}>
          <span>© 2026 VERIS RESEARCH, INC.</span>
          <span style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <span>PRIVACY</span><span>TERMS</span><span>HIPAA</span><span>ACCESSIBILITY</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
