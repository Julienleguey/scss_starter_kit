const Colors = () => {
  return (
    <div className="p-3 pl-5">
      <h1 className="mb-3">Colors</h1>
      <p>
        A set of colors is predefined. You can use them with text, backgrounds
        and borders.
      </p>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Default</h3>
        <p>The last one is transparent. Double-click on it to reveal it.</p>
        <div className="d-flex">
          <p className="font-weight-bolder mb-2 p-2 mr-2 text-primary">
            primary
          </p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 text-secondary">
            secondary
          </p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 text-success">
            success
          </p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 text-info">info</p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 text-warning">
            warning
          </p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 text-danger">danger</p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 bg-dark text-white">
            white
          </p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 bg-dark text-lighter">
            lighter
          </p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 bg-dark text-light">
            light
          </p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 text-gray">gray</p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 text-dark">dark</p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 text-black">black</p>
          <p className="font-weight-bolder mb-2 p-2 mr-2 bg-dark text-transparent">
            transparent
          </p>
        </div>
      </section>

      <p>TODO: sections about texts, backgrounds, borders, buttons, links</p>
    </div>
  );
};

export default Colors;
