const Syntax = () => {
  const prefixes = [
    ["border", "border / b"],
    ["display", "d"],
    ["text", "text"],
    ["background", "bg"],
    ["flex-direction", "f"],
    ["container", "container"],
    ["flex-wrap", "fw"],
    ["justify-content", "jc"],
    ["align-items", "ai"],
    ["order", "order"],
    ["overflow", "overflow"],
    ["flex", "flex"],
    ["align-self", "as"],
    ["position", "pos"],
    ["box-shadow", "shadow"],
    ["", "rounded"],
    ["z-index", "z"],
    ["width", "w"],
    ["min-width", "minw"],
    ["max-width", "maxw"],
    ["height", "h"],
    ["min-height", "minh"],
    ["max-height", "maxh"],
    ["margin", "m"],
    ["padding", "p"],
    ["font", "font"],
    ["cursor", "cursor"],
    ["pointer-events", "pe"],
  ];

  const positions = [
    ["everywhere", "don't write it"],
    ["top", "t"],
    ["right", "r"],
    ["bottom", "b"],
    ["left", "l"],
    ["x-axis", "x"],
    ["y-axis", "y"],
    ["top-left", "tl"],
    ["top-right", "tr"],
    ["bottom-right", "br"],
    ["bottom-left", "bl"],
  ];

  const breakpoints = [
    ["everytime", "don't write it"],
    ["extra small", "xs"],
    ["small", "sm"],
    ["medium", "md"],
    ["large", "lg"],
    ["extra large", "xl"],
  ];

  const displayRows = (arrayOfCouples) => {
    return arrayOfCouples.map((couple, index) => (
      <tr key={index}>
        <td>{couple[0]}</td>
        <td>{couple[1]}</td>
      </tr>
    ));
  };
  return (
    <div className="p-3 pl-5">
      <h1 className="mb-3">Utilities Syntax</h1>
      <p>
        Decomposition of the syntax used for the css classes used all through
        this project.
      </p>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Decomposition</h3>
        <p>prefix-position-breakpoint-value</p>
      </section>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Prefix</h3>
        <p>The prefix defines the perimeter of the class.</p>
        <table>
          <tr>
            <th>css key</th>
            <th>prefix</th>
          </tr>
          {displayRows(prefixes)}
        </table>
      </section>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Position</h3>
        <p>The position defines where the class applies.</p>
        <p>
          The position is optional: if you don't write any, the style will be
          applied to every position available.
        </p>
        <p>
          The positions are only available for utilities that could use them:
          margin, padding, border, border-radius, position absolute, etc.
        </p>
        <table>
          <tr>
            <th>css key</th>
            <th>position</th>
          </tr>
          {displayRows(positions)}
        </table>
      </section>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Breakpoints</h3>
        <p>
          The breakpoint defines at which screen width we should start to apply
          a style.
        </p>
        <p>
          The breakpoint is optional: if you don't precise any, the style will
          be applied to every size of the screen.
        </p>
        <p>
          The breakpoints are only available for utilities for which it's
          relevant. Breakpoints are available for display, margin, padding,
          position absolute, etc. Breakpoints are not available for border,
          colors, etc.
        </p>
        <table>
          <tr>
            <th>css key</th>
            <th>breakpoint</th>
          </tr>
          {displayRows(breakpoints)}
        </table>
      </section>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Value</h3>
        <p>
          The value can be a unit (rem, vw, vh, percent), a color defined in the
          variables (primary, success, danger, etc) and it can be a keyword
          available in css (start, center, pointer, none, etc).
        </p>
        <table>
          <tr>
            <th>css key</th>
            <th>value</th>
          </tr>
          {/*{displayRows(breakpoints)}*/}
        </table>
      </section>
    </div>
  );
};

export default Syntax;
