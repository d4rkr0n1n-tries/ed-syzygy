"use client";

import { useEffect, useState } from "react";

type Line = { kind: "cmd" | "out" | "ok"; text: string };

const SCRIPT: Line[] = [
  { kind: "cmd", text: "git log --author=you --since=forever" },
  { kind: "out", text: "fix: race condition nobody noticed (because you fixed it)" },
  { kind: "out", text: "sec: patched CVE before it became a headline" },
  { kind: "out", text: "chore: 2am on-call, again" },
  { kind: "cmd", text: "git commit -m \"teach: one hour, one student\"" },
  { kind: "ok", text: "[main 4ll1n] 1 life changed, 0 approvals needed" },
  { kind: "cmd", text: "echo $IMPACT" },
  { kind: "ok", text: "finally visible." },
];

export default function Terminal() {
  const [shown, setShown] = useState<Line[]>([]);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    const reduce =
      document.documentElement.dataset.motion === "off" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(SCRIPT);
      return;
    }

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) =>
      new Promise<void>((r) => {
        timers.push(setTimeout(r, ms));
      });

    (async () => {
      await wait(500);
      for (const line of SCRIPT) {
        if (cancelled) return;
        if (line.kind === "cmd") {
          for (let i = 1; i <= line.text.length; i++) {
            if (cancelled) return;
            setTyping(line.text.slice(0, i));
            await wait(28 + Math.random() * 40);
          }
          await wait(250);
          setTyping("");
        } else {
          await wait(320);
        }
        setShown((s) => [...s, line]);
      }
    })();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);


  return (
    <div className="terminal" role="img" aria-label="A terminal showing your unseen commits, followed by a commit that teaches one student. The result: impact, finally visible.">
      <div className="terminal-bar" aria-hidden="true">
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-title">~/education-for-all — zsh</span>
      </div>
      <div className="terminal-body" aria-hidden="true">
        {shown.map((l, i) =>
          l.kind === "cmd" ? (
            <div key={i}>
              <span className="t-prompt">$ </span>
              {l.text}
            </div>
          ) : (
            <div key={i} className={l.kind === "ok" ? "t-ok" : "t-out"}>
              {l.text}
            </div>
          ),
        )}
        <div>
          <span className="t-prompt">$ </span>
          {typing}
          <span className="cursor" />
        </div>
      </div>
    </div>
  );
}
