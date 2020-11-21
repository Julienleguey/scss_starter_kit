const Concepts = () => {
  return (
    <div className="p-3 pl-5">
      <h1 className="mb-3">Concepts</h1>
      <p>Some commun concepts are essential to understand this project.</p>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Utilities</h3>
        <p>
          Utilities are css classes that are quickly accessible while you're
          writing your html.
        </p>
      </section>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Components</h3>
        <p>
          Components are react components essentials to every app (button, link,
          carousel, dropdown menu, etc).
        </p>
        <p>
          The components presented here are just suggestions. You can use them
          as they are, but you can also customize them to better fit your needs.
          If you wish to customize a component, you should look both at the js
          and scss files.
        </p>

        <p className="mt-5 font-weight-bold">
          Hey, there is no select component here. How so?
        </p>
        <p>
          That's because select components are a nightmare, both for ux and ui.
          They require two clicks and sometimes to scroll to do something while
          a list of buttons with the value you're looking for could do the job.
          They are also a nightmare if you wish them to have the same look on
          every web browser, especially on Safari. Do not use select.
        </p>
        <p>
          You really want to have a select element? Keep it simple and don't try
          to customize it.
        </p>
        <p>
          You really want to customize your select element? You're on your own,
          pal!
        </p>
      </section>

      <section className="pt-5 mb-4">
        <h3 className="mb-3">Custom</h3>
        <p>
          Customs are css classes specific to your app. You should create those
          yourself as every needs cannot be anticipated (and shouldn't be).
        </p>
      </section>
    </div>
  );
};

export default Concepts;
