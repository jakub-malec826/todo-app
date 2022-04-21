import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Choose.css";

const Choose = ({ length }) => {
  const [isActive, setIsActive] = useState("/");
  const navigation = useNavigate();

  const handleOnClick = (props) => {
    setIsActive((prev) => (prev = props));
    navigation(props);
  };

  return (
    <div className="containter Choose">
      <div className="row">
        <h1>TODO</h1>
        <span className="">Liczba zadań do zrobienia: {length}</span>
      </div>
      <div className="row btn-group btn-group">
        <button
          className={
            isActive === "add"
              ? "btn btn-primary w-auto"
              : "btn btn-secondary w-auto"
          }
          onClick={() => handleOnClick("add")}
        >
          Dodaj zadanie
        </button>
        <button
          className={
            isActive === "/"
              ? "btn btn-primary w-auto"
              : "btn btn-secondary w-auto"
          }
          onClick={() => handleOnClick("/")}
        >
          Pokaż moje zadania
        </button>
      </div>
    </div>
  );
};

export default Choose;
