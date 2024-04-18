import React, { useState } from "react";
import Header from "./components/Header";
import "./assets/App.css";
import LanguageContext from "./Context/LanguageContext";

import Courses from "./components/Courses/Courses";
import './services/i18n'

const App = () => {
  const [isLogin, setIsLogin] = useState()
  const [msgUser, setMsgUser] = useState()
  return (
    <LanguageContext.Provider value={{isLogin, setMsgUser,setIsLogin ,msgUser}}>
      <Header />
      <Courses/>
    </LanguageContext.Provider>
  );
};

export default App;
