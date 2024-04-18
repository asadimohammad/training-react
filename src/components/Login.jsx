import React, { useContext, useState } from "react";
import ThemeContext from "../Context/ThemeContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const { isLogin, setIsLogin, setMsgUser } = useContext(ThemeContext);

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
        <input type="submit" value={isLogin ? 'Logout':'Login'} />
      </form>
    </div>
  );
};

export default Login;
