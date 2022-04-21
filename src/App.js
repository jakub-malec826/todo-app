import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./styles/App.css";

import AddReminder from "./components/AddReminder";
import Choose from "./components/Choose";
import List from "./components/List";
import Added from "./components/Added";

function App() {
  const [state, setState] = useState([]);
  const [id, setId] = useState(0);

  return (
    <BrowserRouter>
      <div className="container-sm App bg-dark text-light">
        <Choose length={state.length} />
        <div className="content container-sm">
          <Routes>
            <Route
              path="add"
              element={
                <AddReminder setState={setState} id={id} setId={setId} />
              }
            />
            <Route
              path="/"
              element={<List state={state} setState={setState} />}
            />
            <Route path="added" element={<Added />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
