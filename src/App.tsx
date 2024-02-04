import { useState, createContext } from "react";
import data from "./data";
import Cloth from "./Cloth";
import "./App.css";
import Button from "./Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./Cart";

export const AppContext = createContext<any>(null);

const App = () => {
  const [value, setValue] = useState<number>(0);
  const btnVal = ["S", "M", "L", "XL", "All"];
  const [btn, setBtn] = useState<string>("All");
  const [showCart, setShowCart] = useState<boolean>(false);
  const handleClick = (val: string) => {
    setBtn(val);
  };

  const [cart, setCart] = useState<any>([]);
  const [total, setTotal] = useState(0);

  return (
    <AppContext.Provider
      value={{ cart, setCart, showCart, setShowCart, total, setTotal }}
    >
      <main className="main">
        <section className="section1-container">
          <h2 className="section-head">Sizes</h2>
          <div className="btn-container">
            {btnVal.map((val) => {
              return <Button val={val} click={handleClick} />;
            })}
          </div>
        </section>
        <section className="section2-container" key={1}>
          {btn === "All"
            ? data.map((item) => {
                return <Cloth items={item} />;
              })
            : data.map((val) => {
                if (val.size === btn) return <Cloth items={val} />;
              })}
        </section>
        <button onClick={() => setShowCart(!showCart)}>
          <AiOutlineShoppingCart className="cart-icon" />
        </button>
        {showCart && <Cart />}
      </main>
    </AppContext.Provider>
  );
};

export default App;
