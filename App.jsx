/* global React, ReactDOM, NavBar, Hero, Pain, Plan, Why, BigCTA, NotReady, Footer, BookingModal */
const { useState, useEffect } = React;

function App() {
  const [booking, setBooking] = useState(false);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const open = () => window.open("https://zcal.co/benjtodd/discovery", "_blank");
  return (
    <div className="bt-site">
      <NavBar onBook={open} />
      <Hero onBook={open} />
      <Pain />
      <Plan />
      <Why />
      <BigCTA onBook={open} />
      <NotReady />
      <Footer />
      <BookingModal open={booking} onClose={() => setBooking(false)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
