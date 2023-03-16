import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginHandler } from "../../redux/usersSlice";

function Login() {
  const dispatch = useDispatch();
  const errMessage = useSelector((state) => state.user.form.errMsg);
  const UserId = useSelector((state) => state.user.form.id);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const inputLoginUser = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);

    setForm({ ...form, [event.target.name]: event.target.value });
  };

  if (UserId) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Login Now!</h1>
          <p className="lead">
            Login now and start shopping in the most affordable ecommerce
            platform
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-4 offset-4">
          {errMessage ? (
            <div className="alert alert-danger">{errMessage}</div>
          ) : null}
          <div className="card">
            <div className="card-body">
              <h5 className="font-weight-bold mb-3">Login</h5>
              <input
                type="text"
                placeholder="Username"
                className="form-control my-2"
                onChange={inputLoginUser}
                name="username"
                value={form.username}
              />
              <input
                type="password"
                placeholder="Password"
                className="form-control my-2"
                onChange={inputLoginUser}
                name="password"
                value={form.password}
              />
              <div className="d-flex flex-row justify-content-between align-items-center">
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => dispatch(loginHandler(form))}
                >
                  Login
                </button>
                <Link to="/login" className="fs-6">
                  Or Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
