import "./Screen.scss";
import { useReducer } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import React from "react";

interface stateM {
  dispatch: React.Dispatch<{
    type: "back" | "set" | "forward";
    payload?: number;
  }>;
  state: { count: number };
  projects: string[];
}

const NavBar: React.FC<stateM> = (props) => {
  return (
    <div className="NavBar">
      <button
        className="back"
        onClick={() => props.dispatch({ type: "back" })}
      />
      <DropdownButton
        id="dropdown-item-button"
        title={props.projects[props.state.count]}
        className="dropDown"
        drop="up"
      >
        {props.projects.map((project: string, index) => {
          return (
            <Dropdown.Item
              as="button"
              onClick={() => props.dispatch({ type: "set", payload: index })}
              key={index}
            >
              {project}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
      <div className="tracker">
        {props.state.count + 1}/{props.projects.length}
      </div>
      <button
        className="forward"
        onClick={() => props.dispatch({ type: "forward" })}
      />
    </div>
  );
};

export default NavBar;
