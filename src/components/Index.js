import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Bin2Dec } from "../screens/Bin2Dec";
import { Header } from "./header/header";
import { Sidebar } from "./sidebar/sidebar";
import { Context } from "..";

export const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <Context.Provider value={{ open, setOpen }}>
      <div className="app">
        <Header />
        <div className="container-cod">
          <Sidebar />
          <div className="container">
            <Switch>
              <Route path="/bin2dec" exact>
                <Bin2Dec title="Binary to decimal converter" />
              </Route>
              <Route path="/border-radius" exact>
                <Bin2Dec />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};
