import "./Screen.scss";
import P1 from "./Projects/P1";
import P2 from "./Projects/P2";

const Viewer: React.FC<{
  state: { count: number; desktop: boolean };
}> = (props) => {
  return (
    <div className={props.state.desktop ? "Viewer desktop" : "Viewer"}>
      {props.state.count === 0 && <P1 />}
      {props.state.count === 1 && <P2 />}
    </div>
  );
};

export default Viewer;
