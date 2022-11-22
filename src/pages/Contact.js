import React from "react";
import "./Contact.css";
import Navbar from "../components/navbar/Navbar";
import Profile from "../components/profile-card/Profile";

export default function Contact() {
  const homeMap = "https://i.ibb.co/jGdWkQv/maphome.png";
  const mapTitle = "Get in touch";
  const emailAdress = "email: israelcalderon@hotmail.co.uk";
  const phoneNumber = "phone: 07874738669";
  const comment =
    "Feel free to send us over an email or drop us a message on WhatsApp.";
  return (
    <div className="contactContainer">
      <Navbar />
      <Profile
        photo={homeMap}
        name={mapTitle}
        description={comment}
        age={emailAdress}
        hobby={phoneNumber}
      />
    </div>
  );
}
