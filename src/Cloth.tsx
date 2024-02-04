import { useContext } from "react";
import { AppContext } from "./App";

const Cloth = ({ items }: any) => {
  const { cart, setCart, setTotal, total } = useContext(AppContext);
  const handleCart = () => {
    setCart([...cart, items]);
    setTotal(total + parseInt(items.price) + 1);
  };

  return (
    <div className="clothcontainer">
      <div className="img-container">
        <img className="img" src={items.imgUrl} alt={items.name} />
      </div>
      <div className="info-container">
        <h3 className="name">{items.name}</h3>
        <div className="underline"></div>
        <div className="price-container">
          <h4 className="price">
            <span className="dollar">$</span>
            <span className="number">{parseInt(items.price)}</span>
            <span className="decimal">
              {(items.price % 1).toFixed(2).substring(1)}
            </span>
          </h4>
        </div>
        <button onClick={handleCart} className="cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cloth;
