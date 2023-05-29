import "./App.css";

function App() {
  return (
    <div className="App">
      <header className={"AppHeader"}>
        <section className={"UserSection"}>
          <h2>User</h2>
          <div className="User">
            <h1>User X</h1>
            <button>Log out</button>
          </div>
        </section>
        <section className={"ControlsSection"}>
          <h3>Controls</h3>
          <div className="Controls">
            <button>Export all</button>
            <button disabled>Delete all</button>
          </div>
        </section>
      </header>
      <hr />
      <section className={"CardsListSection"}>
        <header className={"CardsHeaderAndSearch"}>
          <h3>Cards List</h3>
          {/*    input for search */}
          <input type="text" placeholder="Search" disabled />
        </header>
        <div className="Cards">
          <div className="Card">
            <h2>Channel #1</h2>
            <h3>Channel #1 content</h3>
            <div className="Controls">
              <button>Unsubscribe</button>
            </div>
          </div>
          <div className="Card">
            <h2>Channel #2</h2>
            <h3>Channel #2 content</h3>
            <div className="Controls">
              <button>Unsubscribe</button>
            </div>
          </div>
          <div className="Card">
            <h2>Channel #2</h2>
            <h3>Channel #2 content</h3>
            <div className="Controls">
              <button>Unsubscribe</button>
            </div>
          </div>
          <div className="Card">
            <h2>Channel #2</h2>
            <h3>Channel #2 content</h3>
            <div className="Controls">
              <button>Unsubscribe</button>
            </div>
          </div>
          <div className="Card">
            <h2>Channel #2</h2>
            <h3>Channel #2 content</h3>
            <div className="Controls">
              <button>Unsubscribe</button>
            </div>
          </div>
          <div className="Card">
            <h2>Channel #2</h2>
            <h3>Channel #2 content</h3>
            <div className="Controls">
              <button>Unsubscribe</button>
            </div>
          </div>
          <div className="Card">
            <h2>Channel #2</h2>
            <h3>Channel #2 content</h3>
            <div className="Controls">
              <button>Unsubscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
