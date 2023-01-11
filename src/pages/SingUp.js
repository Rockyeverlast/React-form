import React from "react";
import BackArrow from "../components/BackArrow";
import Register from "../components/Register";
import car from "../images/car.png";

const SingUp = () => {
  return (
    <>
      {/* <div>
        <img
          src={car}
          alt="car"
          style={{ maxHeight: "550px", width: " 100%", objectFit: "cover" }}
        />
      </div> */}
      <div
        style={{
          backgroundImage: `url(${car})`,
          display: "grid",
          placeContent: "center",
          backgroundPositionX: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "291px",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <BackArrow />
      </div>
      <Register />
    </>
  );
};

export default SingUp;
