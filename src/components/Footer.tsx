const Footer = () => (
  <footer className="py-10 pb-24 md:pb-10 bg-foreground text-primary-foreground/70">
    <div className="container text-center">
      <p className="font-display text-xl text-primary-foreground mb-2">База отдыха «Сон»</p>
      <p className="text-sm mb-4">Тенгинка, Туапсинский район, Краснодарский край</p>
      <p className="text-xs opacity-60">© {new Date().getFullYear()} База отдыха «Сон». Все права защищены.</p>
    </div>
  </footer>
);

export default Footer;
