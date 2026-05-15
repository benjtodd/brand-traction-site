/* global React, Icon, Button */
const { useState } = React;

const ML_API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMjg5ZmU3NTA2MmY3YTE5MTQ3MGMzOTZlMDUzYzM2YTkxYjM5MDhhNzk1MjA5ZTYzODRkYTNlNDc0YmIyODFjZjZhNjBmM2NkMjM2ODdhOTEiLCJpYXQiOjE3Nzg4MzAwMzYuNTI0MzUyLCJuYmYiOjE3Nzg4MzAwMzYuNTI0MzU0LCJleHAiOjQ5MzQ1MDM2MzYuNTIwMDE2LCJzdWIiOiIyMzY5MDM1Iiwic2NvcGVzIjpbXX0.c6ZACUpXZtmhoVOJ26V54hhEwkpZQnwA1UtbSAy9PIPNZQb12p_pKza6m2fd6DGtn9jK8nNrWHjgDHrlnQJGfhhHEVlw1sQuEDGWo_9C6H0Lo9IOUZBRF9G8h8NDV1tOXLAAzFQfg5otXbk8CyaO66-c-pLrvlQuUiFkn-a21yy82wf6BpF-nb8BS99Qxy8zZ37nbz4dxtOkj1EuFXABeneHY291oiOWvJTaKgU0KOVzfIeEpi90KY_zK-4TikwR1Zqlv1soJnZvv8dzkXxGyAan_NhsYkOH1Z_FEw0xOeIpukPIea0L2s6kDRKeCwpCqpA6DrZbwxwLstEOn9Wl9RYXlSHvHOWn2Yx2aSFjkKPRpzpMX7uGkid-4peQoCKuX3H3Il3VmufxUkIS2gaeF0h2c0AEvHAGFwDgH0Iz5abEcyFofaQ2rRRG1tjjSI8JBW54O8N-Z_ojXqozY-x8VqRsg_vrAN8UIgD86EbBS-Ow45kH8NmlfJRijRWJw2MO1RF8oeHhQiYQ-rZfLwmsIlLdmKEQxnDPBwHkSUtWJEjvsdI8EcO31CGOd2XN3ykrWJr_WTHl_ep9_OQg5F03UqRJiMKIy3WgyS6nAmJpyhZwed3sB0KVApJ2HiGPKZZnpOxhEpZBY2vtlU5Q5jV7ksV7Y8wXwvKh-jKMQPSTol8";
const ML_GROUP_ID = "187516967667631652";

function GuideModal({ open, onClose }) {
  const [stage, setStage] = useState("form");
  const [form, setForm] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  if (!open) return null;

  const handleClose = () => {
    onClose();
    setTimeout(() => { setStage("form"); setForm({ name: "", email: "" }); setError(""); }, 250);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStage("loading");
    setError("");
    try {
      const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${ML_API_KEY}`,
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          fields: { name: form.name },
          groups: [ML_GROUP_ID],
        }),
      });
      if (res.status === 200 || res.status === 201) {
        setStage("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.message || "Something went wrong. Please try again.");
        setStage("form");
      }
    } catch (err) {
      setError("Connection error. Please try again.");
      setStage("form");
    }
  };

  return (
    <div className="bt-scrim" onClick={handleClose}>
      <div className="bt-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="bt-modal__close" onClick={handleClose} aria-label="Close">
          <Icon name="x" size={18} />
        </button>

        {stage !== "success" ? (
          <>
            <span className="bt-eyebrow">Free · instant download</span>
            <h3 style={{ margin: "8px 0 12px" }}>5 Steps to Better Marketing</h3>
            <p className="lead">
              Enter your details and we'll send the guide straight to your inbox — plus monthly marketing tips to keep you growing.
            </p>
            <form onSubmit={onSubmit}>
              <div className="bt-field">
                <label htmlFor="gf-name">Your name</label>
                <input id="gf-name" required value={form.name}
                       onChange={(e) => setForm({ ...form, name: e.target.value })}
                       placeholder="Sarah Kim" />
              </div>
              <div className="bt-field">
                <label htmlFor="gf-email">Email address</label>
                <input id="gf-email" type="email" required value={form.email}
                       onChange={(e) => setForm({ ...form, email: e.target.value })}
                       placeholder="you@yourbusiness.com" />
              </div>
              {error && (
                <p style={{ color: "#b45309", fontSize: 14, margin: "0 0 12px", padding: "10px 14px", background: "var(--bt-amber-wash)", borderRadius: 8 }}>
                  {error}
                </p>
              )}
              <Button variant="dark" type="submit" size="lg" disabled={stage === "loading"}>
                {stage === "loading" ? "Sending…" : "Send me the guide"}
              </Button>
              <p style={{ fontSize: 13, color: "var(--bt-slate)", marginTop: 16, marginBottom: 0 }}>
                No spam, ever. Unsubscribe any time.
              </p>
            </form>
          </>
        ) : (
          <div className="bt-modal__success">
            <div className="bt-modal__success-icon">
              <Icon name="mail-check" size={36} strokeWidth={2} />
            </div>
            <h3 style={{ margin: 0 }}>Check your inbox!</h3>
            <p className="lead" style={{ marginBottom: 8 }}>
              Hey {form.name || "there"} — the guide is on its way to {form.email}.
            </p>
            <div style={{ background: "var(--bt-blue-wash)", borderRadius: 12, padding: 16, textAlign: "left", width: "100%" }}>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--bt-slate)", marginBottom: 6 }}>What's inside</div>
              <ol style={{ margin: 0, paddingLeft: 20, fontSize: 14, lineHeight: 1.7, color: "var(--fg-2)" }}>
                <li>Know who you're talking to.</li>
                <li>Pick one channel, not five.</li>
                <li>Track the dollars, not the clicks.</li>
                <li>Say the same thing three times.</li>
                <li>Cut what's not working, fast.</li>
              </ol>
            </div>
            <Button variant="ghost" onClick={handleClose}>Back to the site</Button>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { GuideModal });
