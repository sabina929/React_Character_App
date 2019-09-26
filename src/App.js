import React, { Component } from "react";
import Header from "./layout/Header";
import Characters from "./components/Characters";
import AddCharacter from "./forms/AddCharacter";
import UpdateCharacter from "./forms/UpdateCharacter";
import NotFound from "./pages/NotFound";
import Contribute from "./pages/Contribute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




// const Home = () => {
//   return (
//     <h3>Home Page</h3>
//   )
// }
// const About = () => {
//   return (
//     <h3>About Page</h3>
//   )
// }


// https://anapioficeandfire.com/api/characters/583
class App extends Component {


  render() {

    return (

      <Router>
        <div className="container">
          { /* <Route exact path="/" render={
      () => {
        return <h3>Home Page</h3>
      }
      } />
          <Route exact path="/about" render={
      () => {
        return <h3>About Page</h3>
      }
      } /> */ }

          { /* <Route exact path="/" component={Home}/> */ }
          { /* <Route exact path="/about" component={About}/> */ }


     
        <Header title="A Song of Ice and Fire's characters"/>

   

      { /* <AddCharacter/> */ }
      { /* <Characters /> */ }

      <Switch>
          <Route exact path="/" component={Characters}/>
          <Route exact path="/add" component={AddCharacter}/>
          <Route exact path="/github" component={Contribute}/>
          <Route exact path="/edit/:id" component={UpdateCharacter}/>
          <Route component={NotFound}/> 
      </Switch>


        </div>
      </Router>

      );
  }

}

export default App;
