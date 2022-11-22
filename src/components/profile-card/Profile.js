import React from "react";
import "./Profile.css";

export default function Profile({ photo, name, description, age, hobby }) {
  return (
    <div className="profileContainer">
      <div className="nameTag">
        <h2 className="nameText">{name}</h2>
      </div>
      <img src={photo} alt="Israel Calderon" className="profilePic" />
      <div className="profileDescription">
        <p>{description}</p>
        <p>{age}</p>
        <p>{hobby}</p>
      </div>
    </div>
  );
}
