import React, { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Slider from "../Navigation/Slider";

function Dashboard() {
  const addItemToCart = () => {
    alert("Product added successfully"); //add product id and quantity in the database here with a
    // window.location='/cart'                  //post request using axios or use local storage for temporary data
    // window.location='/cart'
  };
  const [record, setRecord] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setRecord(data))
      .catch((err) => console.log(err));
  }, []);
  const cards = record.map((rec) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={rec.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={rec.image}
            style={{ width: "100px", height: "130px" }}
          />

          <Card.Body>
            <Card.Title>
              <h4>
                <b>Title:</b> {rec.title}
              </h4>
            </Card.Title>
            <Card.Text>INR: {rec.price}</Card.Text>
            <Card.Text>
              {" "}
              <b>Description:</b>
              {rec.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ background: "white" }}>
            <Button variant="primary" onClick={() => addItemToCart(rec)}>
              Add to cart
            </Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  ));
  return (
    <div>
      {/* <Button>Constom</Button> */}
      <Slider />
      <h1 style={{ textAlign: "center" }}>
        <u>product</u>
      </h1>
      <div className="row">{cards}</div>
    </div>
  );
}

export default Dashboard;
