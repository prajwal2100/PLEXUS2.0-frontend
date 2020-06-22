import React from "react";

export default function Card1({ title, description, time }) {
  return (
    <div className="cardHolder1">
      <div className="card">
        <div className="items">
          <h2> {title} </h2>
          <h3> {description} </h3>
          <p> {time} </p>
          <button>Play</button>
        </div>
      </div>
    </div>
  );
}
