import { productT } from "../P1";
import "./P1.scss";

const Product: React.FC<productT> = (props) => {
  return (
    <div className="wrapper">
      <img src={props.photo} />
      <h1>{props.model}</h1>
      <h1>${props.price}</h1>
    </div>
  );
};

export default Product;
