import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import { DashboardContext } from "./context/context";

const App = () => {
  const [users, setUsers] = useState([
    { name: "Mohamamd", family: "Asadi", isActive: "true" },
    { name: "Amir", family: "Kazemi", isActive: "false" },
  ]);
  const [userLoggedIn, setUserLoggedIn] = useState({
    name: "Mohamamd",
    family: "Asadi",
    isActive: "true",
    isAuth: true
  });

  return (
    <div>
      <DashboardContext.Provider value={{ users , userLoggedIn , setUserLoggedIn}}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
};

export default App;
