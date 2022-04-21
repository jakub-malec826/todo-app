import React, { useState } from "react";

import "../styles/Element.css";

const Element = ({ state, deleteItem }) => {
  const [done, setDone] = useState("");
  const [isActive, setIsActive] = useState(true);

  const todoDone = () => {
    setDone("done");
    setIsActive(false);
  };

  return (
    <div className="row">
      <p className="col-sm-8">
        <strong className={state.important ? `text-danger ${done}` : done}>
          {state.todo}
        </strong>{" "}
        do <span>{state.expirationDate}</span> <br />
        {state.note === null ? null : <span>Notka: {state.note}</span>}
      </p>
      {isActive ? (
        <button className="btn btn-primary col-sm-2 h-25" onClick={todoDone}>
          ✓
        </button>
      ) : (
        <p className="col-sm-2"></p>
      )}
      <button
        className="btn btn-secondary col-sm-2 h-25"
        onClick={() => deleteItem(state.id)}
      >
        X
      </button>
    </div>
  );
};

export default Element;
