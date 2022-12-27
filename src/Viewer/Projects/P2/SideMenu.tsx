import "./P2.scss";
import ListGroup from "react-bootstrap/ListGroup";

const SideMenu: React.FC<{ toggle: boolean }> = (props) => {
  return (
    <div className={`sidemenu ${props.toggle ? "toggle" : ""}`}>
      <ListGroup variant="flush" as="ul">
        <ListGroup.Item action onClick={() => {}}>
          Wallet
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => {}} active>
          Market
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => {}}>
          Analytics
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => {}}>
          Followed
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default SideMenu;
