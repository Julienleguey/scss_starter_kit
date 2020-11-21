const Home = () => {
  return (
    <div>
      <h6>Home</h6>
      <p>Get started stuff</p>
      <p>Which packages to install, setup, etc</p>
      <p>Tested with create-react-app, node -v 12, etc</p>
      <div className="container bg-primary h-10 mb-3">default</div>
      <div className="container-sm bg-primary h-10 mb-3">sm</div>
      <div className="container-md bg-primary h-10 mb-3">md</div>
      <div className="container-lg bg-primary h-10 mb-3">lg</div>
      <div className="container-xl bg-primary h-10 mb-3">xl</div>
      <div className="tiny-container bg-primary h-10 mb-3">.tiny-container</div>
    </div>
  );
};

export default Home;
