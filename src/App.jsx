export default function App() {
    return (
      <>
        <h1>Image gallery example</h1>
        <div className="full-img">
          <img
            className="displayed-img"
            src="images/pic1.jpg"
            alt="Closeup of a human eye"
          />
          <div className="overlay"></div>
          <button className="dark">Darken</button>
        </div>
        <div className="thumb-bar"></div>
      </>
    );
  }