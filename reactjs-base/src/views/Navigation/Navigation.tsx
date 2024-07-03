import React, { Component } from "react";
import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <div className={styles.topnav}>
        {/* <Link to="/">Home</Link>
        <Link to="/todo">Todo list</Link>
        <Link to="/about">About</Link> */}
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? styles.active : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/todo"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? styles.active : ""
          }
        >
          Todo list
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? styles.active : ""
          }
        >
          About
        </NavLink>
      </div>
    );
  }
}
