"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function readStore(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}
function writeStore(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage unavailable — preference just won't persist */
  }
}

export default function DisplayControls() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [large, setLarge] = useState(false);
  const [motion, setMotion] = useState(true);

  useEffect(() => {
    const saved = readStore("efa-theme");
    const current: Theme =
      saved === "light" || saved === "dark"
        ? saved
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    setTheme(current);

    const size = readStore("efa-size") === "large";
    setLarge(size);
    if (size) document.documentElement.dataset.size = "large";

    const savedMotion = readStore("efa-motion");
    setMotion(
      savedMotion === "off"
        ? false
        : savedMotion === "on"
          ? true
          : !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  const toggleMotion = () => {
    const next = !motion;
    setMotion(next);
    if (next) delete document.documentElement.dataset.motion;
    else document.documentElement.dataset.motion = "off";
    writeStore("efa-motion", next ? "on" : "off");
  };

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    writeStore("efa-theme", next);
  };

  const toggleSize = () => {
    const next = !large;
    setLarge(next);
    if (next) document.documentElement.dataset.size = "large";
    else delete document.documentElement.dataset.size;
    writeStore("efa-size", next ? "large" : "normal");
  };

  return (
    <>
      <button
        type="button"
        role="switch"
        className="switch"
        hidden /* remove this attribute in devtools to reveal the switch */
        onClick={toggleMotion}
        aria-checked={motion}
        aria-label="Gangster Mode"
        title={motion ? "Gangster Mode Off !!!!!" : "Gangster Mode On !!!!!"}
      >
        <span className="switch-thumb" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="icon-btn mono"
        onClick={toggleSize}
        aria-pressed={large}
        aria-label={large ? "Use normal text size" : "Use larger text"}
        title={large ? "Normal text" : "Larger text"}
      >
        <span style={{ fontSize: large ? 17 : 14, fontWeight: 600 }}>Aa</span>
      </button>
      <button
        type="button"
        className="icon-btn"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        title="Toggle theme"
      >
        {theme === "dark" ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        )}
      </button>
    </>
  );
}
