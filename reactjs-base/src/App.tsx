import React from "react";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navigation from "./views/Navigation/Navigation";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./views/ErrorPage/ErrorPage";
import TodoList from "./views/Todo/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          {/* ===Navigation=== */}
          <Navigation />

          {/* Route */}
          <Routes>
            <Route
              path="/"
              element={<div>Welcome! I'm a Nguyen Tran Cong</div>}
            />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/about" element={<div>I'm a Nguyen Tran Cong</div>} />
            {/* <Route path="*" element={<ErrorPage />} /> */}
          </Routes>
        </BrowserRouter>
      </header>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition:Bounce
      />
    </div>
  );
}

export default App;
