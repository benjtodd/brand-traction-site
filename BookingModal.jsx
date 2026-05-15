/* global React, Icon */

function BookingModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="bt-scrim" onClick={onClose}>
      <div className="bt-modal bt-modal--zcal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="bt-modal__close" onClick={onClose} aria-label="Close">
          <Icon name="x" size={18} />
        </button>
        <iframe
          src="https://zcal.co/benjtodd/discovery"
          style={{ width: "100%", height: "100%", border: "none", borderRadius: 12 }}
          title="Schedule a strategy session"
        />
      </div>
    </div>
  );
}

Object.assign(window, { BookingModal });
