import React, { Component, useContext } from "react";
import { DashboardContext } from "../context/context";

const Header = () => {
  const { userLoggedIn, setUserLoggedIn } = useContext(DashboardContext);
  let authUser = userLoggedIn.isAuth;
  return (
    <div className="header mb-6 px-6 d-flex jc-sb">
      <div>Dashboard</div>
      {authUser ? (
        <div>Name: {userLoggedIn.name}</div>
      ) : (
        <div>Please login!</div>
      )}
      <button
        onClick={() => setUserLoggedIn({ ...userLoggedIn, isAuth: !authUser })}
      >
        {authUser ? "Log out" : "Login"}
      </button>
    </div>
  );
};

export default Header;
