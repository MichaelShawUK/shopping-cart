import { Link } from "react-router-dom";
import "../css/Card.css";

const Card = ({ item }) => {
  const { id, name, price, displayImg } = item;
  return (
    <div className="Card">
      <h2 className="product-name">{name}</h2>
      <Link to={`${id}`}>
        <img className="display-img" src={displayImg} alt=""></img>
      </Link>
      <div className="price">{`£${price}`}</div>
    </div>
  );
};

export default Card;
