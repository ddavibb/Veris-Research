import { useState, useEffect, useRef } from 'react';
import { BP } from './tokens.js';

export function useIsMobile(bp = BP) {
  const get = () => typeof window !== "undefined" ? window.innerWidth < bp : false;
  const [m, setM] = useState(get);
  useEffect(() => {
    const onResize = () => setM(window.innerWidth < bp);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [bp]);
  return m;
}

export function useWrap() {
  const isMobile = useIsMobile();
  return { maxWidth: 1320, margin: "0 auto", padding: isMobile ? "0 20px" : "0 56px" };
}

export const wrap = { maxWidth: 1320, margin: "0 auto", padding: "0 56px" };

export function useInView(options = {}) {
  const threshold = options.threshold ?? 0.18;
  const once = options.once !== false;
  const rootMargin = options.rootMargin || "0px 0px -6% 0px";
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setInView(true); return; }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (once) obs.disconnect();
      } else if (!once) {
        setInView(false);
      }
    }, { threshold, rootMargin });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

export function useRoute() {
  const parse = () => ((window.location.hash || "#/").slice(2).split("?")[0] || "");
  const getScrollTarget = () => {
    const q = (window.location.hash || "").split("?")[1] || "";
    return new URLSearchParams(q).get("scroll");
  };
  const doScroll = () => {
    const target = getScrollTarget();
    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset - 24;
          window.scrollTo({ top, left: 0 });
        } else {
          window.scrollTo(0, 0);
        }
      }, 60);
    } else {
      window.scrollTo(0, 0);
    }
  };
  const [route, setRoute] = useState(parse);
  useEffect(() => {
    doScroll();
    const onHash = () => {
      setRoute(parse());
      doScroll();
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}

export function cols(desktop, isMobile) {
  return isMobile ? "1fr" : `repeat(${desktop}, 1fr)`;
}
