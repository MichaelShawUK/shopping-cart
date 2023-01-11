import "../css/Cart.css";

const Cart = ({ order }) => {
  return (
    <div className="Cart">
      {order.map((item) => {
        return (
          <div className="cart-item" key={item.id}>
            <div className="item-info">
              <div className="cart-name">{item.name}</div>
              <div className="cart-price">{`Price: £${item.price}`}</div>
              <div className="cart-quantity">{`Quantity: ${item.quantity}`}</div>
            </div>
            <img className="item-img" src={item.img} alt=""></img>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
