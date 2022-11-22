import React from "react";
import { Link } from "react-router-dom";
import isra from "../isra.svg";
import "./Landing.css";
export default function Landing() {
  //-----CONTENT-----
  const landingPhoto = "https://i.ibb.co/RQ2Sh6S/Torotoro-Bolivia.jpg";
  const landing_page_backgroud_label = "Bolivia - Torotoro August 2018";
  //Cris climbing mountain "https://i.ibb.co/kGgHvKW/IMG-3617.jpg"
  return (
    <div>
      <h4>CALDERON</h4>
      <div className="main_image_with_label">
        <Link to="/home">
          <img src={isra} alt="isra-icon" className="isra" />
        </Link>
        <img
          src={landingPhoto}
          alt="torotoro"
          className="lp_background"
          id="lp_background"
        />
        <label htmlFor="lp_background" className="label_background">
          {landing_page_backgroud_label}
        </label>
      </div>
    </div>
  );
}
