import React, { useContext } from "react";
import NavList from "./NavList";
import Login from "./Login";
import ChangeLang from "./ChangeLang";
import LanguageContext from "../Context/LanguageContext";
import ChangeTheme from "./ChangeTheme";
// import ThemeContext from "../Context/ThemeContext";

const Header = () => {
  const { isLogin , msgUser } = useContext(LanguageContext);
  return (
    <div className="header d-flex jc-sb py-3 px-6 align-center">
      <NavList />
      <div className="d-flex gap-4 jc-center align-center">
        {isLogin ? <h2>{msgUser}</h2> : ""}
        <ChangeTheme/>
        <ChangeLang />
        <Login />
      </div>
    </div>
  );
};

export default Header;
