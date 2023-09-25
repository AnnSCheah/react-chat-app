import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="title">Chat App</span>
      <div className="user">
        <span>John</span>
        <button>Change User</button>
      </div>
    </div>
  );
};

export default Navbar;
