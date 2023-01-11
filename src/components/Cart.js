import "../css/Cart.css";

const Cart = ({ order }) => {
  const total = order.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  console.log(total);

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
      {total ? <div id="order-total">Order Total: {`£${total}`}</div> : null}
    </div>
  );
};

export default Cart;
