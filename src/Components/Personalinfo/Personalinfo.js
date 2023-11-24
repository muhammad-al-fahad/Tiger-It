import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Personalinfo() {
  const [address1, setAddress1] = useState(" ");
  const [streetName, setStreetName] = useState(" ");
  const [postalcode, setPostalcode] = useState(" ");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  function handleDate(e) {
    e.preventDefault();

    //  API post method

    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        address1,
        streetName,
        postalcode,
        city,
        state,
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
      <section className="UserLogin ">
        <div class="container">
          <div class="row">
            <div class="col-sm-9 col-md-5 col-lg-5 mx-auto">
              <div class="card border-0 shadow rounded-4 my-5">
                <div class="card-body p-4 p-sm-5">
                  <h5 class="tiger-card-title  mb-3">
                    Personal Address
                    <br />
                  </h5>

                  <form
                    id="form"
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
                        placeholder="name@example.com"
                        required
                        onChange={(e) => setAddress1(e.target.value)}
                      />
                      <label for="floatingInput" className="inputs">
                        {" "}
                        Address line
                      </label>
                    </div>
                    <div class="form-floating mb-3 mt-4">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        required
                        onChange={(e) => setStreetName(e.target.value)}
                      />
                      <label for="floatingInput" className="inputs">
                        {" "}
                        Street Name
                      </label>
                    </div>

                    <div className="row g-2">
                      <div className="col-md-6">
                        <label
                          htmlFor="validationCustom04"
                          className="form-label"
                        >
                          City
                        </label>
                        <select
                          className="form-select"
                          id="validationCustom04"
                          onChange={(e) => setCity(e.target.value)}
                          required
                        >
                          <option selected disabled value="">
                            Choose...
                          </option>
                          <option>Multan</option>
                          <option>Lahore</option>
                          <option>Islamabad</option>
                          <option>Karachi</option>
                          <option>DG Khan</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid city.
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor="validationCustom04"
                          className="form-label"
                        >
                          State
                        </label>
                        <select
                          className="form-select"
                          id="validationCustom04"
                          onChange={(e) => setState(e.target.value)}
                          required
                        >
                          <option selected disabled value="">
                            Choose...
                          </option>
                          <option>Khyber Pakhtunkhwa</option>
                          <option>Sindh</option>
                          <option>Gilgit-Baltistan</option>
                          <option>Balochistan</option>
                          <option>Azad Jammu and Kashmir</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid state.
                        </div>
                      </div>
                    </div>
                    <div class="form-floating mb-3 mt-4">
                      <input
                        type="number"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        required
                        onChange={(e) => setPostalcode(e.target.value)}
                      />
                      <label for="floatingInput" className="inputs">
                        {" "}
                        Postel Code
                      </label>
                    </div>
                    <div className="d-grid mt-4">
                      <Link to='/signup/confirmpassword' className="text-decoration-none">
                        <div className="d-grid mt-4">
                          <button
                            id="form-btn"
                            style={{ background: "#d5fbb5" }}
                            className={"btn btn-login text-uppercase fw-bold"}
                            type="submit"
                          >
                            Continue
                          </button>
                        </div>
                      </Link>
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

export default Personalinfo;
