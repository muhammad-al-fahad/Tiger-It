import React, { useState } from "react";
import axios from "axios";
import image1 from "../assest/images/Social icon-1.png";
import image2 from "../assest/images/Social icon-2.png";
import image3 from "../assest/images/Social icon-3.png";

function ForgetPassword() {
  const [email, setemail] = useState(" ");

  function handleDate(e) {
    e.preventDefault();

    //  API post method

    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        email,
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
                    Enter your mail address <br />
                  </h5>

                  <form onSubmit={handleDate} onClick={() => document.getElementById('form-btn').style.background = '#62BE12'}>
                    <div class="form-floating mb-3 mt-4">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={(e) => setemail(e.target.value)}
                      />
                      <label for="floatingInput" className="inputs">
                        {" "}
                        Enter email
                      </label>
                    </div>
                    {/* ################## show password ##################### */}

                    <div class="d-grid mt-4">
                      <button
                        id="form-btn"
                        style={{background: '#d5fbb5'}}
                        class="btn  btn-login text-uppercase fw-bold"
                        type="submit"
                      >
                        login
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

export default ForgetPassword;
