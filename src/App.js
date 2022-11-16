import "./App.css";
import List from "./List";

function App() {
  return (
    <main>
      <section className="list-container">
        <h1>0 birthdays today</h1>
        <List></List>
        <button>Clear All</button>
      </section>
    </main>
  );
}

export default App;
