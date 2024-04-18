import React, { useState } from "react";
import Header from "./components/Header";
import "./assets/App.css";
import ThemeContext from "./Context/ThemeContext";
import Courses from "./components/Courses/Courses";

const App = () => {
  const [isLogin, setIsLogin] = useState()
  const [msgUser, setMsgUser] = useState()
  return (
    <ThemeContext.Provider value={{isLogin, setMsgUser,setIsLogin ,msgUser}}>
      <Header />
      <Courses/>
    </ThemeContext.Provider>
  );
};

export default App;
