import React, { useMemo, useState } from "react";

export default function App() {
  const [mode, setMode] = useState("pro"); // "pro" | "fun"

  const theme = useMemo(() => {
    const base = {
      radius: 18,
      shadow: "0 18px 60px rgba(0,0,0,0.14)",
      hairline: "rgba(255,255,255,0.10)",
      card: "rgba(255,255,255,0.06)",
      text: "rgba(255,255,255,0.92)",
      textMuted: "rgba(255,255,255,0.68)",
    };

    if (mode === "pro") {
      return {
        ...base,
        modeName: "Offer",
        accent: "#2B6CFF",
        accent2: "#22C55E",
        bg1: "#071028",
        bg2: "#071B2B",
        glow: "rgba(43,108,255,0.35)",
        glow2: "rgba(34,197,94,0.25)",
      };
    }

    return {
      ...base,
      modeName: "Personal",
      accent: "#22C55E",
      accent2: "#2B6CFF",
      bg1: "#061A12",
      bg2: "#071028",
      glow: "rgba(34,197,94,0.30)",
      glow2: "rgba(43,108,255,0.22)",
    };
  }, [mode]);

  const nav =
    mode === "pro"
      ? [
          { label: "Overview", href: "#overview" },
          { label: "Experience", href: "#experience" },
          { label: "Projects", href: "#projects" },
          { label: "Skills", href: "#skills" },
          { label: "Education", href: "#education" },
          { label: "Contact", href: "#contact" },
        ]
      : [
          { label: "About", href: "#about" },
          { label: "Hikes", href: "#hikes" },
          { label: "Biking", href: "#biking" },
          { label: "Travel", href: "#travel" },
          { label: "Food", href: "#food" },
          { label: "Karate", href: "#karate" },
        ];

  return (
    <div
      style={{
        minHeight: "100vh",
        color: theme.text,
        background: `radial-gradient(900px 500px at 15% 15%, ${theme.glow}, transparent 60%),
                     radial-gradient(900px 500px at 85% 20%, ${theme.glow2}, transparent 60%),
                     linear-gradient(160deg, ${theme.bg1}, ${theme.bg2})`,
      }}
    >
      <Style theme={theme} />

      <Topbar theme={theme} mode={mode} setMode={setMode} nav={nav} />

      <main className="container">
        <Hero mode={mode} />

        {mode === "pro" ? <ProContent /> : <FunContent />}

        <Footer mode={mode} />
      </main>
    </div>
  );
}

