import classnames from "classnames";

const Flex = () => {
  const displaySandbox = (className, nbr, squareClassName = "h-5 w-5") => (
    <div className={classnames("p-1 border mb-3 mr-3 d-flex", className)}>
      {displaySquare(nbr, squareClassName)}
    </div>
  );

  const displaySquare = (nbr, squareClassName) => {
    const array = Array.from(Array(nbr));
    return array.map((value, index) => (
      <div
        className={classnames(
          squareClassName,
          "bg-light d-flex ai-center jc-center m-1"
        )}
        key={index}
      >
        <p>{index + 1}</p>
      </div>
    ));
  };

  const displayAlignSelfSandbox = (className = "h-5 w-5") => (
    <div className="h-8 p-1 border mb-3 mr-3 d-flex ai-center">
      <div className="h-5 w-5 bg-light d-flex f-col jc-center ai-center m-1">
        <p>1</p>
      </div>
      <div
        className={classnames(
          "bg-light d-flex f-col jc-center ai-center m-1",
          className
        )}
      >
        <p>2</p>
      </div>
      <div className="h-5 w-5 bg-light d-flex f-col jc-center ai-center m-1">
        <p>3</p>
      </div>
    </div>
  );

  return (
    <div className="p-3 pl-5">
      <h1 className="mb-3">Flex</h1>
      <p>
        Quickly set flex properties to an element and change it easily for your
        responsive design needs.
      </p>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Flex Direction</h3>

        <div className="mb-5">
          <h5 className="mb-3">Basic</h5>
          <div className="d-flex fw-wrap">
            {displaySandbox("f-row", 2)}
            {displaySandbox("f-col", 2)}
            {displaySandbox("f-rowr", 2)}
            {displaySandbox("f-colr", 2)}
          </div>
          <div className="bg-light p-3 d-flex f-col">
            <code className="font-size-sm">
              <div>&lt;div className="d-flex f-row"&gt;</div>
              <div>&lt;div className="d-flex f-col"&gt;</div>
              <div>&lt;div className="d-flex f-rowr"&gt;</div>
              <div>&lt;div className="d-flex f-colr"&gt;</div>
            </code>
          </div>
        </div>

        <div className="mb-5">
          <h5 className="mb-3">Responsive</h5>
          <p className="mb-5">
            You can take advantage of the breakpoints to responsively change the
            flex-direction of an element. The values, as usual, are: -xs
            (default), -sm, -md, -lg, -xl.
          </p>

          <div className="d-flex fw-wrap">
            {displaySandbox("f-col f-md-row", 2)}
          </div>
          <div className="bg-light p-3 d-flex f-col">
            <code className="font-size-sm">
              <div>&lt;div className="d-flex f-col f-sm-row"&gt;</div>
            </code>
          </div>
        </div>
      </section>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Flex Wrap</h3>

        <div className="mb-5">
          <h5 className="mb-3">Basic</h5>
          <div className="d-flex fw-wrap">
            {displaySandbox("w-10 fw-wrap", 10)}
            {displaySandbox("fw-nowrap", 10)}
            {displaySandbox("w-10 fw-wrap-reverse", 10)}
          </div>
          <div className="bg-light p-3 d-flex f-col">
            <code className="font-size-sm">
              <div>&lt;div className="d-flex fw-wrap"&gt;</div>
              <div>&lt;div className="d-flex fw-nowrap"&gt;</div>
              <div>&lt;div className="d-flex f-wrap-reverse"&gt;</div>
            </code>
          </div>
        </div>

        <div className="mb-5">
          <h5 className="mb-3">Responsive</h5>
          <p className="mb-5">
            You can take advantage of the breakpoints to responsively change the
            flex-wrap of an element. The values, as usual, are: -xs (default),
            -sm, -md, -lg, -xl.
          </p>

          <div className="d-flex fw-wrap">
            {displaySandbox("w-10 fw-wrap fw-lg-wrap-reverse", 10)}
          </div>
          <div className="bg-light p-3 d-flex f-col">
            <code className="font-size-sm">
              <div>
                &lt;div className="d-flex fw-wrap fw-lg-wrap-reverse"&gt;
              </div>
            </code>
          </div>
        </div>
      </section>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Justify Content</h3>

        <div className="mb-5">
          <h5 className="mb-3">Basic</h5>
          <div className="d-flex fw-wrap">
            {displaySandbox("w-10 jc-start", 2)}
            {displaySandbox("w-10 jc-end", 2)}
            {displaySandbox("w-10 jc-center", 2)}
            {displaySandbox("w-10 jc-sb", 2)}
            {displaySandbox("w-10 jc-sa", 2)}
            {displaySandbox("w-10 jc-se", 2)}
          </div>
          <div className="bg-light p-3 d-flex f-col">
            <code className="font-size-sm">
              <div>&lt;div className="d-flex jc-start"&gt;</div>
              <div>&lt;div className="d-flex jc-end"&gt;</div>
              <div>&lt;div className="d-flex jc-center"&gt;</div>
              <div>&lt;div className="d-flex jc-sb"&gt;</div>
              <div>&lt;div className="d-flex jc-sa"&gt;</div>
              <div>&lt;div className="d-flex jc-se"&gt;</div>
            </code>
          </div>
        </div>

        <div className="mb-5">
          <h5 className="mb-3">Responsive</h5>
          <p className="mb-5">
            You can take advantage of the breakpoints to responsively change the
            justify-content of an element. The values, as usual, are: -xs
            (default), -sm, -md, -lg, -xl.
          </p>

          <div className="d-flex fw-wrap">
            {displaySandbox("w-10 jc-start jc-sm-end", 2)}
          </div>
          <div className="bg-light p-3 d-flex f-col">
            <code className="font-size-sm">
              <div>&lt;div className="d-flex jc-start jc-sm-end"&gt;</div>
            </code>
          </div>
        </div>
      </section>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Align Items</h3>

        <div className="mb-5">
          <h5 className="mb-3">Basic</h5>
          <div className="d-flex fw-wrap">
            {displaySandbox("h-10 ai-start", 2)}
            {displaySandbox("h-10 ai-end", 2)}
            {displaySandbox("h-10 ai-center", 2)}
            {displaySandbox("h-10 ai-stretch", 2, "w-5")}
            {displaySandbox("", 2)}
            <div className="p-1 border mb-3 mr-3 d-flex h-10 ai-baseline">
              <div className="h-5 w-5 bg-light d-flex ai-center jc-center m-1">
                <p>1</p>
              </div>
              <div className="h-6 w-5 bg-light d-flex ai-center jc-center m-1">
                <p>2</p>
              </div>
            </div>
          </div>
          <div className="bg-light p-3 d-flex f-col">
            <code className="font-size-sm">
              <div>&lt;div className="d-flex ai-start"&gt;</div>
              <div>&lt;div className="d-flex ai-end"&gt;</div>
              <div>&lt;div className="d-flex ai-center"&gt;</div>
              <div>&lt;div className="d-flex ai-stretch"&gt;</div>
              <div>&lt;div className="d-flex ai-baseline"&gt;</div>
            </code>
          </div>
        </div>

        <div className="mb-5">
          <h5 className="mb-3">Responsive</h5>
          <p className="mb-5">
            You can take advantage of the breakpoints to responsively change the
            align-items of an element. The values, as usual, are: -xs (default),
            -sm, -md, -lg, -xl.
          </p>

          <div className="d-flex fw-wrap">
            {displaySandbox("h-10 ai-start ai-sm-end", 2)}
          </div>
          <div className="bg-light p-3 d-flex f-col">
            <code className="font-size-sm">
              <div>&lt;div className="d-flex ai-start ai-sm-end"&gt;</div>
            </code>
          </div>
        </div>
      </section>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Order</h3>
        <p className="mb-5">Values for order are available from 0 to 10.</p>

        <div className="d-flex fw-wrap">
          <div className="p-1 border mb-3 mr-3 d-flex">
            <div className="h-6 w-10 bg-light d-flex f-col jc-center ai-center m-1 order-3">
              <p>1</p>
              <p>order-3</p>
            </div>
            <div className="h-6 w-10 bg-light d-flex f-col jc-center ai-center m-1 order-1">
              <p>2</p>
              <p>order-1</p>
            </div>
            <div className="h-6 w-10 bg-light d-flex f-col jc-center ai-center m-1 order-2">
              <p>3</p>
              <p>order-2</p>
            </div>
          </div>
        </div>
        <div className="bg-light p-3 d-flex f-col">
          <code className="font-size-sm">
            <div>&lt;div className="d-flex"&gt;</div>
            <div>&nbsp;&nbsp;&lt;div className="order-3"...</div>
            <div>&nbsp;&nbsp;&lt;div className="order-1"...</div>
            <div>&nbsp;&nbsp;&lt;div className="order-2"...</div>
            <div>&lt;/div&gt;</div>
          </code>
        </div>
      </section>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Flex (Grown, Shrink, Basis)</h3>
        <p className="mb-5">Values for flex are available from 0 to 10.</p>

        <div className="d-flex fw-wrap">
          <div
            className="p-1 border mb-3 mr-3 d-flex"
            style={{ minWidth: "300px" }}
          >
            <div className="h-5 bg-light d-flex f-col jc-center ai-center m-1 flex-1">
              <p>1</p>
            </div>
            <div className="h-5 bg-light d-flex f-col jc-center ai-center m-1 flex-2">
              <p>2</p>
            </div>
            <div className="h-5 bg-light d-flex f-col jc-center ai-center m-1 flex-3">
              <p>3</p>
            </div>
          </div>
        </div>
        <div className="bg-light p-3 d-flex f-col">
          <code className="font-size-sm">
            <div>&lt;div className="d-flex"&gt;</div>
            <div>&nbsp;&nbsp;&lt;div className="flex-1"...</div>
            <div>&nbsp;&nbsp;&lt;div className="flex-2"...</div>
            <div>&nbsp;&nbsp;&lt;div className="flex-3"...</div>
            <div>&lt;/div&gt;</div>
          </code>
        </div>
      </section>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Align Self</h3>

        <div className="mb-5">
          <h5 className="mb-3">Basic</h5>
          <div className="d-flex fw-wrap">
            {displayAlignSelfSandbox("h-5 w-5 as-start")}
            {displayAlignSelfSandbox("h-5 w-5 as-end")}
            {displayAlignSelfSandbox("h-5 w-5 as-center")}
            {displayAlignSelfSandbox("w-5 as-stretch")}
            {displayAlignSelfSandbox("h-5 w-5 as-baseline")}
            {displayAlignSelfSandbox("h-3 w-3 as-auto")}
          </div>
          <div className="bg-light p-3 d-flex f-col">
            <code className="font-size-sm">
              <div>&lt;div className="as-start"&gt;</div>
              <div>&lt;div className="as-end"&gt;</div>
              <div>&lt;div className="as-center"&gt;</div>
              <div>&lt;div className="as-stretch"&gt;</div>
              <div>&lt;div className="as-baseline"&gt;</div>
              <div>&lt;div className="as-auto"&gt;</div>
            </code>
          </div>
        </div>

        <div className="mb-5">
          <h5 className="mb-3">Responsive</h5>
          <p className="mb-5">
            You can take advantage of the breakpoints to responsively change the
            align-self of an element. The values, as usual, are: -xs (default),
            -sm, -md, -lg, -xl.
          </p>

          <div className="d-flex fw-wrap">
            {displayAlignSelfSandbox("h-5 w-5 as-start as-sm-end")}
          </div>
          <div className="bg-light p-3 d-flex f-col">
            <code className="font-size-sm">
              <div>&lt;div className="as-start as-sm-end"&gt;</div>
            </code>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Flex;
