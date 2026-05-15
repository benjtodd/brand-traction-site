/* global React */
const { useState, useEffect } = React;

/** A Lucide icon helper — relies on global `lucide` already loaded. */
function Icon({ name, size = 18, strokeWidth = 2, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = "";
      const i = document.createElement("i");
      i.setAttribute("data-lucide", name);
      i.style.width = size + "px";
      i.style.height = size + "px";
      ref.current.appendChild(i);
      window.lucide.createIcons({ attrs: { "stroke-width": strokeWidth, width: size, height: size } });
    }
  }, [name, size, strokeWidth]);
  return <span ref={ref} style={{ display: "inline-flex", alignItems: "center" }} {...rest} />;
}

function Button({ variant = "primary", size, children, onClick, type, disabled, iconRight }) {
  const cls = ["bt-btn", `bt-btn--${variant}`, size === "lg" ? "bt-btn--lg" : ""].filter(Boolean).join(" ");
  return (
    <button className={cls} onClick={onClick} type={type} disabled={disabled}>
      {children}
      {iconRight && <Icon name={iconRight} size={16} />}
    </button>
  );
}

function LogoMark({ size = 36, inverse = false }) {
  return (
    <img
      src="assets/bt-logo-mark.png"
      alt="Brand Traction Marketing"
      style={{
        width: size,
        height: "auto",
        display: "block",
        filter: inverse ? "invert(1) brightness(1.5)" : "none",
      }}
    />
  );
}

function NavBar({ onBook }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={"bt-nav" + (scrolled ? " is-scrolled" : "")}>
      <div className="bt-nav__inner">
        <LogoMark size={36} />
        <span className="bt-nav__brand">Brand Traction</span>
        <div className="bt-nav__links">
          <a href="#problem">The Problem</a>
          <a href="#plan">The Plan</a>
          <a href="#why">Why Us</a>
          <a href="#guide">Free Guide</a>
        </div>
        <div className="bt-nav__cta">
          <Button variant="primary" onClick={onBook}>Schedule a session</Button>
        </div>
      </div>
    </nav>
  );
}

function SectionEyebrow({ children }) {
  return <span className="bt-eyebrow">{children}</span>;
}

function Pill({ tone = "navy", children }) {
  const styles = {
    navy:      { background: "var(--bt-navy)",       color: "#fff" },
    amber:     { background: "var(--bt-amber)",      color: "var(--bt-logo-black)" },
    blue:      { background: "var(--bt-blue)",       color: "#fff" },
    soft:      { background: "var(--bt-blue-wash)",  color: "var(--bt-blue)" },
    amberSoft: { background: "var(--bt-amber-wash)", color: "#92400E" },
  };
  return (
    <span style={{
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      padding: "6px 12px",
      borderRadius: 9999,
      ...styles[tone],
    }}>{children}</span>
  );
}

Object.assign(window, { Icon, Button, LogoMark, NavBar, SectionEyebrow, Pill });
