import React from "react";

export default function Card3({ title, description, time }) {
  return (
    <div className="cardHolder3">
      <div className="card">
        <div className="items">
          <h2> {title} </h2>
          <h3> {description} </h3>
          <p> {time} </p>
          <span>View Leaderboard</span>
        </div>
      </div>
    </div>
  );
}
