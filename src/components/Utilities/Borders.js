const Borders = () => {
  return (
    <div className="p-3 pl-5">
      <h1 className="mb-3">Borders</h1>
      <p>
        Use the borders classes to add or remove borders, or to change their
        color, size or form.
      </p>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Default</h3>

        <p>
          Default borders are not rounded. The color is set to
          $border-default-color and the default width is the smallest one.
        </p>
        <p>
          All the borders have "box-sizing: border-box", which means the
          border's width is accounted for when an element width or height is
          specified.
        </p>
      </section>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Add a Border</h3>

        <div className="d-flex fw-wrap">
          <div className="w-8 h-8 bg-light mr-3 mb-3 border" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border-top" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border-right" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border-bottom" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border-left" />
        </div>
        <div className="bg-light p-3 d-flex f-col">
          <code className="font-size-sm">
            <div>&lt;div className="border" /&gt;</div>
            <div>&lt;div className="border-top" /&gt;</div>
            <div>&lt;div className="border-right" /&gt;</div>
            <div>&lt;div className="border-bottom" /&gt;</div>
            <div>&lt;div className="border-left" /&gt;</div>
          </code>
        </div>
      </section>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Remove a Border</h3>

        <div className="d-flex fw-wrap">
          <div className="w-8 h-8 bg-light mr-3 mb-3 border-0 mr-3" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border border-top-0 mr-3" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border border-right-0 mr-3" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border border-bottom-0 mr-3" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border border-left-0 mr-3" />
        </div>
        <div className="bg-light p-3 d-flex f-col">
          <code className="font-size-sm">
            <div>&lt;div className="border-0" /&gt;</div>
            <div>&lt;div className="border border-top-0" /&gt;</div>
            <div>&lt;div className="border border-right-0" /&gt;</div>
            <div>&lt;div className="border border-bottom-0" /&gt;</div>
            <div>&lt;div className="border border-left-0" /&gt;</div>
          </code>
        </div>
      </section>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Border Color</h3>

        <div className="d-flex fw-wrap">
          <div className="w-8 h-8 bg-light mr-3 mb-3 border border-primary" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border border-secondary" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border border-success" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border border-info" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border border-warning" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border border-danger" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border border-white" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border border-lighter" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border border-light" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border border-gray" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border border-dark" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border border-black" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border border-transparent" />
        </div>
        <div className="bg-light p-3 d-flex f-col">
          <code className="font-size-sm">
            <div>&lt;div className="border border-primary" /&gt;</div>
            <div>&lt;div className="border border-secondary" /&gt;</div>
            <div>&lt;div className="border border-success" /&gt;</div>
            <div>&lt;div className="border border-info" /&gt;</div>
            <div>&lt;div className="border border-warning" /&gt;</div>
            <div>&lt;div className="border border-danger" /&gt;</div>
            <div>&lt;div className="border border-white" /&gt;</div>
            <div>&lt;div className="border border-lighter" /&gt;</div>
            <div>&lt;div className="border border-light" /&gt;</div>
            <div>&lt;div className="border border-gray" /&gt;</div>
            <div>&lt;div className="border border-dark" /&gt;</div>
            <div>&lt;div className="border border-black" /&gt;</div>
            <div>&lt;div className="border border-transparent" /&gt;</div>
          </code>
        </div>
      </section>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Border Width</h3>

        <div className="d-flex fw-wrap">
          <div className="w-8 h-8 bg-light mr-3 mb-3 border" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border border-sm" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border border-md" />
          <div className="w-8 h-8 bg-light mr-3 mb-3 border border-lg" />
        </div>
        <div className="bg-light p-3 d-flex f-col">
          <code className="font-size-sm">
            <div>&lt;div className="border" /&gt;</div>
            <div>&lt;div className="border border-sm" /&gt;</div>
            <div>&lt;div className="border border-md" /&gt;</div>
            <div>&lt;div className="border border-lg" /&gt;</div>
          </code>
        </div>
      </section>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Border Radius</h3>

        <div className="mb-5">
          <h5 className="mb-3">Rounded Value</h5>
          <p className="mb-1">
            By default, rounded is rounded-sm. There are 4 values available:
            -sm, -md, -lg, -0.
          </p>
          <div className="d-flex fw-wrap">
            <div className="w-8 h-8 bg-light mr-3 mb-3 border rounded" />
            <div className="w-8 h-8 bg-light mr-3 mb-3 border rounded-sm" />
            <div className="w-8 h-8 bg-light mr-3 mb-3 border rounded-md" />
            <div className="w-8 h-8 bg-light mr-3 mb-3 border rounded-lg" />
            <div className="w-8 h-8 bg-light mr-3 mb-3 border rounded rounded-0" />
          </div>
          <div className="bg-light p-3 d-flex f-col">
            <code className="font-size-sm">
              <div>&lt;div className="border rounded" /&gt;</div>
              <div>&lt;div className="border rounded-sm" /&gt;</div>
              <div>&lt;div className="border rounded-md" /&gt;</div>
              <div>&lt;div className="border rounded-lg" /&gt;</div>
              <div>&lt;div className="border rounded rounded-0" /&gt;</div>
            </code>
          </div>
        </div>

        <div className="mb-5">
          <h5 className="mb-3">Rounded Position</h5>
          <div className="mb-1">
            <p>You can chose to apply rounded to a specific corner:</p>
            <ul>
              <li>top-left: -tl</li>
              <li>top-right: -tr</li>
              <li>bottom-left: -bl</li>
              <li>bottom-right: -br</li>
            </ul>
          </div>
          <div className="d-flex fw-wrap">
            <div className="w-8 h-8 bg-light mr-3 mb-3 border rounded-tl" />
            <div className="w-8 h-8 bg-light mr-3 mb-3 border rounded-tr" />
            <div className="w-8 h-8 bg-light mr-3 mb-3 border rounded-br" />
            <div className="w-8 h-8 bg-light mr-3 mb-3 border rounded-bl" />
          </div>
          <div className="bg-light p-3 d-flex f-col">
            <code className="font-size-sm">
              <div>&lt;div className="border rounded-tl" /&gt;</div>
              <div>&lt;div className="border rounded-tr" /&gt;</div>
              <div>&lt;div className="border rounded-br" /&gt;</div>
              <div>&lt;div className="border rounded-bl" /&gt;</div>
            </code>
          </div>
        </div>

        <div className="mb-5">
          <h5 className="mb-3">Combine Rounded Position and Value</h5>
          <p className="mb-1">
            You can combine rounded position with rounded value.
          </p>
          <div className="d-flex fw-wrap">
            <div className="w-8 h-8 bg-light mr-3 mb-3 border rounded-lg rounded-tl-0" />
            <div className="w-8 h-8 bg-light mr-3 mb-3 border rounded-lg rounded-bl-0 rounded-br-0" />
            <div className="w-8 h-8 bg-light mr-3 mb-3 border rounded-tl rounded-tr-md rounded-br-lg" />
          </div>
          <div className="bg-light p-3 d-flex f-col">
            <code className="font-size-sm">
              <div>
                &lt;div className="border rounded-lg rounded-tl-0" /&gt;
              </div>
              <div>
                &lt;div className="border rounded-lg rounded-bl-0 rounded-br-0"
                /&gt;
              </div>
              <div>
                &lt;div className="border rounded-tl rounded-tr-md
                rounded-br-lg" /&gt;
              </div>
            </code>
          </div>
        </div>
      </section>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Circle</h3>

        <div className="d-flex fw-wrap">
          <div className="w-8 h-8 bg-light mr-3 mb-3 border circle" />
          <div
            className="h-8 bg-light mr-3 mb-3 border circle"
            style={{ width: "120px" }}
          />
          <div
            className="h-8 bg-light mr-3 mb-3 border pill"
            style={{ width: "120px" }}
          />
        </div>
        <div className="bg-light p-3 d-flex f-col">
          <code className="font-size-sm">
            <div>&lt;div className="border circle" /&gt;</div>
            <div>&lt;div className="border circle" /&gt;</div>
            <div>&lt;div className="border pill" /&gt;</div>
          </code>
        </div>
      </section>
    </div>
  );
};

export default Borders;
