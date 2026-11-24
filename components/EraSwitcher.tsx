"use client";

import { useState } from "react";

type Era = {
  id: string;
  label: string;
  years: string;
  title: string;
  blurb: string;
  code: React.ReactNode;
};

const ERAS: Era[] = [
  {
    id: "mainframe",
    label: "COBOL",
    years: "1960s — still running your bank",
    title: "You kept the world's ledgers balanced.",
    blurb:
      "Decades of batch jobs that never made the news. That patience and precision is exactly what a first-time learner needs from a teacher.",
    code: (
      <>
        <span className="c">      * EDUCATION-FOR-ALL.CBL</span>
        {"\n"}       IDENTIFICATION DIVISION.
        {"\n"}       PROGRAM-ID. GIVE-BACK.
        {"\n"}       PROCEDURE DIVISION.
        {"\n"}           PERFORM TEACH-ONE-STUDENT
        {"\n"}               VARYING HOUR FROM 1 BY 1
        {"\n"}               UNTIL WORLD-IS-LITERATE.
        {"\n"}           DISPLAY &quot;KNOWLEDGE SHARED&quot;.
        {"\n"}           STOP RUN.
      </>
    ),
  },
  {
    id: "c",
    label: "C",
    years: "1980s — closest to the metal",
    title: "You understood every byte.",
    blurb:
      "You learned without Stack Overflow, from manuals and patient seniors. Be that senior for someone who has never had one.",
    code: (
      <>
        <span className="c">/* education_for_all.c */</span>
        {"\n"}#include &lt;stdio.h&gt;
        {"\n"}
        {"\n"}int main(void) {"{"}
        {"\n"}    for (int learner = 0; ; learner++) {"{"}
        {"\n"}        share(knowledge, learner);
        {"\n"}        <span className="c">/* no free() — it compounds */</span>
        {"\n"}    {"}"}
        {"\n"}    return 0;
        {"\n"}{"}"}
      </>
    ),
  },
  {
    id: "java",
    label: "Java",
    years: "1990s–2000s — enterprise everything",
    title: "You built the systems that run companies.",
    blurb:
      "You know how big things are actually built. Turn that architecture instinct into a curriculum a school can actually use.",
    code: (
      <>
        <span className="c">// EducationForAll.java</span>
        {"\n"}public final class Engineer
        {"\n"}    implements Mentor, Volunteer {"{"}
        {"\n"}
        {"\n"}  @Override
        {"\n"}  public Impact giveBack(Hours h) {"{"}
        {"\n"}    return Classroom.builder()
        {"\n"}        .teacher(this)
        {"\n"}        .seats(Integer.MAX_VALUE)
        {"\n"}        .build();
        {"\n"}  {"}"}
        {"\n"}{"}"}
      </>
    ),
  },
  {
    id: "python",
    label: "Python",
    years: "2010s — data, scripts, glue",
    title: "You automated the boring parts.",
    blurb:
      "Python is many people's first language. Your first-week-of-learning memory is still fresh enough to make it click for someone else.",
    code: (
      <>
        <span className="c"># education_for_all.py</span>
        {"\n"}from you import skills, time
        {"\n"}
        {"\n"}def give_back(hours: int = 1) -&gt; None:
        {"\n"}    for learner in world.waiting():
        {"\n"}        learner.learn(skills, hours)
        {"\n"}        print(f&quot;{"{"}learner.name{"}"} can code now&quot;)
        {"\n"}
        {"\n"}if __name__ == &quot;__main__&quot;:
        {"\n"}    give_back()
      </>
    ),
  },
  {
    id: "rust",
    label: "Rust / TS",
    years: "2020s — safe by default",
    title: "You ship fast and you ship safe.",
    blurb:
      "Security-minded, type-checked, cloud-native. Teach the next generation to build things that don't break — or get breached.",
    code: (
      <>
        <span className="c">// education_for_all.rs</span>
        {"\n"}fn give_back(me: &amp;Engineer) -&gt; Result&lt;Impact, Never&gt; {"{"}
        {"\n"}    let learners = World::underserved();
        {"\n"}    learners
        {"\n"}        .par_iter()
        {"\n"}        .map(|l| me.teach(l))
        {"\n"}        .collect()
        {"\n"}{"}"}
        {"\n"}
        {"\n"}<span className="c">// borrow-checked: knowledge is shared,</span>
        {"\n"}<span className="c">// never moved. you keep yours too.</span>
      </>
    ),
  },
];

export default function EraSwitcher() {
  const [active, setActive] = useState(ERAS[3].id);
  const era = ERAS.find((e) => e.id === active)!;

  return (
    <div>
      <div className="era-tabs" role="tablist" aria-label="Pick the era you started coding in">
        {ERAS.map((e) => (
          <button
            key={e.id}
            type="button"
            role="tab"
            id={`tab-${e.id}`}
            aria-selected={e.id === active}
            aria-controls="era-panel"
            className="era-tab"
            onClick={() => setActive(e.id)}
          >
            {e.label}
          </button>
        ))}
      </div>
      <div className="era-panel" id="era-panel" role="tabpanel" aria-labelledby={`tab-${era.id}`}>
        <pre className="era-code">
          <code>{era.code}</code>
        </pre>
        <div className="era-meta">
          <span className="mono">{era.years}</span>
          <h3>{era.title}</h3>
          <p>{era.blurb}</p>
        </div>
      </div>
    </div>
  );
}
