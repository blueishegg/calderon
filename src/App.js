import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <header className="App-header">
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
      <div>
        {users &&
          users.map((user) => {
            return (
              <p key={users._id}>
                {user.full_name} {user.description}
              </p>
            );
          })}
      </div> */}
    </div>
  );
}

export default App;
