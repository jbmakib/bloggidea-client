import React, { useState } from "react";
import "./Login.css";
import loginImg from "../../../media/images/login.png";
import FloatingForm from "./FloatingForm";

const Login = () => {
  // change the title
  window.document.title = "Bloggidea - Login";

  // states for form
  const [loginFormValue, setLoginFormValue] = useState({});

  // handle input change
  const handleInputChange = (e) => {
    const newFormValue = { ...loginFormValue };
    newFormValue[e.target.name] = e.target.value;
    setLoginFormValue(newFormValue);
  };

  // handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(loginFormValue);
    e.target[0].value = "";
    e.target[1].value = "";
  };

  return (
    <div className="login-div">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 align-items-center">
          <div className="col">
            <h1 className="fs-biggest text-center mb-3">Login</h1>
            <form onSubmit={handleFormSubmit} className="w-75 mx-auto">
              <FloatingForm
                id="floatLoginEmail"
                type="email"
                name="email"
                placeholder="Email address"
                onInput={handleInputChange}
              />
              <FloatingForm
                id="floatLoginPass"
                type="password"
                name="password"
                placeholder="Password"
                onInput={handleInputChange}
              />
              <div className="d-flex justify-content-between">
                <div>
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember"> Remember Me</label>
                </div>
                <div>Forgot Password?</div>
              </div>
              <button className="btn btn-primary d-block w-100" type="submit">
                Login
              </button>
            </form>
          </div>
          <div className="col align-items-center">
            <img src={loginImg} alt="Login Vector" className="img-fluid my-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
