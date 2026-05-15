/* global React, Button, Icon */
const { useState } = React;

function BookingModal({ open, onClose }) {
  const [stage, setStage] = useState("form");
  const [form, setForm] = useState({ name: "", email: "", business: "", challenge: "ads" });

  if (!open) return null;

  const onSubmit = (e) => {
    e.preventDefault();
    setStage("success");
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => { setStage("form"); setForm({ name: "", email: "", business: "", challenge: "ads" }); }, 250);
  };

  return (
    <div className="bt-scrim" onClick={handleClose}>
      <div className="bt-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="bt-modal__close" onClick={handleClose} aria-label="Close">
          <Icon name="x" size={18} />
        </button>

        {stage === "form" && (
          <>
            <span className="bt-eyebrow">Free · 30 minutes · no pitch</span>
            <h3 style={{ margin: "8px 0 12px" }}>Schedule a strategy session</h3>
            <p className="lead">
              Tell us where you're stuck. We'll come prepared with a starting point, not a pitch deck.
            </p>
            <form onSubmit={onSubmit}>
              <div className="bt-field">
                <label htmlFor="bf-name">Your name</label>
                <input id="bf-name" required value={form.name}
                       onChange={(e) => setForm({ ...form, name: e.target.value })}
                       placeholder="Sarah Kim" />
              </div>
              <div className="bt-field">
                <label htmlFor="bf-email">Email</label>
                <input id="bf-email" type="email" required value={form.email}
                       onChange={(e) => setForm({ ...form, email: e.target.value })}
                       placeholder="you@yourbusiness.com" />
              </div>
              <div className="bt-field">
                <label htmlFor="bf-biz">Your business</label>
                <input id="bf-biz" value={form.business}
                       onChange={(e) => setForm({ ...form, business: e.target.value })}
                       placeholder="Maple & Oak Café · Brooklyn" />
              </div>
              <div className="bt-field">
                <label htmlFor="bf-challenge">What's the biggest challenge right now?</label>
                <select id="bf-challenge" value={form.challenge}
                        onChange={(e) => setForm({ ...form, challenge: e.target.value })}>
                  <option value="ads">Ads aren't converting</option>
                  <option value="strategy">No clear strategy</option>
                  <option value="messaging">Messaging isn't landing</option>
                  <option value="scaling">Scaling what's already working</option>
                  <option value="other">Something else</option>
                </select>
              </div>
              <Button variant="primary" type="submit" size="lg">
                Request my session
              </Button>
              <p style={{ fontSize: 13, color: "var(--bt-slate)", marginTop: 16, marginBottom: 0 }}>
                We'll reply within one business day. No credit card. No commitment.
              </p>
            </form>
          </>
        )}

        {stage === "success" && (
          <div className="bt-modal__success">
            <div className="bt-modal__success-icon">
              <Icon name="check" size={36} strokeWidth={2.5} />
            </div>
            <h3 style={{ margin: 0 }}>You're in. Let's get to work.</h3>
            <p className="lead" style={{ marginBottom: 8 }}>
              Hey {form.name || "there"}, we got it. Ben will email you within one business day to lock in a time.
            </p>
            <div style={{ background: "var(--bt-blue-wash)", borderRadius: 12, padding: 16, textAlign: "left", width: "100%" }}>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--bt-slate)", marginBottom: 4 }}>What happens next</div>
              <ol style={{ margin: 0, paddingLeft: 20, fontSize: 14, lineHeight: 1.6, color: "var(--fg-2)" }}>
                <li>You'll get a calendar link to pick a 30-min slot.</li>
                <li>Ben reviews what you sent and comes prepared.</li>
                <li>We walk through your real numbers, together.</li>
              </ol>
            </div>
            <Button variant="ghost" onClick={handleClose}>Back to the site</Button>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { BookingModal });
