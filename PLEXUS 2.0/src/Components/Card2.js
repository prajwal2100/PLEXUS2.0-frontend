import React from "react";

export default function Card2({ title, description, time }) {
  return (
    <div className="cardHolder2">
      <div className="card">
        <div className="items">
          <h2> {title} </h2>
          <h3> {description} </h3>
          <p> {time} </p>
          <span>05h:35m:42s</span>
        </div>
      </div>
    </div>
  );
}
