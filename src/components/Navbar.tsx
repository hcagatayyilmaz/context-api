import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <div>
      <div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/store"}>Store</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
      <button onClick={openCart}>Cart</button>
      <span>{cartQuantity}</span>
    </div>
  );
}