function Topbar({ theme, mode, setMode, nav }) {
  return (
    <header className="topbar">
      <div className="container topbarInner">
        <a className="brand" href="#overview">
          <div className="logoMark" aria-hidden />
          <div className="brandText">
            <div className="brandName">Ameya Bhat</div>
            <div className="brandSub">Project Manager • PMP • CU Boulder</div>
          </div>
        </a>

        <nav className="nav">
          {nav.map((item) => (
            <a key={item.label} href={item.href} className="navLink">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="right">
          <ModeSwitch
            mode={mode}
            onToggle={() => setMode(mode === "pro" ? "fun" : "pro")}
          />
          <a className="btnMini" href="#contact">
            Connect
          </a>
        </div>
      </div>
    </header>
  );
}

function ModeSwitch({ mode, onToggle }) {
  const isFun = mode === "fun";
  return (
    <button
      className="switch"
      onClick={onToggle}
      role="switch"
      aria-checked={isFun}
      title="Toggle Professional / Fun mode"
    >
      <span className="switchLabel">{isFun ? "Fun" : "Pro"}</span>
      <span className="switchTrack">
        <span
          className="switchThumb"
          style={{ transform: `translateX(${isFun ? 20 : 0}px)` }}
        />
      </span>
    </button>
  );
}

function Hero({ mode }) {
  return (
    <section className="hero" id="overview">
      <div className="heroLeft">
        <div className="kicker">
          <span className="kickerDot" />
          {mode === "pro" ? "Professional Mode" : "Fun Mode"}
        </div>

        <h1 className="h1">
          {mode === "pro" ? (
            <>
              Project delivery that’s <span className="accent">calm, crisp, and measurable</span>.
            </>
          ) : (
            <>
              The <span className="accent">human side</span>: trails, travel, sushi, and karate.
            </>
          )}
        </h1>

        <p className="lead">
          {mode === "pro"
            ? "PMP-certified Project Manager focused on reliable delivery systems, stakeholder alignment, and clean execution."
            : "Hiker. Biker. Traveler. Absolute foodie (sushi fan). L2 black belt in karate. Structured at work, high-energy outside it."}
        </p>

        <div className="heroActions">
          {mode === "pro" ? (
            <>
              <a className="btnPrimary" href="#experience">View Experience</a>
              <a className="btnGhost" href="#projects">See Projects</a>
            </>
          ) : (
            <>
              <a className="btnPrimary" href="#hikes">Explore Hikes</a>
              <a className="btnGhost" href="#food">Food Favs</a>
            </>
          )}
        </div>

        <div className="metaRow">
          <MetaPill label="Location" value="Boulder, CO" />
          <MetaPill label="Email" value="ameya.bhat@gmail.com" />
          <MetaPill label="Phone" value="+1 (720) 843-7819" />
        </div>
      </div>

      <div className="heroRight">
        <div className="mockCard">
          <div className="mockHeader">
            <div className="mockTitle">{mode === "pro" ? "Now" : "Currently"}</div>
            <div className="mockBadge">{mode === "pro" ? "Delivery" : "Vibes"}</div>
          </div>
          <div className="mockBody">
            <div className="mockLine" />
            <div className="mockLine short" />
            <div className="mockLine" />
            <div className="mockLine short" />
          </div>
          <div className="mockFooter">
            <span className="miniChip">{mode === "pro" ? "Roadmaps" : "Trails"}</span>
            <span className="miniChip">{mode === "pro" ? "Risks" : "Sushi"}</span>
            <span className="miniChip">{mode === "pro" ? "Stakeholders" : "Karate"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProContent() {
  return (
    <>
      <section className="section" id="experience">
        <SectionHeader
          title="Experience"
          subtitle="Delivery, coordination, and stakeholder alignment across software + engineering projects."
        />
        <div className="stack">
          <RoleCard
            title="Assistant Project Manager"
            org="Maxwell CubeSat • CO, USA"
            date="Oct 2025 – Present"
            bullets={[
              "Scheduled and coordinated dependencies, ensuring clear ownership of deliverables and on-time completion.",
              "Maintained risk tracker and finance documentation tied to cost centers to track expenses.",
              "Mapped user engagement drop-offs using behavioral event data; turned signals into roadmap hypotheses.",
              "Assessed change requests and analyzed effects on timelines, resourcing, and delivery.",
            ]}
          />
          <RoleCard
            title="Business Analyst"
            org="LeadSquared • Bangalore, India"
            date="Jan 2023 – Jul 2024"
            bullets={[
              "Managed IT infrastructure for 25 institutions; delivered deployments in ~3 months, up to 3 concurrent projects.",
              "Delivered 12 IT infra + application projects with DevOps/Cloud collaboration for data platforms.",
              "Implemented productivity tracking; identified gaps and reduced lead leakage to 0%.",
              "Delivered systems for study-abroad agencies; reduced conversion time by 70%, increased satisfaction by 40%.",
            ]}
          />
          <RoleCard
            title="Machine Shop Intern"
            org="Godrej & Boyce • India"
            date="Jan 2022 – Jul 2022"
            bullets={[
              "Built a DOF model to optimize an ongoing project and improved operational control.",
              "Designed fixtures/support structures; reduced cycle time from 45 to 30 days while maintaining tolerance.",
            ]}
          />
        </div>
      </section>

      <section className="section" id="projects">
        <SectionHeader title="Projects" subtitle="Selected projects showing scale and impact." />
        <div className="grid2">
          <Card title="End-to-end Admission System" meta="Budget: $100K">
            <ul className="list">
              <li><span className="dot" />Designed a multi-layer system for Marketing, Sales, Finance, Admissions, and C-suite.</li>
              <li><span className="dot" />Led cross-team integration workflows and approvals for data + finance operations.</li>
              <li><span className="dot" />Built student portal aligned with university data formats and communication flows.</li>
            </ul>
          </Card>

          <Card title="PawNation (Dog wellbeing NGO)" meta="Budget: $500">
            <ul className="list">
              <li><span className="dot" />Led a team of 15; secured capital, training, and space.</li>
              <li><span className="dot" />Ran awareness + fundraising campaigns and collected community feedback.</li>
              <li><span className="dot" />Created SOPs for feeding operations and incident response.</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="section" id="skills">
        <SectionHeader title="Skills" subtitle="Delivery, systems, analytics, and modern PM tooling." />
        <div className="grid2">
          <Card title="Core PM">
            <div className="chips">
              <Chip>Scheduling</Chip><Chip>Dependencies</Chip><Chip>Risk tracking</Chip>
              <Chip>Agile / Scrum</Chip><Chip>Jira</Chip><Chip>Confluence</Chip>
              <Chip>Stakeholder management</Chip><Chip>KPIs</Chip>
            </div>
          </Card>
          <Card title="Tools & Data">
            <div className="chips">
              <Chip>Tableau</Chip><Chip>Power BI</Chip><Chip>Excel</Chip>
              <Chip>SQL</Chip><Chip>Python</Chip><Chip>R</Chip>
              <Chip>SysML</Chip><Chip>Innoslate</Chip><Chip>GenAI</Chip>
            </div>
          </Card>
        </div>
      </section>

      <section className="section" id="education">
        <SectionHeader title="Education" subtitle="Engineering management + strong mechanical foundation." />
        <div className="grid2">
          <Card title="University of Colorado, Boulder" meta="Aug 2024 – May 2026">
            <p>Master of Engineering — Engineering Management</p>
          </Card>
          <Card title="Manipal Institute of Technology" meta="Jul 2019 – May 2023">
            <p>Bachelor of Technology — Mechanical Engineering</p>
          </Card>
        </div>
      </section>

      <section className="section" id="contact">
        <SectionHeader title="Contact" subtitle="Let’s build something that ships." />
        <div className="grid2">
          <Card title="Reach out">
            <ul className="list">
              <li><span className="dot" />Email: ameya.bhat@gmail.com</li>
              <li><span className="dot" />Phone: +1 (720) 843-7819</li>
              <li><span className="dot" />LinkedIn: (add link)</li>
            </ul>
            <div className="ctaRow">
              <a className="btnPrimary" href="mailto:ameya.bhat@gmail.com">Email</a>
              <a className="btnGhost" href="#">LinkedIn</a>
            </div>
          </Card>
          <Card title="Quick summary">
            <p className="muted">
              PMP-certified Project Manager with experience across engineering + software delivery,
              stakeholder alignment, and metrics-driven execution.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}

function FunContent() {
  return (
    <>
      <section className="section" id="about">
        <SectionHeader title="Fun Side" subtitle="Same person — different energy." />
        <div className="grid2">
          <Card title="Core Vibes">
            <div className="chips">
              <Chip>Hiker 🥾</Chip>
              <Chip>Biker 🚴</Chip>
              <Chip>Traveler ✈️</Chip>
              <Chip>Foodie 🍣</Chip>
              <Chip>Karate (L2 Black Belt) 🥋</Chip>
            </div>
            <p className="muted" style={{ marginTop: 12 }}>
              Trails + two wheels + new places + sushi + discipline.
            </p>
          </Card>
          <Card title="Fun highlights">
            <ul className="list">
              <li><span className="dot" />Hiking for clarity</li>
              <li><span className="dot" />Biking for speed</li>
              <li><span className="dot" />Travel for perspective</li>
              <li><span className="dot" />Sushi for happiness</li>
              <li><span className="dot" />Karate for focus + consistency</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="section" id="hikes">
        <SectionHeader title="Hikes" subtitle="Trail notes, favorite routes, and views worth earning." />
        <div className="grid3">
          <Card title="Trail Log"><p className="muted">Add trail name • distance • elevation • rating.</p></Card>
          <Card title="Gear I Actually Use"><p className="muted">Shoes, layers, and the one snack that never fails.</p></Card>
          <Card title="Photo Grid"><p className="muted">Keep it minimal: a clean 3×3 grid.</p></Card>
        </div>
      </section>

      <section className="section" id="biking">
        <SectionHeader title="Biking" subtitle="Two wheels fixes the brain." />
        <div className="grid2">
          <Card title="Routes"><p className="muted">3–5 favorite Boulder rides + one big ride goal.</p></Card>
          <Card title="Why biking"><p className="muted">Short paragraph: endurance, reset, and momentum.</p></Card>
        </div>
      </section>

      <section className="section" id="travel">
        <SectionHeader title="Travel" subtitle="Places, stories, and tiny moments." />
        <div className="grid2">
          <Card title="Where I’ve been"><p className="muted">List cities + one-line memory each.</p></Card>
          <Card title="Bucket list"><p className="muted">3 places, 3 experiences, 3 foods to try.</p></Card>
        </div>
      </section>

      <section className="section" id="food">
        <SectionHeader title="Food" subtitle="Sushi is a personality trait 🍣" />
        <div className="grid3">
          <Card title="Sushi Favorites"><p className="muted">Top rolls/nigiri + favorite spot(s).</p></Card>
          <Card title="Food Map"><p className="muted">Saved places + “order this” recommendations.</p></Card>
          <Card title="Hot Take Corner"><p className="muted">One spicy food opinion. Keep it funny.</p></Card>
        </div>
      </section>

      <section className="section" id="karate">
        <SectionHeader title="Karate" subtitle="Discipline outside work = calm inside work." />
        <div className="grid2">
          <Card title="L2 Black Belt"><p className="muted">Add: when he started, what it taught him, why it matters.</p></Card>
          <Card title="What karate changed">
            <ul className="list">
              <li><span className="dot" />Consistency beats motivation</li>
              <li><span className="dot" />Small improvements compound</li>
              <li><span className="dot" />Focus under pressure is trainable</li>
            </ul>
          </Card>
        </div>
      </section>
    </>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="sectionHeader">
      <h2 className="h2">{title}</h2>
      <p className="sub">{subtitle}</p>
    </div>
  );
}

function Card({ title, meta, children }) {
  return (
    <div className="card">
      <div className="cardTitleRow">
        <div className="cardTitle">{title}</div>
        {meta ? <div className="metaTag">{meta}</div> : null}
      </div>
      <div className="cardBody">{children}</div>
    </div>
  );
}

function RoleCard({ title, org, date, bullets }) {
  return (
    <div className="card">
      <div className="roleTop">
        <div>
          <div className="cardTitle">{title}</div>
          <div className="muted">{org}</div>
        </div>
        <div className="roleDate">{date}</div>
      </div>
      <ul className="list" style={{ marginTop: 12 }}>
        {bullets.map((b, i) => (
          <li key={i}><span className="dot" />{b}</li>
        ))}
      </ul>
    </div>
  );
}

function Chip({ children }) {
  return <span className="chip">{children}</span>;
}

function MetaPill({ label, value }) {
  return (
    <div className="metaPill">
      <div className="metaLabel">{label}</div>
      <div className="metaValue">{value}</div>
    </div>
  );
}

function Footer({ mode }) {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div>
          <div className="footerBrand">Ameya Bhat</div>
          <div className="footerSub">
            {mode === "pro"
              ? "PMP • Project delivery • Engineering management @ CU Boulder"
              : "Trails • Travel • Sushi • Karate"}
          </div>
        </div>
        <div className="footerRight">
          <a className="footerLink" href="#overview">Top</a>
          <a className="footerLink" href="#contact">Email</a>
          <a className="footerLink" href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

function Style({ theme }) {
  return (
    <style>{`
      :root { --accent: ${theme.accent}; --accent2: ${theme.accent2}; --radius: ${theme.radius}px; }
      * { box-sizing: border-box; }
      body { margin: 0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; }
      a { color: inherit; text-decoration: none; }

      .container { width: min(1120px, calc(100% - 48px)); margin: 0 auto; }

      .topbar { position: sticky; top: 0; z-index: 20; backdrop-filter: blur(14px);
        background: linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.10));
        border-bottom: 1px solid ${theme.hairline};
      }
      .topbarInner { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 14px 0; }

      .brand { display: flex; align-items: center; gap: 12px; }
      .logoMark { width: 38px; height: 38px; border-radius: 14px;
        background: radial-gradient(12px 12px at 30% 30%, rgba(255,255,255,0.25), transparent 60%),
                    linear-gradient(135deg, var(--accent), var(--accent2));
        box-shadow: 0 12px 30px rgba(0,0,0,0.25);
      }
      .brandName { font-weight: 950; letter-spacing: 0.2px; }
      .brandSub { font-size: 12px; color: ${theme.textMuted}; margin-top: 2px; }

      .nav { display: none; gap: 8px; }
      @media (min-width: 920px) { .nav { display: flex; } }
      .navLink { font-size: 13px; color: ${theme.textMuted}; padding: 10px 10px; border-radius: 12px; transition: all 160ms ease; }
      .navLink:hover { color: ${theme.text}; background: rgba(255,255,255,0.06); }

      .right { display: flex; align-items: center; gap: 12px; }

      .switch { display: flex; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 999px;
        border: 1px solid ${theme.hairline}; background: rgba(255,255,255,0.04); color: ${theme.text}; cursor: pointer;
        transition: transform 140ms ease, background 140ms ease;
      }
      .switch:hover { background: rgba(255,255,255,0.06); transform: translateY(-1px); }
      .switchLabel { font-size: 12px; font-weight: 950; letter-spacing: 0.3px; opacity: 0.9; }
      .switchTrack { width: 44px; height: 24px; border-radius: 999px; background: linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04));
        border: 1px solid rgba(255,255,255,0.10); position: relative; overflow: hidden;
      }
      .switchTrack::before { content: ""; position: absolute; inset: 0; background: linear-gradient(135deg, var(--accent), var(--accent2)); opacity: 0.55; }
      .switchThumb { position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; border-radius: 999px;
        background: rgba(255,255,255,0.92); box-shadow: 0 10px 22px rgba(0,0,0,0.30); transition: transform 220ms cubic-bezier(.2,.8,.2,1);
      }

      .btnPrimary, .btnGhost, .btnMini { border-radius: 999px; border: 1px solid rgba(255,255,255,0.12); cursor: pointer;
        transition: transform 140ms ease, background 140ms ease, border 140ms ease; color: ${theme.text}; display: inline-flex; align-items: center; justify-content: center;
      }
      .btnPrimary { padding: 12px 14px; background: linear-gradient(135deg, var(--accent), var(--accent2)); font-weight: 950; box-shadow: 0 14px 40px rgba(0,0,0,0.30); }
      .btnPrimary:hover { transform: translateY(-1px); }
      .btnGhost { padding: 12px 14px; background: rgba(255,255,255,0.06); }
      .btnGhost:hover { background: rgba(255,255,255,0.10); transform: translateY(-1px); }
      .btnMini { padding: 10px 12px; background: rgba(255,255,255,0.06); font-weight: 900; font-size: 13px; }
      .btnMini:hover { background: rgba(255,255,255,0.10); transform: translateY(-1px); }

      .hero { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 22px; padding: 44px 0 22px; align-items: stretch; }
      @media (max-width: 920px) { .hero { grid-template-columns: 1fr; } }

      .kicker { display: inline-flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 999px; border: 1px solid ${theme.hairline};
        background: rgba(255,255,255,0.04); color: ${theme.textMuted}; font-size: 12px; font-weight: 900;
      }
      .kickerDot { width: 10px; height: 10px; border-radius: 99px; background: linear-gradient(135deg, var(--accent), var(--accent2)); box-shadow: 0 0 0 6px rgba(255,255,255,0.06); }

      .h1 { margin: 14px 0 10px; font-size: clamp(34px, 4vw, 52px); line-height: 1.05; letter-spacing: -0.02em; }
      .accent { background: linear-gradient(135deg, var(--accent), var(--accent2)); -webkit-background-clip: text; background-clip: text; color: transparent; }
      .lead { margin: 0; color: ${theme.textMuted}; font-size: 15.5px; line-height: 1.6; max-width: 70ch; }
      .heroActions { display: flex; gap: 12px; margin-top: 18px; flex-wrap: wrap; }

      .metaRow { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 18px; }
      .metaPill { padding: 10px 12px; border-radius: 14px; border: 1px solid ${theme.hairline}; background: rgba(255,255,255,0.04); min-width: 170px; }
      .metaLabel { font-size: 11px; color: ${theme.textMuted}; font-weight: 900; }
      .metaValue { margin-top: 2px; font-weight: 950; font-size: 13px; }

      .mockCard { width: 100%; border-radius: var(--radius); border: 1px solid ${theme.hairline};
        background: linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03)); box-shadow: ${theme.shadow}; overflow: hidden;
      }
      .mockHeader { display: flex; align-items: center; justify-content: space-between; padding: 14px 16px; border-bottom: 1px solid ${theme.hairline}; }
      .mockTitle { font-weight: 950; letter-spacing: 0.2px; }
      .mockBadge { font-size: 12px; font-weight: 950; padding: 6px 10px; border-radius: 999px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.10); }
      .mockBody { padding: 16px; display: grid; gap: 10px; }
      .mockLine { height: 12px; border-radius: 999px; background: linear-gradient(90deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06)); }
      .mockLine.short { width: 70%; }
      .mockFooter { display: flex; gap: 8px; flex-wrap: wrap; padding: 14px 16px 18px; border-top: 1px solid ${theme.hairline}; }
      .miniChip { font-size: 12px; padding: 8px 10px; border-radius: 999px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10); color: ${theme.textMuted}; font-weight: 950; }

      .section { padding: 26px 0 16px; }
      .sectionHeader { margin-bottom: 14px; }
      .h2 { margin: 0; font-size: 22px; letter-spacing: -0.01em; }
      .sub { margin: 6px 0 0; color: ${theme.textMuted}; line-height: 1.5; }

      .stack { display: grid; gap: 14px; }
      .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
      .grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
      @media (max-width: 980px) { .grid2, .grid3 { grid-template-columns: 1fr; } }

      .card { border-radius: var(--radius); border: 1px solid ${theme.hairline}; background: ${theme.card}; padding: 16px; }
      .cardTitleRow { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
      .cardTitle { font-weight: 950; margin-bottom: 6px; }
      .cardBody { color: ${theme.textMuted}; line-height: 1.65; font-size: 14.5px; }

      .roleTop { display: flex; align-items: flex-start; justify-content: space-between; gap: 14px; }
      .roleDate { font-size: 12px; font-weight: 950; padding: 8px 10px; border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.10); background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.78); white-space: nowrap;
      }
      .metaTag { font-size: 12px; font-weight: 950; padding: 7px 10px; border-radius: 999px; background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.10); color: rgba(255,255,255,0.78); white-space: nowrap;
      }

      .chips { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
      .chip { padding: 8px 10px; font-size: 12px; font-weight: 950; border-radius: 999px; border: 1px solid rgba(255,255,255,0.10);
        background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.82);
      }

      .list { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
      .dot { width: 8px; height: 8px; border-radius: 99px; display: inline-block; margin-right: 10px;
        background: linear-gradient(135deg, var(--accent), var(--accent2)); transform: translateY(-1px);
      }

      .ctaRow { display: flex; gap: 10px; margin-top: 14px; flex-wrap: wrap; }
      .muted { color: ${theme.textMuted}; }

      .footer { padding: 26px 0 40px; }
      .footerInner { margin-top: 18px; border-top: 1px solid ${theme.hairline}; padding-top: 18px;
        display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap;
      }
      .footerBrand { font-weight: 950; }
      .footerSub { font-size: 12px; color: ${theme.textMuted}; margin-top: 2px; }
      .footerRight { display: flex; gap: 10px; }
      .footerLink { color: ${theme.textMuted}; font-weight: 950; font-size: 13px; padding: 8px 10px; border-radius: 12px; border: 1px solid transparent; }
      .footerLink:hover { color: ${theme.text}; border-color: rgba(255,255,255,0.10); background: rgba(255,255,255,0.05); }
    `}</style>
  );
}
