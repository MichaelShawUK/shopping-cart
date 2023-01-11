import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products.js";
import "../css/Product.css";

const Product = () => {
  const { id } = useParams();
  const item = products.find((product) => product.id === id);
  const [imgs, setImgs] = useState([item.displayImg].concat(item.galleryImgs));

  function setMainImg(e) {
    if (e.target.dataset.img === "1") {
      setImgs(imgs.slice(1).concat(imgs[0]));
    } else if (e.target.dataset.img === "2") {
      setImgs([imgs[2]].concat(imgs.slice(0, 2)));
    }
  }

  return (
    <div className="Product">
      <div className="item-display">
        <h2 className="product-name">{item.name}</h2>
        <div className="price">{`£${item.price}`}</div>
        <img className="display-img" src={imgs[0]} alt=""></img>
        <div className="preview-imgs">
          <img
            className="preview-img"
            src={imgs[1]}
            alt=""
            data-img="1"
            onClick={setMainImg}
          ></img>
          <img
            className="preview-img"
            src={imgs[2]}
            alt=""
            data-img="2"
            onClick={setMainImg}
          ></img>
        </div>
        <ul>
          {item.features.map((feature, index) => {
            return (
              <li className="feature" key={index}>
                {feature}
              </li>
            );
          })}
        </ul>
        <div className="purchase-btns">
          <button>ADD TO CART</button>
          <button>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
