const prices = [
  { period: "01.03 — 15.06", price: "6 500 ₽" },
  { period: "16.06 — 27.06", price: "8 500 ₽" },
  { period: "28.06 — 24.08", price: "12 000 ₽", highlight: true },
  { period: "25.08 — 14.09", price: "9 000 ₽" },
  { period: "15.09 — 31.10", price: "7 000 ₽" },
];

const PricesSection = () => (
  <section id="prices" className="py-16 md:py-24">
    <div className="container">
      <h2 className="text-3xl md:text-5xl font-display font-semibold text-center mb-3">
        Цены на проживание
      </h2>
      <p className="text-center text-muted-foreground mb-10 text-base">
        Единый тариф на все 12 домиков. Цена за домик в сутки.
      </p>

      {/* Desktop table */}
      <div className="hidden md:block max-w-2xl mx-auto">
        <div className="rounded-lg overflow-hidden shadow-card bg-popover">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left py-4 px-6 font-medium text-sm">Период</th>
                <th className="text-right py-4 px-6 font-medium text-sm">Цена за сутки</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((row, i) => (
                <tr key={i} className={`border-b border-muted ${row.highlight ? "bg-secondary/10" : ""}`}>
                  <td className="py-4 px-6 text-sm">{row.period}</td>
                  <td className={`py-4 px-6 text-right font-display text-xl font-semibold ${row.highlight ? "text-primary" : ""}`}>
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-6 py-4 bg-muted/50 text-sm text-muted-foreground">
            Дополнительное место — <span className="font-semibold text-foreground">1 000 ₽/сутки</span>
          </div>
        </div>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {prices.map((row, i) => (
          <div
            key={i}
            className={`rounded-lg p-4 shadow-soft ${row.highlight ? "bg-primary text-primary-foreground" : "bg-popover"}`}
          >
            <div className={`text-sm ${row.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
              {row.period}
            </div>
            <div className="font-display text-2xl font-semibold mt-1">{row.price}</div>
          </div>
        ))}
        <div className="rounded-lg p-4 bg-muted/50 text-sm text-muted-foreground text-center">
          Дополнительное место — <span className="font-semibold text-foreground">1 000 ₽/сутки</span>
        </div>
      </div>
    </div>
  </section>
);

export default PricesSection;
