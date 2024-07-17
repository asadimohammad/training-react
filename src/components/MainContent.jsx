import React, { useContext } from "react";
import { DashboardContext } from "../context/context";

const MainContent = (props) => {
  const { users } = useContext(DashboardContext);
  return (
    <div className="main_content">
      <table>
        <thead>
          <th>Name</th>
          <th>Family</th>
          <th>Active</th>
        </thead>
        <tbody>
          {users.map((user , index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.family}</td>
              <td>{user.isActive}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainContent;
