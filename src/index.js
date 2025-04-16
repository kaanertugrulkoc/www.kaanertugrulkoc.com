import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="hakkında" element={<About />} />
        <Route path="iletişim" element={<Contact />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
  document.getElementById("admin")
);
