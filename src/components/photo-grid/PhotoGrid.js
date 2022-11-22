import React from "react";
import "./PhotoGrid.css";

export default function PhotoGrid() {
  const photos = [
    "https://i.ibb.co/NT8XjhX/IMG-8200.jpg",
    "https://i.ibb.co/kGgHvKW/IMG-3617.jpg",
    "https://i.ibb.co/z6ytLdp/IMG-6665.jpg",
    "https://i.ibb.co/F4WzSZN/293bdb27-cc68-4c1f-89d5-33ba476d6d51.jpg",
    "https://i.ibb.co/0cDQq77/160c94fb-fd2c-4ce6-8740-c2429de6e64d.jpg",

    "https://i.ibb.co/1r90CXw/95dacb5f-df29-491f-9073-3c2c2d807ea7.jpg",
  ];
  return (
    <div className="photoGridContainer">
      {photos.map((photo) => {
        return (
          <img key={photo} src={photo} alt="photo_in_grid" className="photo" />
        );
      })}
    </div>
  );
}
