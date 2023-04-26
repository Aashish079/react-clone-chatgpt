const App = () => {
  return (
    <div className="App">
      <section className="side-bar">
        <button>+ New Chat</button>

        <ul className="history">
          <li>What's up</li>
        </ul>

        <nav>
          <p> Made by Aashish</p>
        </nav>
      </section>

      <section className="main">
        <h1>Aashish GPT</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div id="submit">➢</div>
          </div>
          <p className="info">
            This website is created by Aashish using React just for learning
            purposes. Any improvement feedback would be appreciated.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
