import { Outlet } from "react-router-dom";
import "./App.scss";
import HomeHeader from "./components/Header/HomeHeader";

function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        <HomeHeader />
      </div>
      <div className="main-container">
        <div className="sidebar-container"></div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
