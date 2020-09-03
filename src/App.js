import React from "react";
import "./App.css";
import PetsPage from "./pages/pets/pets-page.component";
import Header from "./components/layout/header/header.component";
import { Switch, Route } from "react-router-dom";
import PetsDetails from "./pages/pet-details/pet-details.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={PetsPage} />
        <Route path="/details/:id" component={PetsDetails} />
      </Switch>
    </div>
  );
}

export default App;
