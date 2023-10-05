import React, { useState } from "react";
import axios from "axios";

function Search() {
  const [text, setText] = useState("");
  const [products, setProducts] = useState([]);

  const changeText = (event) => {
    setText(event.target.value);
  };

  const searchProducts = (e) => {
    e.preventDefault();

    // Update the API endpoint to search for products
    axios
      .get(`https://fakestoreapi.com/products?title=${text}`)
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  return (
    <>
      <nav>
        <div>
          <h1>Product Search</h1>
          <form onSubmit={searchProducts}>
            <input
              className="n1"
              type="search"
              placeholder="Search Products"
              aria-label="Search"
              value={text}
              onChange={changeText}
            />
            <button className="n2" type="submit">
              Search
            </button>
            <br />
            <br />
          </form>
        </div>
      </nav>

      <div className="container my-3">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;
