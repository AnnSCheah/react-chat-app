import React from "react";

export const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Login</span>
        <form action="">
          <input type="text" placeholder="Display Name" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
