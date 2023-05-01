import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "../components/CartItem";
export function ShoppingCart() {
  //Test
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <div>
      <hr />
      <button onClick={closeCart}>X</button>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
}
