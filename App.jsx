/* global React, ReactDOM, NavBar, Hero, Pain, Plan, Why, BigCTA, NotReady, Footer, BookingModal, GuideModal */
const { useState, useEffect } = React;

function App() {
  const [booking, setBooking] = useState(false);
  const [guide, setGuide] = useState(false);
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const open = () => setBooking(true);
  return (
    <div className="bt-site">
      <NavBar onBook={open} />
      <Hero onBook={open} />
      <Pain />
      <Plan />
      <Why />
      <BigCTA onBook={open} />
      <NotReady onGuide={() => setGuide(true)} />
      <Footer />
      <BookingModal open={booking} onClose={() => setBooking(false)} />
      <GuideModal open={guide} onClose={() => setGuide(false)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
