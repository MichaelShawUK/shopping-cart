import products from "../data/products.js";
import "../css/Shop.css";
import Card from "./Card.js";

const Shop = ({ onClick }) => {
  return (
    <div className="Shop">
      <div id="products">
        {products.map((product) => (
          <Card key={product.id} item={product} data-testid="card" />
        ))}
      </div>
    </div>
  );
};

export default Shop;
