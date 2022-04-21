import Element from "./Element";

const List = ({ state, setState }) => {
  const deleteElement = (id) => {
    setState(state.filter((prev) => prev.id !== id));
  };
  const sorted = state.sort(
    (a, b) => Date.parse(a.expirationDate) - Date.parse(b.expirationDate)
  );
  const elements = sorted.map((element) => (
    <li key={element.id}>
      <Element state={element} deleteItem={deleteElement} />
    </li>
  ));

  return (
    <div>
      <ul>{elements}</ul>
    </div>
  );
};

export default List;
