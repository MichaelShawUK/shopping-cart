import "../css/Card.css";

const Card = ({ item }) => {
  const { name, price, displayImg } = item;
  return (
    <div className="Card">
      <h2 className="product-name">{name}</h2>
      <img className="display-img" src={displayImg} alt=""></img>
      <div className="price">{`£${price}`}</div>
    </div>
  );
};

export default Card;
