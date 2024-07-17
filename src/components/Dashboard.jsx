import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MainContent from "./MainContent";

const Dashboard = () => {
  

  return (
    <div className="d-flex">
      <Sidebar/>
      <div className="d-flex flex-col p-4 w-100">
        <Header/>
        <MainContent/>
      </div>
    </div>
  );
};

export default Dashboard;
