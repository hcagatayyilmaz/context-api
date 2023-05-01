import { StoreItem } from "../components/StoreItem";
import data from "../data/data.json";

export function Store() {
  return (
    <div>
      <hr />
      Store
      {data.map((item) => (
        <div key={item.id}>
          <StoreItem {...item} />
        </div>
      ))}
    </div>
  );
}
