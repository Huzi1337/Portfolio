import "./Screen.scss";
import { useReducer } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap";

const initialState = { count: 1 };
const limit = 12;

const reducer = (state: { count: number }, action: { type: string }) => {
  switch (action.type) {
    case "forward":
      if (state.count + 1 > limit) return { count: 1 };
      return { count: state.count + 1 };
    case "back":
      if (state.count === 1) return { count: limit };
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const NavBar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="NavBar">
      <button className="back" onClick={() => dispatch({ type: "back" })} />
      <button className="dropDown">Projekt {state.count}</button>
      <div className="tracker">
        {state.count}/{limit}
      </div>
      <button
        className="forward"
        onClick={() => dispatch({ type: "forward" })}
      />
    </div>
  );
};

export default NavBar;
