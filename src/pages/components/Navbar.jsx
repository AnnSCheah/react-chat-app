import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="title">Chat App</span>
      <div className="user">
        <span>John</span>
        <button onClick={() => signOut(auth)}>Change User</button>
      </div>
    </div>
  );
};

export default Navbar;
