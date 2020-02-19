import React, { useContext } from "react";
import "./sidebar.css";
import { MenuItem } from "./menuItem";
import { Context } from "../..";

const itens = [
  {
    title: "Bin2Dec",
    url: "/bin2dec"
  },
  {
    title: "Border radius simulator",
    url: "/border-radius"
  }
];

export const Sidebar = () => {
  const { open } = useContext(Context);

  const left = open ? "0px" : "-100%";

  return (
    <aside className="aside" style={{ left }}>
      <div>
        <h3>Menu</h3>
        <ul>
          {itens.map(({ title, url }) => (
            <MenuItem key={title} title={title} url={url} />
          ))}
        </ul>
      </div>
    </aside>
  );
};
