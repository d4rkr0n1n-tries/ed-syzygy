import Terminal from "@/components/Terminal";
import DisplayControls from "@/components/DisplayControls";
import EraSwitcher from "@/components/EraSwitcher";
import PledgeForm from "@/components/PledgeForm";
import Reveal from "@/components/Reveal";

const UNSEEN = [
  {
    tag: "// the fix",
    title: "The outage that never happened",
    body: "Nobody throws a party for the incident you prevented. Good engineering is invisible by design.",
  },
  {
    tag: "// the patch",
    title: "The breach that never made the news",
    body: "Security engineers win quietly. Their best day at work is the one where nothing happens.",
  },
  {
    tag: "// the review",
    title: "The bug caught at 11pm",
    body: "Code reviews, docs, migrations, on-call. The work that holds everything up rarely shows up in a slide deck.",
  },
];

const WAYS = [
  {
    title: "Teach",
    time: "~1 hr / month",
    body: "Run a beginner-friendly session at a school, library or community centre — in person or remote.",
    items: ["Intro to programming", "How the internet works", "Your first website"],
    icon: (
      <path d="M4 6h16M4 6v12h16V6M9 21h6M12 18v3" />
    ),
  },
  {
    title: "Mentor",
    time: "~2 hrs / month",
    body: "Pair with one learner over time. Review their code, answer the questions they're scared to ask in public.",
    items: ["1:1 code reviews", "Career conversations", "Interview prep"],
    icon: (
      <>
        <circle cx="8" cy="8" r="3" />
        <circle cx="16" cy="10" r="2.5" />
        <path d="M3 20c0-3 2.5-5 5-5s5 2 5 5M13 20c0-2 1.5-3.5 3-3.5s3 1.5 3 3.5" />
      </>
    ),
  },
  {
    title: "Build",
    time: "Your pace",
    body: "Contribute to open, free learning material — lessons, exercises, offline-first tools for low-bandwidth classrooms.",
    items: ["Open curriculum", "Accessible tooling", "Translations"],
    icon: (
      <path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16" />
    ),
  },
  {
    title: "Secure",
    time: "~1 hr / quarter",
    body: "Teach digital safety to students, teachers and parents. Help under-resourced schools lock down their systems.",
    items: ["Phishing & password basics", "School IT health-checks", "Safe-online workshops"],
    icon: (
      <>
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
];

const LOG = [
  {
    hash: "a1f3c9e",
    msg: "feat: weekend Python club at the local library",
    detail: "A backend engineer turns one Saturday a month into a room full of first programs.",
    tag: "teach",
  },
  {
    hash: "7be20d4",
    msg: "sec: password hygiene workshop for teachers",
    detail: "A security engineer spends an hour making a whole school a harder target.",
    tag: "secure",
  },
  {
    hash: "c04e81b",
    msg: "docs: translate beginner lessons into a regional language",
    detail: "A frontend dev makes the same lessons readable for thousands more students.",
    tag: "build",
  },
  {
    hash: "93dd0fa",
    msg: "refactor: one learner's career, gently, over 6 months",
    detail: "A staff engineer reviews a self-taught developer's code every other week.",
    tag: "mentor",
  },
];

const FAQ = [
  {
    q: "I'm already stretched thin. Is this realistic?",
    a: "Yes — that's the whole point. Every format here is designed around an hour a month or less. Small, regular contributions beat big, burnt-out ones.",
  },
  {
    q: "I've never taught anything. Am I qualified?",
    a: "If you've ever explained a bug to a teammate, you've taught. Beginners don't need an expert lecturer; they need someone patient who remembers what being stuck felt like.",
  },
  {
    q: "Does this count towards my company's CSR programme?",
    a: "Usually, yes. Most CSR and volunteering policies cover skills-based volunteering in education. Check your internal policy and log your hours — your contribution deserves to be on the record.",
  },
  {
    q: "I started on punch cards. I started on React. Is this for me?",
    a: "Both. Fundamentals don't expire, and neither does the value of a good explanation. Learners benefit from engineers of every generation.",
  },
  {
    q: "Why security engineers specifically?",
    a: "Digital safety is now basic literacy. Students, teachers and small schools are frequent targets and rarely have anyone to ask. An hour of your time can protect an entire community.",
  },
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#" className="brand" aria-label="Education for All — home">
            <span className="brand-mark" aria-hidden="true">
              E4
            </span>
            education_for_all
          </a>
          <nav aria-label="Primary">
            <ul className="nav-links">
              <li><a href="#unseen">Why</a></li>
              <li><a href="#era">Every era</a></li>
              <li><a href="#give">Ways to give</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </nav>
          <div className="nav-actions">
            <DisplayControls />
            <a href="#pledge" className="btn btn-primary btn-sm nav-cta">
              Pledge an hour
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* ---------- HERO ---------- */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">For developers · software engineers · security engineers</p>
              <h1>
                <span className="strike">Your work goes unnoticed.</span>
                Education
                <br />
                for All.
              </h1>
              <p className="hero-lede">
                You keep the systems up and the attackers out — quietly. Now point those same
                skills at the people who need them most, and make it count.
              </p>
              <div className="hero-ctas">
                <a href="#pledge" className="btn btn-primary">
                  Pledge one hour
                  <span aria-hidden="true">→</span>
                </a>
                <a href="#give" className="btn btn-ghost">
                  See how you can help
                </a>
              </div>
            </div>
            <Terminal />
          </div>
        </section>

        {/* ---------- UNSEEN ---------- */}
        <section className="section" id="unseen">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <span className="section-num">01 / why</span>
                <div>
                  <h2>The best engineering is invisible.</h2>
                  <p>
                    That&apos;s the job. But invisible isn&apos;t the same as unimportant — and the
                    quiet discipline you bring to work every day is exactly what turns a
                    curious student into a capable engineer.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="unseen">
                {UNSEEN.map((u) => (
                  <article key={u.title} className="unseen-item">
                    <span className="mono">{u.tag}</span>
                    <h3>{u.title}</h3>
                    <p>{u.body}</p>
                  </article>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <blockquote className="quote">
                You already give your best work to systems that never say thank you. Give an
                hour to a person who will.
                <cite>— the idea behind Education for All</cite>
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* ---------- ERA ---------- */}
        <section className="section" id="era">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <span className="section-num">02 / every era</span>
                <div>
                  <h2>Whenever you started, you have something to teach.</h2>
                  <p>
                    Mainframes or microservices, punch cards or pull requests — pick the era you
                    learned to code in.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <EraSwitcher />
            </Reveal>
          </div>
        </section>

        {/* ---------- WAYS ---------- */}
        <section className="section" id="give">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <span className="section-num">03 / ways to give</span>
                <div>
                  <h2>Four ways to help, all of them small.</h2>
                  <p>
                    Built for people with full calendars. Choose one, mix several, and count every
                    hour towards your company&apos;s Corporate Social Responsibility programme.
                  </p>
                </div>
              </div>
            </Reveal>
            <div className="ways">
              {WAYS.map((w) => (
                <Reveal key={w.title}>
                  <article className="way">
                    <div className="way-top">
                      <span className="way-icon" aria-hidden="true">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          {w.icon}
                        </svg>
                      </span>
                      <span className="way-time">{w.time}</span>
                    </div>
                    <h3>{w.title}</h3>
                    <p>{w.body}</p>
                    <ul>
                      {w.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- LOG ---------- */}
        <section className="section" id="log">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <span className="section-num">04 / git log</span>
                <div>
                  <h2>What one hour looks like.</h2>
                  <p>Small commits. Long-lived impact. No sprint review required.</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="log">
                {LOG.map((l) => (
                  <div key={l.hash} className="log-row">
                    <span className="log-hash">{l.hash}</span>
                    <div className="log-msg">
                      <strong>{l.msg}</strong>
                      <span>{l.detail}</span>
                    </div>
                    <span className="log-tag">{l.tag}</span>
                  </div>
                ))}
              </div>
              <p className="log-note"># illustrative examples of the kinds of contributions you can make</p>
            </Reveal>
          </div>
        </section>

        {/* ---------- PLEDGE ---------- */}
        <section className="section pledge" id="pledge">
          <div className="container">
            <div className="section-head">
              <span className="section-num">05 / pledge</span>
              <div>
                <h2>Make your first commit.</h2>
                <p>
                  Tell us how you&apos;d like to help. No account, no tracking — just a clear
                  statement of intent you can share with your team or CSR lead.
                </p>
              </div>
            </div>
            <PledgeForm />
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className="section" id="faq">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <span className="section-num">06 / faq</span>
                <div>
                  <h2>Questions, answered plainly.</h2>
                </div>
              </div>
            </Reveal>
            <div className="faq">
              {FAQ.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>Education for All — built by engineers, for everyone.</span>
          <span className="mono">exit 0 · your work is seen here</span>
        </div>
      </footer>
    </>
  );
}
