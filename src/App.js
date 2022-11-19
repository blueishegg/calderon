import isra from "./isra.svg";
import "./App.css";
import { useState, useEffect } from "react";
import * as Realm from "realm-web";

function App() {
  //-----CONNECTING TO MONGODB----
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const REALM_APP_ID = process.env.REACT_APP_CALDERON_MONGO;
      const app = new Realm.App({ id: REALM_APP_ID });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const allUsers = await user.functions.getAllUsers();
        setUsers(allUsers);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  // const [data, setData] = useState();
  // const fetchData = async function () {
  //   const response = await fetch("http://localhost:1234/");
  //   setData(await response.json());
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // console.log(data.payload[1].forename);
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
      <div>
        {users &&
          users.map((user) => {
            return (
              <p key={users._id}>
                {user.full_name} {user.description}
              </p>
            );
          })}
      </div>
    </div>
  );
}

export default App;
