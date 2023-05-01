import { useShoppingCart } from "../context/ShoppingCartContext";
import items from "../data/data.json";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();

  const item = items.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <div>
      <span>{item.name}</span>
      <span>{item.price}</span>
    </div>
  );
}
