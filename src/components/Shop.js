import products from "../data/products.js";
import "../css/Shop.css";
import Card from "./Card.js";

const Shop = () => {
  return (
    <div className="Shop">
      {/* <h1>SHOP</h1> */}
      <div id="products">
        {products.map((product) => (
          <Card key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
