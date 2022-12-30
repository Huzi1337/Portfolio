import "./Screen.scss";
import { useState, useEffect } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import React from "react";

interface stateM {
  dispatch: React.Dispatch<{
    type: "back" | "set" | "forward" | "switch";
    payload?: number;
  }>;
  state: { count: number; desktop: boolean };
  projects: string[];
}

const resize = [true, false];
const mobile = [1];

const NavBar: React.FC<stateM> = (props) => {
  useEffect(() => {
    mobile.forEach((project) => {
      if (props.state.count === project && props.state.desktop)
        props.dispatch({ type: "switch" });
    });
  }, [props.state.count]);

  return (
    <div className="NavBar">
      <button
        className="back"
        onClick={() => props.dispatch({ type: "back" })}
      />
      <div className="project-selection">
        {resize[props.state.count] ? (
          <button
            className={props.state.desktop ? "view active" : "view"}
            onClick={() => props.dispatch({ type: "switch" })}
          ></button>
        ) : (
          <div />
        )}

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
      </div>
      <button
        className="forward"
        onClick={() => props.dispatch({ type: "forward" })}
      />
    </div>
  );
};

export default NavBar;
