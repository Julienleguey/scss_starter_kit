const Footer = () => {
  function year() {
    const d = new Date();
    return d.getFullYear();
  }

  return (
    <div className="w-100 border-top px-3">
      <p className="py-3 font-size-sm font-weight-bolder">
        © {year()}, Scss Starter Kit
      </p>
    </div>
  );
};

export default Footer;
