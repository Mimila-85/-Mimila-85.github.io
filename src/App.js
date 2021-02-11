import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Project"
import Contact from "./pages/Contact"
import BadRequest from "./pages/BadRequest"
import Navbar from "./components/Navbar"
import Foot from "./components/Foot"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/project">
            <Project />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route>
            <BadRequest />
          </Route>
        </Switch>
        <Foot />
      </div>
    </Router>
  );
}

export default App;
