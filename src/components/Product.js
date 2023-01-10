import { useParams } from "react-router-dom";
import products from "../data/products.js";
import "../css/Product.css";

const Product = () => {
  const { id } = useParams();
  const item = products.find((product) => product.id === id);

  return (
    <div className="Product">
      <div className="item-display">
        <h2 className="product-name">{item.name}</h2>
        <div className="price">{`£${item.price}`}</div>
        <img className="display-img" src={item.displayImg} alt=""></img>
        <ul>
          {item.features.map((feature, index) => {
            return (
              <li className="feature" key={index}>
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Product;
