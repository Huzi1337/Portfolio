import { Fragment, useState } from "react";
import useSwr from "swr";
import SideMenu from "./P2/SideMenu";
import CloseButton from "react-bootstrap/CloseButton";
import LineChart from "./P2/Chart";
import ListGroup from "react-bootstrap/ListGroup";

import "./P2/P2.scss";

const fetcher = (url: string) => fetch(url).then((r) => r.json());
const backend_url =
  "https://portfolio-back-bdf15-default-rtdb.europe-west1.firebasedatabase.app/project2/Cryptocurrencies.json";

const P2 = () => {
  const { data, error, isLoading } = useSwr(backend_url, fetcher);
  const [toggle, setToggle] = useState(false);
  const [focus, setFocus] = useState("Bitcoin");
  if (error) return <div>Error</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <Fragment>
      <div className="project-body-2">
        <div className="header">
          {toggle ? (
            <CloseButton
              onClick={() => {
                setToggle(false);
              }}
              variant="white"
            />
          ) : (
            <button
              className="menu-button"
              onClick={() => {
                setToggle(true);
              }}
            />
          )}
          <h2>Markets</h2>
        </div>
        <div className="content-container">
          <ListGroup className="currency-container">
            <ListGroup.Item className="first">
              <h2 className="bold">Name</h2>
              <h2 className="bold">Tag</h2>
              <h2 className="bold">Price</h2>
              <div className="delta" />
            </ListGroup.Item>
            {Object.keys(data).map((currency: string, index: number) => {
              const dat = data[currency];
              return (
                <ListGroup.Item
                  className={focus === currency ? "focus" : ""}
                  key={index}
                  action
                  onClick={() => setFocus(currency)}
                >
                  <h2>{currency}</h2>
                  <h2>{dat.short}</h2>
                  <h2>{`$${dat.data[dat.data.length - 1]}`}</h2>
                  <div className={`delta ${dat.up ? "up" : "down"}`} />
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          <div className="chart-container">
            <div>{`${focus} last 7 days`}</div>
            <LineChart data={data[focus].data} focus={focus} />
          </div>
        </div>
      </div>
      <SideMenu toggle={toggle} />
    </Fragment>
  );
};

export default P2;
