import React from "react";

export default function Card() {
  return (
    <div>
      <div className="cardWrapper">
        <div class="checkout">
          <div class="credit-card-box">
            <div class="flip">
              <div class="front">
                <div class="card-holder">
                  <label>ERRATA</label>
                </div>
              </div>
              <div class="back">
                <label>CCV</label>
              </div>
            </div>
          </div>
          <form class="form" autocomplete="off" novalidate>
            <button class="btn">
              <i class="fa fa-lock"></i> LET'S GO
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
