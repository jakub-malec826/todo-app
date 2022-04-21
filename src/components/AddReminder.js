import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/AddReminder.css";

const date = new Date().toISOString().slice(0, 10);

const AddReminder = ({ setState, id, setId }) => {
  const [todo, setTodo] = useState("");
  const [important, setImportant] = useState(false);
  const [expirationDate, setExpirationDate] = useState(date);
  const [note, setNote] = useState(null);

  const changeTodo = (e) => setTodo((prev) => (prev = e.target.value));
  const changeImportant = (e) => setImportant((prev) => (prev = !prev));
  const changeExpirationDate = (e) =>
    setExpirationDate((prev) => (prev = e.target.value));
  const changeNote = (e) => setNote((prev) => (prev = e.target.value));

  const navigation = useNavigate();

  const handleSend = (e) => {
    e.preventDefault();
    setId((prev) => prev + 1);
    const newTodo = {
      id,
      todo,
      important,
      expirationDate,
      date,
      note,
    };

    setState((prev) => [...prev, newTodo]);

    setTodo("");
    setImportant(false);
    setExpirationDate(date);
    setNote("");

    navigation("/added");
  };

  return (
    <div className="form-group">
      <form>
        <div className="row">
          <label htmlFor="todo" className="col-sm-4">
            Zadanie:{" "}
          </label>
          <input
            type="text"
            name="todo"
            value={todo}
            onChange={changeTodo}
            className="form-control col-sm"
          />
        </div>
        <div className="row">
          <label htmlFor="expirationDate" className="col-sm-4">
            Termin{" "}
          </label>
          <input
            type="date"
            name="expirationDate"
            value={expirationDate}
            onChange={changeExpirationDate}
            className="form-control col-sm"
          />
        </div>
        <div className="row">
          <label htmlFor="note" className="col-sm-4">
            Notatka:{" "}
          </label>
          <textarea
            name="note"
            value={note}
            onChange={changeNote}
            placeholder="Wpisz coś..."
            className="form-control col-sm"
          ></textarea>
        </div>
        <div className="row justify-content-center">
          <label htmlFor="important" className="col-sm-4 w-auto">
            Ważne?{" "}
          </label>
          <input
            type="checkbox"
            name="important"
            checked={important}
            onChange={changeImportant}
            className="form-check col-sm-1 "
          />
        </div>
      </form>
      <div className="">
        <button onClick={handleSend} className="btn btn-primary w-auto">
          Dodaj
        </button>
      </div>
    </div>
  );
};

export default AddReminder;
