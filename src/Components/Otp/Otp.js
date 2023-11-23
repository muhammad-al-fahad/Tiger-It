import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import axios from "axios";
import image1 from "../assest/images/Social icon-1.png";
import image2 from "../assest/images/Social icon-2.png";
import image3 from "../assest/images/Social icon-3.png";
import image4 from "../assest/images/Eye Closed.png";
import image5 from "../assest/images/Eye.png";
import { Link } from "react-router-dom";
import "./otp.css";
function Otp() {
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
  const [OTP, setOTP] = useState("");
  return (
    <>
      <section className="UserLogin">
        <div class="container">
          <div class="row">
            <div class="col-sm-9 col-md-5 col-lg-5 mx-auto">
              <div class="card border-0 shadow rounded-4 my-5">
                <div class="card-body p-4 p-sm-5">
                  <h5 class="tiger-card-title  mb-3">
                    OPT Code <br />
                  </h5>
                  <p className="login-dcs">
                    Enter the Code that we have sent to ahmerilyassial@gmail.com
                  </p>
                  <form
                    onSubmit={handleDate}
                    onClick={() =>
                      (document.getElementById("form-btn").style.background =
                        "#62BE12")
                    }
                  >
                    <div class="otp-inputs">
                      <div
                        className="otp-inputs-box mt-4 mb-2"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <OTPInput
                          value={OTP}
                          onChange={setOTP}
                          //         autoFocus
                          OTPLength={6}
                          otpType="number"
                          disabled={false}
                          secure
                          style={{ borderRadius: "20px" }}
                        />
                      </div>
                    </div>

                    <div className="forget-pass">
                      <Link to="/">Past Code </Link>
                    </div>

                    <div class="d-grid mt-4">
                      <button
                        id="form-btn"
                        style={{ background: "#d5fbb5" }}
                        class="btn  btn-login text-uppercase fw-bold"
                        type="submit"
                      >
                        Verify code
                      </button>
                      {/* <ResendOTP
                        handelResendClick={() => console.log("Resend clicked")}
                      /> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container"></div>
    </>
  );
}

export default Otp;
