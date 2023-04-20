import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/index.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Navbar />
      <h1 className="text-center font-bold text-2xl">HomePage</h1>
    </div>
  );
};

export default Header;
