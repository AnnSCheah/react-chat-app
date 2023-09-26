import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="title">Chat App</span>
      <div className="user">
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Change User</button>
      </div>
    </div>
  );
};

export default Navbar;
