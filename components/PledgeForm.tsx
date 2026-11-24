"use client";

import { useState } from "react";

const ROLES = ["Developer", "Software Engineer", "Security Engineer", "SRE / DevOps", "Data / ML", "Engineering Manager"];
const WAYS = ["Teach", "Mentor", "Build", "Secure"];
const HOURS = ["1 hour / month", "2 hours / month", "4 hours / month", "1 weekend / quarter"];

export default function PledgeForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState(ROLES[0]);
  const [ways, setWays] = useState<string[]>(["Mentor"]);
  const [hours, setHours] = useState(HOURS[0]);
  const [committed, setCommitted] = useState(false);

  const toggleWay = (w: string) =>
    setWays((cur) => (cur.includes(w) ? cur.filter((x) => x !== w) : [...cur, w]));

  const handle = name.trim() || "anonymous-engineer";
  const slug = handle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "engineer";

  return (
    <div className="pledge-card">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCommitted(true);
        }}
      >
        <div className="field">
          <label htmlFor="pledge-name">Your name or handle</label>
          <input
            id="pledge-name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setCommitted(false);
            }}
            placeholder="e.g. ada_l"
            autoComplete="nickname"
            maxLength={40}
          />
        </div>

        <div className="field">
          <label htmlFor="pledge-role">What you do</label>
          <select
            id="pledge-role"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              setCommitted(false);
            }}
          >
            {ROLES.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <fieldset>
            <legend>How you want to help</legend>
            <div className="chips">
              {WAYS.map((w) => (
                <label key={w} className="chip">
                  <input
                    type="checkbox"
                    checked={ways.includes(w)}
                    onChange={() => {
                      toggleWay(w);
                      setCommitted(false);
                    }}
                  />
                  <span>{w}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="field">
          <fieldset>
            <legend>Time you can give</legend>
            <div className="chips">
              {HOURS.map((h) => (
                <label key={h} className="chip">
                  <input
                    type="radio"
                    name="hours"
                    checked={hours === h}
                    onChange={() => {
                      setHours(h);
                      setCommitted(false);
                    }}
                  />
                  <span>{h}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <button type="submit" className="btn btn-primary" disabled={ways.length === 0}>
          git commit --pledge
        </button>
      </form>

      <div className="receipt" aria-live="polite">
        <span className="dim">$ git diff --staged pledge.yml</span>
        {"\n\n"}
        {`+ name:   ${handle}`}
        {"\n"}
        {`+ role:   ${role}`}
        {"\n"}
        {`+ gives:  [${ways.join(", ") || "—"}]`}
        {"\n"}
        {`+ time:   ${hours}`}
        {"\n"}
        {"+ seen:   true"}
        {"\n\n"}
        {committed ? (
          <>
            <span className="dim">$ git commit --pledge</span>
            {"\n"}
            {`[main ${slug.slice(0, 7).padEnd(7, "0")}] ${handle} pledged to ${ways.join(" + ").toLowerCase()}`}
            {"\n"}
            {" 1 file changed, ∞ insertions(+)"}
            {"\n\n"}
            {"Thank you. Your work is seen here."}
          </>
        ) : (
          <span className="dim">{"# fill in the form, then commit."}</span>
        )}
      </div>
    </div>
  );
}
