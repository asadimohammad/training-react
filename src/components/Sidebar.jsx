import React from "react";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <ul className="d-flex flex-col gap-6 p-4">
        <li>Users</li>
        <li>Courses</li>
        <li>Teachers</li>
        <li>Setting</li>
      </ul>
    </div>
  );
};

export default Sidebar;
