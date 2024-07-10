
const HomePage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center">
          <h1 className="display-4" style={{ color: '#007bff' }}>Welcome to the Home Page</h1>
          <p className="lead">This is the home page of our website.</p>
          <hr className="my-4" />
          <p>
            Here you can find various sections and content related to our site.
            Feel free to browse around and explore the features we offer.
          </p>
          <a className="btn btn-primary btn-lg" href="/pages/about" role="button">Learn more</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
