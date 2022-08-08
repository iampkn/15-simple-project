import React from "react";
import { useDispatch } from "react-redux";
import { logout, fetchRandomUserData } from "../store/slices/authSlice";

function Header() {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <button
        onClick={() => dispatch(fetchRandomUserData())}
        className="user-btn"
      >
        Get user data
      </button>
      <h1>Personal Data</h1>
      <button onClick={() => dispatch(logout())} className="user-btn">
        Logout
      </button>
    </div>
  );
}

export default Header;
