import "./App.css";
import List from "./List";
import data from "./data.js";
import { useState } from "react";

function App() {
  const [people, setpeople] = useState(data);
  return (
    <main>
      <section className="list-container">
        <h1> {people.length} birthdays today</h1>
        <List people={people}></List>
        <button>
          <h3>Clear All</h3>
        </button>
      </section>
    </main>
  );
}

export default App;
