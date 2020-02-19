import React, { useContext } from "react";
import { FaReact } from "react-icons/fa";
import "./header.css";
import { Context } from "../..";
import { IoIosMenu } from "react-icons/io";

export const Header = () => {
  const { setOpen, open } = useContext(Context);

  return (
    <header className="header">
      <IoIosMenu
        color="#fff"
        onClick={() => setOpen(!open)}
        style={{ display: "none" }}
        size="30"
      />
      <h2>Challenge DEV</h2>
      <FaReact />
    </header>
  );
};
