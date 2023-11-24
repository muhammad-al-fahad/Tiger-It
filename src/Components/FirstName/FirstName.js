import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function FirstName() {
  const [firstname, setfirstname] = useState(" ");
  const [lastname, setlastname] = useState(" ");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleDate(e) {
    e.preventDefault();

    //  API post method

    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        firstname,
        lastname,
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
                    Enter First and Last name <br />
                    <br />
                  </h5>

                  <form
                    onSubmit={handleDate}
                    onClick={() =>
                      (document.getElementById("form-btn").style.background =
                        "#62BE12")
                    }
                  >
                    <div class="form-floating mb-3 mt-4">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        required
                        placeholder="name@example.com"
                        onChange={(e) => setfirstname(e.target.value)}
                      />
                      <label for="floatingInput" className="inputs">
                        {" "}
                        First Name
                      </label>
                    </div>
                    <div class="form-floating mb-3 mt-4">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        required
                        placeholder="name@example.com"
                        onChange={(e) => setlastname(e.target.value)}
                      />
                      <label for="floatingInput" className="inputs">
                        {" "}
                        Last Name
                      </label>
                    </div>

                    <Link
                      to="/signup/user/info"
                      className="text-decoration-none"
                    >
                      <div class="d-grid mt-4 ">
                        <button
                          id="form-btn"
                          style={{ background: "#d5fbb5" }}
                          class="btn  btn-login  text-decoration-none fw-bold"
                          type="submit"
                        >
                          Continue
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

export default FirstName;
