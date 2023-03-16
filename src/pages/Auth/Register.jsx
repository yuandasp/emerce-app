import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import Axios from "axios";
import { registerHandler } from "../../redux/usersSlice";

function Register() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const inputHandler = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);

    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const resetForm = () => {
    setForm({
      fullName: "",
      username: "",
      email: "",
      password: "",
    });
  };

  // const registerHandler = async () => {
  //   try {
  //     let response = await Axios.post("http://localhost:2000/users", {
  //       fullName: form.fullName,
  //       username: form.username,
  //       email: form.email,
  //       role: "user",
  //     });
  //     console.log(response.data);
  //     setForm({
  //       fullName: "",
  //       username: "",
  //       email: "",
  //       password: "",
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Register Now!</h1>
          <p className="lead">
            Register now and start shopping in the most affordable ecommerce
            platform
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-4 offset-4">
          <div className="card">
            <div className="card-body">
              <h5 className="font-weight-bold mb-3">Register</h5>
              <input
                type="text"
                placeholder="Full Name"
                className="form-control my-2"
                onChange={inputHandler}
                name="fullName"
                value={form.fullName}
              />
              <input
                type="text"
                placeholder="Username"
                className="form-control my-2"
                onChange={inputHandler}
                name="username"
                value={form.username}
              />
              <input
                type="text"
                placeholder="Email"
                className="form-control my-2"
                onChange={inputHandler}
                name="email"
                value={form.email}
              />
              <input
                type="password"
                placeholder="Password"
                className="form-control my-2"
                onChange={inputHandler}
                name="password"
                value={form.password}
              />
              <div className="d-flex flex-row justify-content-between align-items-center">
                <button
                  onClick={() => dispatch(registerHandler(form, resetForm))}
                  className="btn btn-primary mt-2"
                >
                  Register
                </button>
                <Link to="/login" className="fs-6">
                  Or login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
