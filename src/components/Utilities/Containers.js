const Containers = () => {
  return (
    <div className="p-3 pl-5">
      <h1 className="mb-3">Containers</h1>
      <p>
        Several containers are set to help you to display the content on the
        page while taking care of padding and breakpoints.
      </p>
      <p>Containers are automatically centered.</p>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Default</h3>
        <table>
          <tr>
            <th>
              Breakpoints
              <br />
              max-width
            </th>
            <th>0 - 575px</th>
            <th>576 - 767px</th>
            <th>768 - 991px</th>
            <th>992 - 1199</th>
            <th>1200 - &infin;</th>
          </tr>
          <tr>
            <th>default</th>
            <td>100%</td>
            <td>540px</td>
            <td>720px</td>
            <td>960px</td>
            <td>1140px</td>
          </tr>
          <tr>
            <th>sm</th>
            <td>100%</td>
            <td>540px</td>
            <td>720px</td>
            <td>960px</td>
            <td>1140px</td>
          </tr>
          <tr>
            <th>md</th>
            <td>100%</td>
            <td>100%</td>
            <td>720px</td>
            <td>960px</td>
            <td>1140px</td>
          </tr>
          <tr>
            <th>lg</th>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>960px</td>
            <td>1140px</td>
          </tr>
          <tr>
            <th>xl</th>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>1140px</td>
          </tr>
        </table>
      </section>

      <p>
        .tiny-container has a width of 100% and a limit of 20rem. Convenient for
        very small forms that you would like to center, like a login form.
      </p>
    </div>
  );
};

export default Containers;
