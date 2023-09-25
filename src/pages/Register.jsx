import React from "react";

export const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Register</span>
        <form action="">
          <input type="text" placeholder="Display Name" />
          <input type="password" placeholder="Password" />
          <button>Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
