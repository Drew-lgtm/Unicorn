import { Fragment, useState } from "react";
import NewItemInput from "./NewItemInput";

function List() {
  const [items, setItems] = useState<string[]>([]);

  const Message = items.length === 0 ? <p>No items yet.</p> : null;

  const handleAddItem = (newItem: string) => {
    setItems([...items, newItem]);
  };

  return (
    <Fragment>
      <h1>Shopping List</h1>
      {Message}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <NewItemInput onAddItem={handleAddItem} />
    </Fragment>
  );
}

export default List;
