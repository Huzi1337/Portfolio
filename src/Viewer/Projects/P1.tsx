import "./P1/P1.scss";
import useSWR from "swr";
import Wrapper from "../../Utils/Wrapper";
import { useState } from "react";
import Product from "./P1/Product";

const fetcher = (url: string) => fetch(url).then((r) => r.json());
const backend_url =
  "https://portfolio-back-bdf15-default-rtdb.europe-west1.firebasedatabase.app/project1.json";

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

  const { data, error, isLoading } = useSWR(backend_url, fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div className="isLoading">Loading...</div>;

  const categories = ["All"].concat(Object.keys(data));

  return (
    <Wrapper className="project-body-1">
      <div className="header">
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
      </div>
      <div className="product-container">
        {focus > 0
          ? data[categories[focus]].map((product: productT, index: number) => {
              return (
                <Product
                  model={product.model}
                  price={product.price}
                  photo={product.photo}
                  key={index}
                ></Product>
              );
            })
          : categories.map((category: string, index1: number) => {
              if (category === "All") {
                return;
              }
              return data[category].map((product: productT, index2: number) => {
                return (
                  <Product
                    model={product.model}
                    price={product.price}
                    photo={product.photo}
                    key={index1 + index2}
                  ></Product>
                );
              });
            })}
      </div>
    </Wrapper>
  );
};

export default P1;
