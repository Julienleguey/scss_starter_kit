const Display = () => {
  return (
    <div className="p-3 pl-5">
      <h1 className="mb-3">Display</h1>
      <p>
        Quickly set the display of an element and change it easily for your
        responsive design needs.
      </p>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Display Values</h3>
        <p>These className are prefixed with "d" for "display".</p>

        <div className="bg-light p-3 d-flex f-col">
          <code className="font-size-sm">
            <div>&lt;div className="d-none"&gt;</div>
            <div>&lt;div className="d-flex"&gt;</div>
            <div>&lt;div className="d-grid"&gt;</div>
            <div>&lt;div className="d-block"&gt;</div>
            <div>&lt;div className="d-inline"&gt;</div>
            <div>&lt;div className="d-inline-block"&gt;</div>
          </code>
        </div>
      </section>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Breakpoints</h3>
        <p className="mb-5">
          You can take advantage of the breakpoints to responsively change the
          display of an element. The values, as usual, are: -xs (default), -sm,
          -md, -lg, -xl.
        </p>

        <p>
          For example, this div will not be displayed on screens smaller than
          the first breakpoint, it will be a block between the first and the
          second breakpoint and it will be a flex after the second breakpoint.
        </p>
        <div className="bg-light p-3 d-flex f-col">
          <code className="font-size-sm">
            <div>&lt;div className="d-none d-sm-block d-md-flex"&gt;</div>
          </code>
        </div>
      </section>
    </div>
  );
};

export default Display;
