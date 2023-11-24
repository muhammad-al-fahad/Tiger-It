import React, { useEffect } from "react";
import Button from "../Button/Button";
import "./welcome.css";

function Welcome() {
  useEffect(() => {
    const user = document.querySelectorAll(".welcome-user");
    const radio = document.querySelector(".radio-buy");

    user.forEach((bc, index) => {
      if (index === 0) {
        bc.style.borderColor = "#62BE12";
        radio.setAttribute("checked", "true");
      }
    });
  }, []);

  function handleColor(e) {
    const user = document.querySelectorAll(".welcome-user");
    console.log(e.target.form[0].className);
    if (e.target.value === "on") {
      user.forEach((bc, index) => {
        switch (e.target.className) {
          case "radio-deliver":
            bc.style.borderColor = index === 2 ? "#62BE12" : "#EBEDF0";
            break;
          case "radio-sell":
            bc.style.borderColor = index === 1 ? "#62BE12" : "#EBEDF0";
            break;
          default:
            bc.style.borderColor = index === 0 ? "#62BE12" : "#EBEDF0";
        }
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
                    className="radio-buy"
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
          <Button text="Continue" link="/signin" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
