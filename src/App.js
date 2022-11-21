import isra from "./isra.svg";
import "./App.css";
import { useState, useEffect } from "react";
import * as Realm from "realm-web";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";

function App() {
  //-----CONNECTING TO MONGODB----
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const REALM_APP_ID = process.env.REACT_APP_CALDERON_MONGO;
  //     const app = new Realm.App({ id: REALM_APP_ID });
  //     const credentials = Realm.Credentials.anonymous();
  //     try {
  //       const user = await app.logIn(credentials);
  //       const allUsers = await user.functions.getAllUsers();
  //       setUsers(allUsers);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
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
