import products from "../data/products.js";

const Shop = () => {
  const item = products[11];
  return (
    <>
      <h1>SHOP</h1>
      <p>{item.name}</p>
      <p>{item.price}</p>
      <ul>
        <li>{item.features[0]}</li>
        <li>{item.features[1]}</li>
        <li>{item.features[2]}</li>
        <li>{item.features[3]}</li>
      </ul>
      <img src={item.displayImg} alt=""></img>
    </>
  );
};

export default Shop;
