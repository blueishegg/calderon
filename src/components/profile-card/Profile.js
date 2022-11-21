import React from "react";
import "./Profile.css";

export default function Profile({ photo, name }) {
  return (
    <div className="profileContainer">
      <div className="nameTag">
        <h2 className="nameText">{name}</h2>
      </div>
      <img src={photo} alt="Israel Calderon" className="profilePic" />
      <div className="profileDescription">
        <p>
          The first born and creator of this project. The objective of this
          platform is to showcase my abilities as a software engineer and a
          place to celebrate our family’s journey so far.
        </p>
        <p>Age. 31</p>
        <p>Tennis in the summer and failing to ski in the winter.</p>
      </div>
    </div>
  );
}
