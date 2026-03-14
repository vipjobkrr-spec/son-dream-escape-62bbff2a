const StickyBookingBar = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-popover/95 backdrop-blur-sm border-t border-muted shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3">
      <button
        onClick={scrollToBooking}
        className="w-full py-3.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Забронировать — от 6 500 ₽
      </button>
    </div>
  );
};

export default StickyBookingBar;
