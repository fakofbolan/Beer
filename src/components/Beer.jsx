import React from "react";
import "./Beer.scss";

export default function Beer({image, name, tagline, firstBrewed, description, abv}) {
  return (
    <div className="beer-card">
      <img src={image} alt="" className="beer-image" />
      <div className="beer-right">
        <h2 className="beer-name">{name}</h2>
        <p className="beer-tagline">{tagline}</p>
        <p className="firstBrewed">First Brewed:{firstBrewed}</p>
        <p className="beer-description">{description}</p>
        <h3 className="beer-alcohol">Alcohol: {abv}</h3>
      </div>
    </div>
  );
}
