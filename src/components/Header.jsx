import React, { Component, useContext } from "react";
import NavList from "./NavList";
import Login from "./Login";
import ChangeLang from "./ChangeLang";
import ThemeContext from "../Context/ThemeContext";

class Header extends Component{
//   const { isLogin, msgUser } = useContext(ThemeContext);
static contextType = ThemeContext
  render() {
    return (
        <div className="header d-flex jc-sb py-3 px-6 align-center">
          <NavList />
            <div className="d-flex gap-4 jc-center align-center">
              { this.context.isLogin ? <h2>{this.context.msgUser}</h2> : ""}
              <ChangeLang />
              <Login />
            </div>
        </div>
      );
  }
};
export default Header;
