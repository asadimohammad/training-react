import React, { useContext, useState } from "react";
// import ThemeContext from "../Context/ThemeContext";
import LanguageContext from "../Context/LanguageContext";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [username, setUsername] = useState("");
  const { isLogin, setIsLogin, setMsgUser } = useContext(LanguageContext);
  const {t} = useTranslation()

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username);
    setMsgUser(username);
    setIsLogin(!isLogin);
  };

  return (
    <div className="login">
      <form action="" onSubmit={handleLogin}>
        {!isLogin && <input type="text" onChange={(e) => setUsername(e.target.value)} />}
        <input type="submit" value={isLogin ? 'Logout':t('login.btn')} />
      </form>
    </div>
  );
};

export default Login;
