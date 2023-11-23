import React, { useState } from "react";
import axios from "axios";
import "./signin.css";
import image1 from "../assest/images/Social icon-1.png";
import image2 from "../assest/images/Social icon-2.png";
import image3 from "../assest/images/Social icon-3.png";
import image4 from "../assest/images/Eye Closed.png";
import image5 from "../assest/images/Eye.png";

import { Link } from "react-router-dom";

function SignIn() {
  const [email, setemail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  function handleDate(e) {
    e.preventDefault();

    //  API post method

    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        email,
        password,
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
      <section className="UserLogin">
        <div class="container">
          <div class="row">
            <div class="col-sm-9 col-md-5 col-lg-5 mx-auto">
              <div class="card border-0 shadow rounded-4 my-5">
                <div class="card-body p-4 p-sm-5">
                  <h5 class="tiger-card-title  mb-3">
                    Welcome ! <br />
                  </h5>
                  <p className="login-dcs">Signup or login in to continue</p>
                  <form
                    onSubmit={handleDate}
                    onClick={() =>
                      (document.getElementById("form-btn").style.background =
                        "#62BE12")
                    }
                  >
                    <div class="form-floating mb-3 mt-4">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        required
                        onChange={(e) => setemail(e.target.value)}
                      />
                      <label for="floatingInput" className="inputs">
                        {" "}
                        Enter email
                      </label>
                    </div>
                    {/* ################## show password ##################### */}
                    <div className="form-floating mb-3 mt-4">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="floatingPassword" className="inputs">
                        Enter password
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

                    <div className="forget-pass">
                      <Link to="/forgetpassword">? Forget Password </Link>
                    </div>

                    <div class="d-grid mt-4">
                      <button
                        id="form-btn"
                        style={{ background: "#d5fbb5" }}
                        class="btn  btn-login text-uppercase fw-bold"
                        type="submit"
                      >
                        Sign in
                      </button>
                      <div className="login-with mx-auto">
                        <span class="d-block text-left my-4 text-muted fw-bold">
                          &mdash;&mdash;&mdash;&mdash; or log in with
                          &mdash;&mdash;&mdash;&mdash;
                        </span>
                      </div>

                      <div class="social-login mx-auto">
                        <a href="#" class="facebook me-2">
                          <button>
                            <img src={image1} alt="" />
                          </button>
                        </a>
                        <a href="#" class="twitter me-2">
                          <button>
                            <img src={image2} alt="" />
                          </button>
                        </a>
                        <a href="#" class="google me-2">
                          <button>
                            {" "}
                            <img src={image3} alt="" />
                          </button>
                        </a>
                      </div>
                    </div>
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

export default SignIn;
