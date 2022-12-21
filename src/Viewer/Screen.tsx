import "./Screen.scss";

type Props = {
  children: React.ReactNode;
};

const Screen: React.FC<Props> = (props) => {
  return <div className="Screen">{props.children}</div>;
};

export default Screen;
