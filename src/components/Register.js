import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import mainlogo from "../images/main-logo.png";
import traveler from "../images/traveler.png";
import transport from "../images/transport.png";

const Register = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={mainlogo} alt="logo" />
      </div>
      <div className="innercontainer">
        <h2>
          Book a Car and Driver Service <br /> in 16 Countries and 35 Cities in
          Europe
        </h2>
      </div>
      <div className="traveler_transport">
        <div className="traveler">
          <div className="travelericon">
            <img src={traveler} alt="traveler-icon" style={{ width: "85px" }} />
          </div>
          <div className="register_traveler">
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              <h2 style={{ fontSize: "14px" }}>Register as a Traveler</h2>
            </Link>
          </div>
        </div>

        <div className="transportation">
          <div className="transport">
            <img
              src={transport}
              alt="traveler-icon"
              style={{ width: "65px", padding: "10px" }}
            />
          </div>

          <div className="register_transport">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#000",
                fontSize: "14px",
              }}
            >
              <h2 style={{ fontSize: "14px" }}>
                Register as a Transportation Provider
              </h2>
            </Link>
          </div>
        </div>
      </div>

      <div className="sign_in">
        <Link to={"/signin"}>
          <button>Back to Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
