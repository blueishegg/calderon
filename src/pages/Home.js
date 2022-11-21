import React from "react";
import "./Home.css";
import Navbar from "../components/navbar/Navbar";
import PhotoGrid from "../components/photo-grid/PhotoGrid";
import Profile from "../components/profile-card/Profile";
export default function Home() {
  const israelProfile = "https://i.ibb.co/cYhxyxZ/b-w-profile.jpg";
  const israelName = "Israel Calderon";
  return (
    <div className="homepage">
      <Navbar />
      <PhotoGrid />
      <h1>MEET THE FAMILY</h1>
      <div className="homepage-profiles">
        <Profile photo={israelProfile} name={israelName} />
      </div>
    </div>
  );
}
