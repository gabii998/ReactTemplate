import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";
import GuardedRoute from "./common/GuardedRoute";
import Landing from "./Landing";
import Usuario from "./model/Usuario";
import DetalleProducto from "./DetalleProducto";

const App = () => {

  return (
    <div className="bg-gray-100 min-h-screen">
      <Router>
        <Navbar/>
        <Switch>\
        <Route path="/Productos/:id"><DetalleProducto></DetalleProducto></Route>
           <Route path="/Productos"><Landing/></Route>
           

          {/* <GuardedRoute
            component={Landing}
            path="/"
            redirectTo="/inicio"
            auth={Usuario.getEstaLogueado != false}
          /> */}

        </Switch>
      </Router>
    </div>
  );
};

export default App;
