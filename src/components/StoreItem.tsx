import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type TStoreItems = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: TStoreItems) {
  const {
    GetItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = GetItemQuantity(id);
  return (
    <div>
      <span>{name}</span>
      <span>{formatCurrency(price)}</span>
      <span>{imgUrl}</span>
      {quantity === 0 ? (
        <button onClick={() => increaseCartQuantity(id)}>Add to cart</button>
      ) : (
        <div>
          <button onClick={() => increaseCartQuantity(id)}>+</button>
          <span>{quantity}</span>
          <button onClick={() => decreaseCartQuantity(id)}>-</button>
          <button onClick={() => removeFromCart(id)}>remove</button>
        </div>
      )}
    </div>
  );
}
