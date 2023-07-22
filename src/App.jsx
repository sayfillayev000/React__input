import { useState } from "react";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Negative from "./pages/Negative";
import Neutral from "./pages/Neutral";
import Pasitive from "./pages/pasitive";

function App() {
  const form = document.querySelector("form");
  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   let valu = e.target.username.value;
  //   console.log(valu);
  // });

  return (
    <>
      <div className="contianer">
        <form>
          <input type="text" placeholder="Enter tab index" />
          <button type="submit">change tab</button>
        </form>

        <div className="title">
          <NavLink to="/pasitive">POSITIVE</NavLink>
          <NavLink to="/negative">NEGATIVE</NavLink>
          <NavLink to="/neutral">NEUTRAL</NavLink>
        </div>
        <Routes>
          <Route path="/negative" element={<Negative />} />
          <Route path="/neutral" element={<Neutral />} />
          <Route path="/pasitive" element={<Pasitive />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
