import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Repuesto from "./components/repuesto/Repuesto";
import Inventario from "./components/inventario/Inventario";
import Establecimiento from "./components/establecimiento/Establecimiento";

function App() {
  return (
    <main /* className={classes.content} */>
      <Router>
        <Navbar />
        <div className="pb-4"></div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/repuesto" component={Repuesto} />
          <Route path="/usuario" component={Repuesto} />
          <Route path="/inventario" component={Inventario} />
          <Route path="/establecimiento" component={Establecimiento} />
        </Switch>
      </Router>
      <footer className="fixed-bottom">
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          BRV
          {" "+new Date().getFullYear()}
          {"."}
        </Typography>
      </footer>
    </main>
  );
}

export default App;
