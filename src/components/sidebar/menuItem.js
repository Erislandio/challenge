import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

export const MenuItem = ({ title, url }) => (
  <li>
    <Link to={url}>{title}</Link>
    <MdKeyboardArrowRight />
  </li>
);
