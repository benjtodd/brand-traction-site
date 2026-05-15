/* global React, NavBar, Button, Icon, SectionEyebrow, Pill, LogoMark */

function Hero({ onBook }) {
  return (
    <section className="bt-hero" data-screen-label="01 Hero">
      <div className="bt-hero__inner">
        <div>
          <SectionEyebrow>For small business owners</SectionEyebrow>
          <h1>Marketing that actually works.</h1>
          <p className="bt-hero__sub">
            Stop wasting time and money on ineffective ads. We help you achieve real growth
            with proven marketing solutions: a clear plan, built around your business.
          </p>
          <div className="bt-hero__ctas">
            <Button variant="primary" size="lg" onClick={onBook} iconRight="arrow-right">
              Schedule a strategy session
            </Button>
            <Button variant="ghost" size="lg">See how it works</Button>
          </div>
          <div className="bt-hero__proof">
            <span><strong>Free</strong> 30-min session</span>
            <span style={{ color: "var(--border-strong)" }}>·</span>
            <span><strong>No</strong> pitch</span>
            <span style={{ color: "var(--border-strong)" }}>·</span>
            <span><strong>One business day</strong> reply</span>
          </div>
        </div>
        <div className="bt-hero__visual" aria-hidden="true">
          <span className="bt-hero__badge">Real growth</span>
          <div className="bt-hero__chart">
            <div className="bt-hero__chart-head">
              <div>
                <div className="label">Revenue · 90 days</div>
                <div style={{ display: "flex", alignItems: "baseline", marginTop: 4 }}>
                  <span className="bt-hero__chart-roi">3.2×</span>
                  <span className="bt-hero__chart-delta">↑ +218%</span>
                </div>
              </div>
              <Pill tone="amberSoft">ROI</Pill>
            </div>
            <div className="bt-hero__chart-bars">
              {[28, 32, 26, 40, 56, 62, 78, 92].map((h, i) => (
                <div key={i} className={"bar " + (i === 7 ? "is-amber" : i >= 5 ? "is-blue" : "")}
                     style={{ height: h + "%" }} />
              ))}
            </div>
            <div className="bt-hero__chart-x">
              <span>W1</span><span>W3</span><span>W5</span><span>W7</span><span>W9</span><span>W11</span><span>W13</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pain() {
  const items = [
    { icon: "circle-dollar-sign", title: "Wasting money on ads",       copy: "Spending on campaigns that don't generate real business." },
    { icon: "users-round",        title: "Missing the right audience",  copy: "Struggling to reach the people who'd actually buy from you." },
    { icon: "compass",            title: "Stuck at the start",          copy: "Feeling overwhelmed and unsure where to even begin." },
  ];
  return (
    <section className="bt-section bt-section--blue-wash" id="problem" data-screen-label="02 Problem">
      <div className="bt-section__inner">
        <SectionEyebrow>The problem</SectionEyebrow>
        <h2 style={{ maxWidth: "20ch" }}>Struggling to make your marketing work?</h2>
        <p className="bt-body-lg" style={{ maxWidth: "60ch", margin: 0 }}>
          Confusing platforms, wasted ad spend, and poor results can leave you frustrated and stuck.
          Without a clear strategy, it's hard to grow your business.
        </p>
        <div className="bt-features" style={{ marginTop: 48 }}>
          {items.map((it) => (
            <div key={it.title} className="bt-feature">
              <div className="bt-feature__icon"><Icon name={it.icon} size={22} /></div>
              <h4>{it.title}</h4>
              <p>{it.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plan() {
  const steps = [
    {
      n: "01",
      icon: "calendar-check",
      title: "Schedule a strategy session",
      copy: "We'll learn about your business and craft a personalized strategy, built around where you are now. Not a template.",
    },
    {
      n: "02",
      icon: "rocket",
      title: "Launch your campaigns",
      copy: "We handle all the details: setup, testing, and ongoing optimization, so you can stay focused on running the business.",
    },
    {
      n: "03",
      icon: "trending-up",
      title: "See results",
      copy: "Watch your business grow with campaigns that actually work. Real numbers. Real traction. No guessing.",
    },
  ];
  return (
    <section className="bt-section bt-section--white" id="plan" data-screen-label="03 Plan">
      <div className="bt-section__inner">
        <SectionEyebrow>The plan</SectionEyebrow>
        <h2 style={{ maxWidth: "22ch" }}>A simple plan to grow your business.</h2>
        <p className="bt-body-lg" style={{ maxWidth: "55ch", margin: 0 }}>
          Three steps. Built around your business, not somebody else's playbook.
        </p>
        <div className="bt-steps">
          {steps.map((s) => (
            <div key={s.n} className="bt-step">
              <div className="bt-step__icon"><Icon name={s.icon} size={24} /></div>
              <span className="bt-step__num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="bt-section bt-section--cream" id="why" data-screen-label="04 Why">
      <div className="bt-section__inner">
        <SectionEyebrow>Why Brand Traction</SectionEyebrow>
        <h2 style={{ maxWidth: "22ch" }}>Marketing should grow the business. Not just the spend.</h2>
        <div className="bt-why">
          <div className="bt-why__card bt-why__card--problem">
            <Pill tone="amberSoft">Without a strategy</Pill>
            <p>You risk wasting money, losing opportunities, and falling behind competitors. Every month without traction is a month you don't get back.</p>
          </div>
          <div className="bt-why__card bt-why__card--solution">
            <Pill tone="soft">With the right strategy</Pill>
            <p>You'll gain confidence, attract the right audience, and see your business thrive, with a plan you actually understand and can stand behind.</p>
          </div>
        </div>
        <p className="bt-body-lg" style={{ maxWidth: "55ch", margin: "48px auto 0", textAlign: "center" }}>
          We understand how overwhelming marketing can feel. That's why we're here to help.
        </p>
      </div>
    </section>
  );
}

function BigCTA({ onBook }) {
  return (
    <section className="bt-bigcta" data-screen-label="05 Big CTA">
      <SectionEyebrow>Ready when you are</SectionEyebrow>
      <h2>Ready to transform your marketing?</h2>
      <p>
        Get started today with a free strategy session. We'll look at what you're doing now,
        what's not landing, and what the next 90 days could look like. No pitch.
      </p>
      <div className="bt-bigcta__ctas">
        <Button variant="accent" size="lg" onClick={onBook} iconRight="arrow-right">
          Schedule a strategy session
        </Button>
        <a href="mailto:ben@brandtraction.marketing" style={{ textDecoration: "none" }}>
          <Button variant="outlined" size="lg">Email Ben Directly</Button>
        </a>
      </div>
    </section>
  );
}

function NotReady({ onGuide }) {
  return (
    <section className="bt-section bt-section--white" id="guide" data-screen-label="06 Guide">
      <div className="bt-section__inner">
        <div className="bt-notready">
          <div className="bt-notready__copy">
            <SectionEyebrow>Not ready to schedule a call?</SectionEyebrow>
            <h2 style={{ maxWidth: "18ch" }}>That's okay. Start with the guide.</h2>
            <p className="bt-body-lg" style={{ maxWidth: "50ch", margin: "0 0 24px" }}>
              Download our free guide, <strong>5 Steps to Better Marketing</strong>, and take the first
              step toward marketing that works, on your own schedule.
            </p>
            <Button variant="dark" size="lg" iconRight="download" onClick={onGuide}>
              Download the free guide
            </Button>
          </div>
          <div className="bt-notready__visual" aria-hidden="true">
            <div className="bt-notready__paper">
              <div className="bt-notready__paper-eyebrow">A free guide</div>
              <div className="bt-notready__paper-title">5 Steps to Better Marketing</div>
              <ol className="bt-notready__paper-list">
                <li>Know who you're talking to.</li>
                <li>Pick one channel, not five.</li>
                <li>Track the dollars, not the clicks.</li>
                <li>Say the same thing three times.</li>
                <li>Cut what's not working, fast.</li>
              </ol>
              <div className="bt-notready__paper-foot">
                <img src="assets/bt-logo-mark.png" alt="bt" />
                <span>brandtraction.marketing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ onGuide }) {
  return (
    <footer className="bt-footer" data-screen-label="07 Footer">
      <div className="bt-footer__inner">
        <div>
          <div className="bt-footer__brand">
            <LogoMark size={36} inverse />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "#fff" }}>Brand Traction</span>
          </div>
          <p className="bt-footer__tag">Marketing strategy and consulting for small business owners who want a clear plan, not another agency.</p>
          <div className="bt-footer__social">
            <a href="https://www.facebook.com/benjtodd" aria-label="Facebook"><Icon name="facebook" size={18} /></a>
            <a href="https://www.instagram.com/benjtodd" aria-label="Instagram"><Icon name="instagram" size={18} /></a>
            <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
          </div>
        </div>
        <div>
          <h5>Get started</h5>
          <ul>
            <li><a href="#plan">The plan</a></li>
            <li><a href="#why">Why Brand Traction</a></li>
            <li><a href="https://zcal.co/benjtodd/discovery">Strategy session</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onGuide(); }}>Free guide</a></li>
          </ul>
        </div>
        <div>
          <h5>Resources</h5>
          <ul>
            <li><a href="#">5 Steps to Better Marketing</a></li>
            <li><a href="#">ROI worksheet</a></li>
            <li><a href="#">Newsletter</a></li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><a href="#">About Ben</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="bt-footer__legal">
        <span>© 2026 Brand Traction Marketing. All rights reserved.</span>
        <span>Made for small business owners.</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Hero, Pain, Plan, Why, BigCTA, NotReady, Footer });
