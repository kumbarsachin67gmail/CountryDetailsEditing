import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
// import All from './components/All';
import AllList from './components/AllList';
import ShortList from './components/ShortList';


function App() {


  return (
    <div className="App">
      <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={AllList} />
        <Route exact path="/shortlisted" component={ShortList} />
      </Switch>

      </React.Fragment>

      
    </div>
  );
}

export default App;
