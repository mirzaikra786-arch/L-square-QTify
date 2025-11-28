import React from "react";
//import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <>
    <nav className={styles.navbar}>
      
      <Logo />
     
      <div className={styles.isDesktop}>
      <Search 
      placeholder="Search a song of your choice"
      searchData={searchData=[]}
      />
      </div>
      <Button Text="Give Feedback"/>
       </nav>
       
      </>
  );
}

export default Navbar;

