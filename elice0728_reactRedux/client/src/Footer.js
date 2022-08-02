const Footer = () => {
  return (
    <footer className="text-muted py-5 bg-secondary">
      <div className="container">
        <p className="float-end mb-1">
          <a href="#">Back to top</a>
        </p>
        <p className="mb-1 text-light ">
          Album example is © Bootstrap, but please download and customize it for
          yourself!
        </p>
        <p className="mb-0 text-light">
          New to Bootstrap? <a href="/">Visit the homepage</a> or read our{" "}
          <a href="/docs/5.1/getting-started/introduction/">
            getting started guide.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
