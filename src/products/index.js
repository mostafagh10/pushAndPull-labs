import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../helpers/loader";

function Products() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios.get('https://dummyjson.com/products')
  //     .then(res => {
  //       setProducts(res.data.products);
  //       setLoading(false); 
  //       console.log(res.data.products);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       setLoading(false);
  //     });
  // }, []);

  function loadProducts(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dummyjson.com/products", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const responseData = JSON.parse(xhr.responseText);
        setProducts(responseData.products);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    xhr.send();
  }

  return (
    <div className="container">
      <button className="btn btn-primary" onClick={loadProducts}>load products</button>
      <div className="row">
        {loading ? (
          <Loader />
        ) : (
          products.map(product => (
            <div className="col-md-4" style={{ padding: '10px 50px' }} key={product.id}>
              <div className="card text-center">
                <div className="card-img-top">
                  <img src={product.images[0]} height='150' width="100%" alt={product.title} />
                </div>
                <Link to={`/product/${product.id}`}>{product.title}</Link>
                <h6>{product.category}</h6>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Products;
