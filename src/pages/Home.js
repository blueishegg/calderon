import React from "react";
import { useState, useEffect } from "react";
import * as Realm from "realm-web";
import "./Home.css";
import Navbar from "../components/navbar/Navbar";
import PhotoGrid from "../components/photo-grid/PhotoGrid";
import Profile from "../components/profile-card/Profile";
export default function Home() {
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

  const israelName = users.map((user) => {
    if (user.forename === "Israel") {
      return user.full_name;
    }
  });
  const israelProfile = "https://i.ibb.co/cYhxyxZ/b-w-profile.jpg";
  const description = `The first born and creator of this project. The objective of this
  platform is to showcase my abilities as a software engineer and a
  place to celebrate our family’s journey so far.`;
  const age = "Age. 31";
  const hobby = "Tennis in the summer and failing to ski in the winter.";
  return (
    <div className="homepage">
      <Navbar />
      <PhotoGrid />
      <h1>MEET THE FAMILY</h1>
      <div className="homepage-profiles">
        <Profile
          photo={israelProfile}
          name={israelName}
          description={description}
          age={age}
          hobby={hobby}
        />
      </div>
      <div>
        {users &&
          users.map((user) => {
            if (user.forename === "Israel") {
              return <p key={user._id}>{user.full_name}</p>;
            }
          })}
      </div>
    </div>
  );
}
