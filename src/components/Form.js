// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./form.scss";
import axios from "axios";

const Form = () => {
  // const axios = require("axios").default;

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setFocus("name");
    // eslint-disable-next-line
  }, [setFocus]);

  const submit = (data) => {
    console.log(data.name);
    console.log(data.email);
    console.log(data.CountryCode);
    console.log(data.mob);
    console.log(data.pass);
    console.log(data.cpass);
    console.log(data.u_check);

    axios
      .post("https://globalcartreks.com/staging/eu/api/user_registration", {
        data,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    // fetch(``, {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: { "Content-type": "application/json; charset=UTF-8" },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json))
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "white",
          position: "fixed",
          width: "100%",
        }}
      >
        <h2>Travel Registration</h2>
      </div>

      <div className="innerbox">
        <form onSubmit={handleSubmit(submit)}>
          <div style={{ marginBottom: "40px" }}>
            <label>Full Name*</label>
            <input
              {...register("name", { required: true })}
              placeholder="Full Name"
            />
            <div>
              {errors.name && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
            </div>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <label>Email*</label>
            <input
              style={{}}
              placeholder="Email"
              type="email"
              {...register("email", {
                required: true,
                message: "Please enter email address",
                pattern: {
                  value:
                    // eslint-disable-next-line
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email address",
                },
              })}
              //   aria-invalid={errors.mail ? "true" : "false"}
            />
            <div>
              <span style={{ color: "red" }}>{errors.email?.message}</span>
              {/* {errors.email && <span>This field is required</span>} */}
            </div>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <label>Select Country*</label>
            <select {...register("CountryCode", { required: true })}>
              <option value="">Select Country</option>
              <option value="A">Country A</option>
              <option value="B">Country B</option>
            </select>
            <div>
              {errors.country && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
            </div>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <label>Mobile Phone Number</label>
            <input
              placeholder="Mobile Number"
              type="number"
              {...register("mob", { required: true })}
            />
            <div>
              {errors.phone && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
            </div>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <label>Enter Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              {...register("pass", { required: true })}
            />
            <div>
              {errors.password && (
                <span style={{ color: "red" }}>Invalid email address</span>
              )}
            </div>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("cpass", { required: true })}
            />
            <div>
              {errors.confirm && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
            </div>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex" }}>
              <input
                style={{ width: "20px" }}
                type="checkbox"
                {...register("u_check", { required: true })}
              />
              <p style={{ marginLeft: "10px" }}>
                Agree with Cartreks terms and condition
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              {errors.checkbox && (
                <span style={{ color: "red" }}>
                  Please accept the terms and condition
                </span>
              )}
            </div>
          </div>
          <button type="submit" style={{ marginBottom: "40px" }}>
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
