import React, { useState } from "react";
import axios from "axios";
import image4 from "../assest/images/Eye Closed.png";
import image5 from "../assest/images/Eye.png";
import { Link } from 'react-router-dom'

function ConfirmPass() {
  const [password, setPassword] = useState(" ");
  const [confirmpassword, setConfirmPassword] = useState(" ");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  function handleDate(e) {
    e.preventDefault();

    //  API post method

    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        password,
        confirmpassword,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <section className="confirm-password">
        <div class="container">
          <div class="row">
            <div class="col-sm-9 col-md-5 col-lg-5 mx-auto">
              <div class="card border-0 shadow rounded-4 my-5">
                <div class="card-body p-4 p-sm-5">
                  <h5 class="tiger-card-title  mb-3">
                    Create Password <br />
                  </h5>

                  <form onSubmit={handleDate} onClick={() => document.getElementById('form-btn').style.background = '#62BE12'}>
                    <div className="form-floating mb-3 mt-4">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="floatingPassword" className="inputs">
                        Password
                      </label>
                      <div
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                        }}
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <img src={image5} alt="Eye icon" />
                        ) : (
                          <img src={image4} alt="Eye icon" />
                        )}
                      </div>
                    </div>
                    <div className="form-floating mb-3 mt-4">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <label htmlFor="floatingPassword" className="inputs">
                        Confirm Password
                      </label>
                      <div
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                        }}
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <img src={image5} alt="Eye icon" />
                        ) : (
                          <img src={image4} alt="Eye icon" />
                        )}
                      </div>
                    </div>
                    
                    <Link to="/message" className="text-decoration-none">
                      <div class="d-grid mt-4">
                        <button
                          id="form-btn"
                          style={{background: '#d5fbb5'}}
                          class="btn  btn-login text-uppercase fw-bold"
                          type="submit"
                        >
                          Create Account
                        </button>
                      </div>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConfirmPass;
