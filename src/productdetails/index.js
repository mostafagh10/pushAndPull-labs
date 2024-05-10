import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../helpers/loader";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        const response = res.data.products;
        const productId = parseInt(id);
        const filteredProduct = response.find(pr => pr.id === productId);
        if (filteredProduct) {
          setProduct(filteredProduct);
        } else {
          console.error('Product not found');
        }
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  return (
    <div className="container">
      {product ? (
        <div>
        <div className="col-md-12" style={{padding:'20px'}}>
            <img src={product.images[0]} height="200" width="100%" />
        </div><br />
        <div className="row">
            <div className="col-md-4" style={{padding:'20px'}}>
              <img src={product.images[1]} height="200" width="100%" />
            </div>
            <div className="col-md-4" style={{padding:'20px'}}>
              <img src={product.images[2]} height="200" width="100%" />
            </div>
            <div className="col-md-4" style={{padding:'20px'}}>
              <img src={product.images[3]} height="200" width="100%" />
            </div>
        </div>
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Price: {product.price} $</p>
        </div>
        </div>
      ) : (
     <Loader />
      )}
    </div>
  );
}

export default ProductDetails;
