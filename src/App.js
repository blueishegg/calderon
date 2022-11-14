import isra from "./isra.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const fetchData = async function () {
    const response = await fetch("http://localhost:1234/");
    setData(await response.json());
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data.payload[1].forename);
  // console.log("-----HELLO-----");
  // fetch("http://localhost:1234/")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data.payload[1].forename));
  return (
    <div className="App">
      <header className="App-header">
        <img src={isra} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          calderon
        </a>
      </header>
    </div>
  );
}

export default App;
