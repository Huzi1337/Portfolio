import Screen from "./Viewer/Screen";
import Viewer from "./Viewer/Viewer";
import NavBar from "./Viewer/NavBar";
import { useReducer } from "react";

const initialState = { count: 0, desktop: false };
const projects = ["Project 1", "Project 2"];
const limit = projects.length;

const reducer = (
  state: { count: number; desktop: boolean },
  action: { type: string; payload?: number }
) => {
  switch (action.type) {
    case "forward":
      if (state.count + 1 === limit) return { ...state, count: 0 };
      return { ...state, count: state.count + 1 };
    case "back":
      if (state.count === 0) return { ...state, count: limit - 1 };
      return { ...state, count: state.count - 1 };
    case "set":
      if (action.payload != undefined)
        return { ...state, count: action.payload };
    case "switch":
      return { ...state, desktop: !state.desktop };
    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Screen>
      <div className="title">
        <h1>KRZYSZTOF JAGODA</h1>
        <div className="portfolio-container">
          <h3 className="portfolio-blur">PORTFOLIO</h3>
          <h2 className="portfolio-text">PORTFOLIO</h2>
        </div>
      </div>
      <Viewer state={state} />
      <NavBar state={state} dispatch={dispatch} projects={projects} />
    </Screen>
  );
}

export default App;
