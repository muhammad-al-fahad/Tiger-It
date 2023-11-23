import React from "react";
import Button from "../Button/Button";
import "./welcome.css";
import { Link } from "react-router-dom";

function Welcome() {
  function handleColor(e) {
    const user = document.querySelectorAll(".welcome-user");
    console.log(e.target.form[0].className);
    if (e.target.value === "on") {
      user.forEach((bc, index) => {
        if (index === e.target.form[index].className)
          bc.style.borderColor = "#62BE12";
      });
    }
  }

  return (
    <div className="welcome">
      {/* Welcome Section */}
      <div className="welcome-items">
        <div className="welcome-close">
          <img src="" alt="" />
        </div>
        <div className="welcome-content">
          <div className="welcome-list">
            <div className="welcome-text">
              <h5 className="welcome-title">Let's Start</h5>
              <p className="welcome-description">
                It's going to take only a few minutes
              </p>
            </div>
            <form className="welcome-list-items">
              <div className="welcome-user">
                <label className="user-switch">
                  <input
                    className="radio-button"
                    type="radio"
                    name="userType"
                    onChange={handleColor}
                  />
                  <div className="radio-title">
                    <h5 className="title-h5">I'm here to shop! 🛍️</h5>
                    <p className="title-p">
                      Explore products and make purchases.
                    </p>
                  </div>
                </label>
              </div>

              <div className="welcome-user">
                <label className="user-switch">
                  <input
                    className="radio-button"
                    type="radio"
                    name="userType"
                    onChange={handleColor}
                  />
                  <div className="radio-title">
                    <h5 className="title-h5">I'm here to sell! 💼</h5>
                    <p className="title-p">
                      List, manage your products with ease.
                    </p>
                  </div>
                </label>
              </div>

              <div className="welcome-user">
                <label className="user-switch">
                  <input
                    className="radio-button"
                    type="radio"
                    name="userType"
                    onChange={handleColor}
                  />
                  <div className="radio-title">
                    <h5 className="title-h5">I'm here to deliver! 🚚</h5>
                    <p className="title-p">
                      Become a rider and help with deliveries.
                    </p>
                  </div>
                </label>
              </div>
            </form>
          </div>

          <div>
            <Link to="/login" className="button">
              <button type="button" className="email-verify">
                <p>Continue</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
