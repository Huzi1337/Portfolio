import "./P1/P1.scss";
import useSWR from "swr";
import Wrapper from "../../Utils/Wrapper";
import { useState } from "react";
import Product from "./P1/Product";

const fetcher = (url: string) => fetch(url).then((r) => r.json());
const backend_url = "localhost:5000";

export interface productT {
  model: string;
  price: number;
  photo: string;
}

const P1 = () => {
  const [focus, setFocus] = useState(0);

  const setFocusHandler = (index: number) => {
    setFocus(index);
  };

  const { data, error, isLoading } = useSWR(
    `http://${backend_url}/api/p1`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  const categories = Object.keys(data);

  return (
    <Wrapper className="project-body">
      <div className="buttons">
        <button className="back" />
        <button className="cart" />
      </div>

      <h1>Category</h1>

      <Wrapper className="category-container">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setFocusHandler(
                  categories.findIndex((name) => name === category)
                );
              }}
              className={index === focus ? "active" : ""}
            >
              {category}
            </button>
          );
        })}
      </Wrapper>

      <div className="product-container">
        {data[categories[focus]].map((product: productT, index: number) => {
          return (
            <Product
              model={product.model}
              price={product.price}
              photo={product.photo}
              key={index}
            ></Product>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default P1;
