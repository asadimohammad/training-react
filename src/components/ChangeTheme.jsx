import React from "react";
import {useTheme} from "../Context/ThemeContext";

const ChangeTheme = () => {
    const {toggleTheme} = useTheme()


  return (
    <div>
      <div>
        <select name="" id="" onChange={toggleTheme}>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
    </div>
  );
};

export default ChangeTheme;
