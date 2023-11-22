import React, { useState } from "react";
import axios from "axios";
import image1 from "../assest/images/Social icon-1.png";
import image2 from "../assest/images/Social icon-2.png";
import image3 from "../assest/images/Social icon-3.png";
import image4 from "../assest/images/Eye Closed.png";
import image5 from "../assest/images/Eye.png";

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

                  <form onSubmit={handleDate}>
                    <div class="form-floating mb-3 mt-4">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
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
                        placeholder="name@example.com"
                        onChange={(e) => setlastname(e.target.value)}
                      />
                      <label for="floatingInput" className="inputs">
                        {" "}
                        Last Name
                      </label>
                    </div>

                    <div class="d-grid mt-4">
                      <button
                        class="btn  btn-login text-uppercase fw-bold"
                        type="submit"
                      >
                        Continue
                      </button>
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

export default FirstName;
