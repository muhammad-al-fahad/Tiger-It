import React, { useState } from "react";
import OtpInput from "react-otp-input";
import "./tigerotp.css";
import axios from "axios";
import { Link } from "react-router-dom";
function TigerOtp() {
  const [email, setemail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    // Send 'otp' to your server for validation
    // If validation is successful, proceed; otherwise, show an error message
    console.log("OTP is ", otp);
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
                    <div
                      class="col-md-12 col-12 col-lg-12 col-sm-12  otp-inputs"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={<span> </span>}
                        inputType="tel"
                        style={{ borderRadius: "20px" }}
                        containerStyle={{ display: "unset" }}
                        inputStyle={{ width: "2.5rem", height: "2.5rem" }}
                        renderInput={(props) => (
                          <input {...props} className="otp-input" />
                        )}
                      />
                    </div>
                    <div className="past-code-button ">
                      <button className="text-left">Paste Code</button>
                    </div>
                  </form>
                  <Link
                    to="/signup/confirmpassword"
                    className="text-decoration-none"
                  >
                    <div class="d-grid mt-4">
                      <button
                        onClick={handleVerify}
                        id="form-btn"
                        style={{ background: "#d5fbb5" }}
                        class="btn  btn-login text-uppercase fw-bold"
                      >
                        Verify code
                      </button>
                      {/* <ResendOTP
                        handelResendClick={() => console.log("Resend clicked")}
                      /> */}
                    </div>
                  </Link>
                  <div className="resend-otp-button text-center mt-4">
                    <button className="">Resend Code</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TigerOtp;
