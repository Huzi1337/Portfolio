import Screen from "./Viewer/Screen";
import Viewer from "./Viewer/Viewer";
import NavBar from "./Viewer/NavBar";
import { useReducer } from "react";

const initialState = { count: 1 };
const projects = ["Project 1", "Project 2"];
const limit = projects.length;

const reducer = (
  state: { count: number },
  action: { type: string; payload?: number }
) => {
  switch (action.type) {
    case "forward":
      if (state.count + 1 === limit) return { count: 0 };
      return { count: state.count + 1 };
    case "back":
      if (state.count === 0) return { count: limit - 1 };
      return { count: state.count - 1 };
    case "set":
      if (action.payload != undefined) return { count: action.payload };
    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Screen>
      <h1>KRZYSZTOF JAGODA</h1>
      <h3>PORTFOLIO</h3>
      <h2>PORTFOLIO</h2>
      <Viewer />
      <NavBar state={state} dispatch={dispatch} projects={projects} />
    </Screen>
  );
}

export default App;
