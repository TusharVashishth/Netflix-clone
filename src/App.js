import React from "react"
import "./App.css"
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Detail from "./pages/Detail"
import Nav from "./components/Nav"
function App() {
  return (
    <div className="app">
      <Router>
        <Nav />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/detail" exact>
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
