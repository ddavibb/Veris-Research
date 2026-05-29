import { useState } from 'react';
import { TOKENS, mono } from '../tokens.js';
import { useIsMobile, useWrap } from '../hooks.js';
import { Nav, Footer, SiteLink } from '../components/Nav.jsx';
import { SectionHeader, ArcsMotif, Faq, CtaArcs } from '../components/Ui.jsx';
import { Arrow } from '../components/Logo.jsx';

// Web3Forms access key (same as the contact form) — routes signups to david@verisresearch.com.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function PatientsPage() {
  const { navy, teal, paper, ink70, ink55, rule, fontSans } = TOKENS;
  const isMobile = useIsMobile();
  const w = useWrap();

  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifyStatus, setNotifyStatus] = useState("idle"); // idle | submitting | success | error
  const [notifyError, setNotifyError] = useState("");

  const onNotify = async (e) => {
    e.preventDefault();
    if (!ACCESS_KEY) {
      setNotifyStatus("error");
      setNotifyError("Sign-up isn't configured yet. Please email us at david@verisresearch.com.");
      return;
    }
    setNotifyStatus("submitting");
    setNotifyError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "Veris website — Notify-me signup (Patients)",
          from_name: "Veris Research website",
          replyto: notifyEmail,
          "Inquiry type": "Patient — notify me when a study opens",
          Email: notifyEmail,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setNotifyStatus("success");
        setNotifyEmail("");
      } else {
        setNotifyStatus("error");
        setNotifyError(data.message || "Something went wrong. Please email us at david@verisresearch.com.");
      }
    } catch (err) {
      setNotifyStatus("error");
      setNotifyError("Couldn't reach the server. Please email us at david@verisresearch.com.");
    }
  };

  return (
    <div style={{ width: "100%", background: "#fff", color: navy, fontFamily: fontSans, fontSize: 15.5, lineHeight: 1.55 }}>

      {/* HERO */}
      <section style={{ background: navy, color: "#fff", position: "relative", overflow: "hidden" }}>
        <svg viewBox="0 0 900 900" style={{
          position: "absolute",
          top: isMobile ? -200 : -120, right: isMobile ? -380 : -180,
          width: isMobile ? 700 : 1000, height: isMobile ? 700 : 1000,
          opacity: 0.9, pointerEvents: "none",
        }}>
          {[80, 140, 210, 290, 380, 480, 590, 710].map((r) => (
            <circle key={r} cx="450" cy="450" r={r} fill="none" stroke={teal} strokeOpacity={0.3} strokeWidth="1" />
          ))}
          <circle cx="450" cy="450" r="22" fill={teal} />
        </svg>

        <Nav variant="dark" />

        <div style={{ ...w, padding: isMobile ? "40px 20px 64px" : "60px 56px 100px", position: "relative", zIndex: 2 }}>
          <div style={{ ...mono, color: teal, marginBottom: 28 }}>For patients</div>
          <h1 style={{
            fontWeight: 500, fontSize: isMobile ? 44 : 88,
            lineHeight: isMobile ? 1.02 : 0.96,
            letterSpacing: "-0.035em",
            margin: 0, maxWidth: 1080, textWrap: "balance",
          }}>
            Could a clinical trial be the<br />
            right next step for{" "}
            <span style={{ color: teal }}>your care?</span>
          </h1>
          <p style={{ fontSize: isMobile ? 16 : 20, lineHeight: 1.5, color: "rgba(255,255,255,0.78)", maxWidth: 720, margin: "32px 0 0", fontWeight: 300 }}>
            If you receive care at one of our partner clinics, you may be eligible for
            a clinical trial — a new kind of treatment that's still being studied.
            We'll walk you through what that means, in plain language, in the
            language you speak. No pressure. No cost to you.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 36, flexDirection: isMobile ? "column" : "row", justifyContent: "flex-start" }}>
            <SiteLink to="contact?as=patient">
              <button style={{ background: teal, color: navy, border: "none", padding: "16px 24px", borderRadius: 4, fontSize: 15, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10, fontFamily: fontSans }}>
                Talk to a coordinator <Arrow color={navy} />
              </button>
            </SiteLink>
          </div>
        </div>
      </section>

      {/* WHAT IS A CLINICAL TRIAL */}
      <section style={{ ...w, padding: isMobile ? "64px 20px" : "120px 56px" }}>
        <SectionHeader tag="// the basics" title="What is a clinical trial?" maxTitle={620} />
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 16 : 24 }}>
          {[
            { n: "01", t: "It's a careful study", b: "Clinical trials are how new treatments — medicines, devices, therapies — are tested to see if they work and are safe. They follow strict rules set by the FDA and a separate ethics board." },
            { n: "02", t: "You get extra care", b: "Participants are monitored more closely than typical care. You'll see your provider more often. Lab work, scans, and visits related to the study are usually at no cost to you." },
            { n: "03", t: "You're always in control", b: "You can ask any question, take time to decide, bring family or a translator, and leave the study at any time — for any reason — without affecting your regular care." },
          ].map((s) => (
            <div key={s.n} style={{ background: paper, padding: isMobile ? 28 : 36, border: `1px solid ${rule}` }}>
              <div style={{ fontSize: 56, color: teal, fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 20 }}>{s.n}</div>
              <h3 style={{ fontSize: 22, fontWeight: 500, margin: "0 0 12px", letterSpacing: "-0.01em" }}>{s.t}</h3>
              <p style={{ color: ink70, fontSize: 14.5, margin: 0 }}>{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ background: paper, borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}` }}>
        <div style={{ ...w, padding: isMobile ? "64px 20px" : "120px 56px" }}>
          <SectionHeader tag="// what to expect" title="From first conversation to last visit." />
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: `1px solid ${rule}`, background: "#fff" }}>
            {[
              { phase: "Step 01", t: "A first conversation", time: "≈ 30 min", b: "Your provider or a Veris coordinator will ask if you'd like to learn about a study that might be a fit. You'll leave with a one-page summary — and zero pressure to decide on the spot." },
              { phase: "Step 02", t: "Reviewing the consent form", time: "Take your time", b: "You'll get a plain-language document that explains the study, the risks, the benefits, and your rights. Bring family. Bring a friend. Ask anything." },
              { phase: "Step 03", t: "Screening visit", time: "1–2 visits", b: "If you decide to move forward, we run some standard tests to confirm the study is a safe fit for you. You can stop at any point." },
              { phase: "Step 04", t: "Study visits", time: "Varies by trial", b: "Most studies involve regular check-ins — usually at the same clinic where you already get care. Transportation help is available if you need it." },
              { phase: "Step 05", t: "Follow-up", time: "After the study ends", b: "We stay in touch. We help connect you back to your regular care, and share what the study found." },
            ].map((s, i, arr) => (
              <div key={s.phase} style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "180px 1fr 140px",
                gap: isMobile ? 8 : 32,
                padding: isMobile ? "24px 22px" : "32px 36px",
                borderBottom: i < arr.length - 1 ? `1px solid ${rule}` : "none",
                alignItems: "start",
              }}>
                <div style={{ ...mono, color: teal, paddingTop: 4 }}>// {s.phase}</div>
                <div>
                  <h4 style={{ fontSize: isMobile ? 19 : 22, fontWeight: 500, margin: "0 0 8px", letterSpacing: "-0.01em" }}>{s.t}</h4>
                  <p style={{ color: ink70, fontSize: 14.5, margin: 0 }}>{s.b}</p>
                </div>
                <div style={{ ...mono, color: ink55, textAlign: isMobile ? "left" : "right", paddingTop: 6 }}>{s.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUR RIGHTS */}
      <section style={{ background: navy, color: "#fff", position: "relative", overflow: "hidden" }}>
        <svg viewBox="0 0 800 600" style={{
          position: "absolute", top: isMobile ? -150 : -100, left: isMobile ? -300 : -100,
          width: 700, height: 700, opacity: 0.5,
        }}>
          {[60, 110, 170, 240, 320, 410].map((r) => (
            <circle key={r} cx="300" cy="300" r={r} fill="none" stroke={teal} strokeOpacity={0.4} strokeWidth="1" />
          ))}
        </svg>
        <div style={{ ...w, padding: isMobile ? "64px 20px" : "120px 56px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.4fr", gap: isMobile ? 32 : 80, alignItems: "start" }}>
            <div>
              <div style={{ ...mono, color: teal, marginBottom: 18 }}>// your rights</div>
              <h2 style={{ fontWeight: 500, fontSize: isMobile ? 36 : 56, margin: 0, letterSpacing: "-0.025em", lineHeight: 1.05 }}>
                Your care comes first. <span style={{ color: teal }}>Always.</span>
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", marginTop: 22, maxWidth: 440 }}>
                Every patient at a Veris site has these rights — protected in writing,
                in plain language, and in your spoken language.
              </p>
            </div>
            <div>
              {[
                { t: "You can leave at any time", b: "For any reason. Your regular care will not be affected." },
                { t: "Costs related to the study are covered", b: "Study visits, study labs, and the investigational therapy itself — usually at no cost to you." },
                { t: "You'll be told if anything changes", b: "If we learn something during the trial that might affect your decision, we'll tell you immediately." },
                { t: "Your information is protected", b: "All your data is HIPAA-protected. We never share identifying information with sponsors." },
                { t: "You decide what's right for your family", b: "Bring a family member, a friend, or a translator to every visit. We expect it." },
              ].map((r, i, arr) => (
                <div key={r.t} style={{
                  display: "grid", gridTemplateColumns: "auto 1fr", gap: 20,
                  padding: "22px 0",
                  borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
                  alignItems: "start",
                }}>
                  <div style={{ width: 32, height: 32, borderRadius: 999, background: "rgba(15,142,163,0.18)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8.5l3.5 3.5L13 5" stroke={teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: 17, fontWeight: 500, margin: "0 0 4px" }}>{r.t}</h4>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", margin: 0 }}>{r.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT STUDIES — empty state */}
      <section style={{ ...w, padding: isMobile ? "64px 20px" : "120px 56px" }}>
        <SectionHeader tag="// current studies" title="What we're recruiting for, right now." right="updated weekly" />
        <div style={{ background: paper, border: `1px dashed ${TOKENS.ink40}`, padding: isMobile ? "48px 24px" : "80px 56px", textAlign: "center" }}>
          <ArcsMotif size={isMobile ? 80 : 120} rings={[24, 44, 68, 96]} dot={8} style={{ margin: "0 auto 24px" }} />
          <div style={{ ...mono, color: teal, marginBottom: 14 }}>// recruiting soon</div>
          <h3 style={{ fontWeight: 500, fontSize: isMobile ? 24 : 32, margin: "0 auto 14px", maxWidth: 600, letterSpacing: "-0.02em" }}>
            Our first trials launch with our founding cohort of FQHC partners.
          </h3>
          <p style={{ fontSize: 16, color: ink70, maxWidth: 540, margin: "0 auto 28px" }}>
            Want to be the first to hear when a study opens at a clinic near you?
            Drop us your details and we'll only reach out about studies you might qualify for.
          </p>
          {notifyStatus === "success" ? (
            <div style={{ ...mono, color: teal, maxWidth: 480, margin: "0 auto", display: "inline-flex", alignItems: "center", gap: 10, textTransform: "none", fontSize: 14 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                <path d="M3 8.5l3.5 3.5L13 5" stroke={teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Thanks for your interest— we'll reach out to you soon!
            </div>
          ) : (
            <form onSubmit={onNotify} style={{ display: "flex", gap: 12, maxWidth: 480, margin: "0 auto", flexDirection: isMobile ? "column" : "row" }}>
              <input
                type="email"
                required
                value={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.value)}
                placeholder="your@email.com"
                style={{ flex: 1, background: "#fff", border: `1px solid ${rule}`, padding: "14px 18px", borderRadius: 4, fontSize: 15, fontFamily: fontSans, color: navy, outline: "none" }}
              />
              <button
                type="submit"
                disabled={notifyStatus === "submitting"}
                style={{ background: navy, color: "#fff", border: "none", padding: "14px 22px", borderRadius: 4, fontSize: 14.5, fontWeight: 600, cursor: notifyStatus === "submitting" ? "default" : "pointer", fontFamily: fontSans, opacity: notifyStatus === "submitting" ? 0.8 : 1 }}
              >
                {notifyStatus === "submitting" ? "Sending…" : "Notify me"}
              </button>
            </form>
          )}
          {notifyStatus === "error" && (
            <p role="alert" style={{ marginTop: 14, fontSize: 13.5, color: "#B3261E", fontWeight: 500 }}>
              {notifyError}
            </p>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: paper, borderTop: `1px solid ${rule}`, scrollMarginTop: 24 }}>
        <div style={{ ...w, padding: isMobile ? "64px 20px" : "120px 56px" }}>
          <SectionHeader tag="// frequent questions" title="Questions we hear most." />
          <div style={{ background: "#fff", border: `1px solid ${rule}` }}>
            {[
              { q: "Does it cost anything to participate?", a: "Most study-related visits, labs, and the investigational treatment itself are provided at no cost to you. We can also help with transportation and parking. Your regular insurance only covers the routine care you would have received anyway." },
              { q: "Will I get a placebo?", a: "Some studies compare a new treatment to a placebo (an inactive substance), but not all of them. Your consent form will spell out exactly how the study is designed before you decide whether to join." },
              { q: "Can I leave the study if I change my mind?", a: "Yes, at any time, for any reason. You don't have to tell us why. Your regular care at the clinic will continue unchanged." },
              { q: "Does Veris share my information with anyone?", a: "Sponsors only ever see coded, de-identified information — never your name, address, or any direct identifier. Your medical record stays at your clinic. All data we handle is HIPAA-protected." },
              { q: "Do I have to speak English?", a: "No. We work with multilingual coordinators and certified medical interpreters. The consent form and key materials will be in your spoken language before you decide anything." },
              { q: "What if something goes wrong?", a: "Every Veris site has 24/7 PI coverage. If you have a concern between visits, you'll have a direct phone number to call. Adverse events are reported immediately and reviewed by an independent safety board." },
            ].map((f, i, arr) => (
              <Faq key={i} q={f.q} a={f.a} last={i === arr.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: navy, color: "#fff", position: "relative", overflow: "hidden" }}>
        <CtaArcs teal={teal} />
        <div style={{ ...w, padding: isMobile ? "64px 20px" : "96px 56px", position: "relative", zIndex: 1, textAlign: isMobile ? "left" : "center" }}>
          <h2 style={{ fontWeight: 500, fontSize: isMobile ? 36 : 56, margin: "0 auto", letterSpacing: "-0.025em", lineHeight: 1.05, maxWidth: 760 }}>
            Have questions? <span style={{ color: teal }}>We're here.</span>
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", margin: isMobile ? "20px 0 0" : "20px auto 0", maxWidth: 560 }}>
            A Veris coordinator can answer anything — about studies, about your rights, or about whether a trial makes sense for you.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 36, justifyContent: isMobile ? "flex-start" : "center", flexDirection: isMobile ? "column" : "row" }}>
            <SiteLink to="contact?as=patient">
              <button style={{ background: teal, color: navy, border: "none", padding: "16px 26px", borderRadius: 4, fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: fontSans, display: "inline-flex", alignItems: "center", gap: 10 }}>
                Talk to a coordinator <Arrow color={navy} />
              </button>
            </SiteLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
