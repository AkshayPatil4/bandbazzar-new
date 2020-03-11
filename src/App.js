import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavHome from './components/NavHome';
import Home from './components/homepage/Home';
import PP1 from './components/profilepage/PP1/PP1';
import FP1 from './components/filterpage/FP1/FP1';
import Login from './components/Login/login';
import Fan from './components/Login/fan';
import Main from './components/Event/main';
import forgetpassword from './components/Login/forgetpassword';
import resetpassword from './components/Login/resetpassword';
import Gmain from './components/Gig/gmain';
import Epmain from './components/Eventprofile/epmain';
import Studiofiltermain from './components/studiofilter/studiofiltermain';
import Artistmain from './components/Artist/artistmain';
import Option from './components/Login/option';
class App extends Component {
  componentDidMount() {
    // Jquery here $(...)...
  }
  render() {
    return (
     
      <Router>
        <div className="App">
          <NavHome/>  
          <Route exact path="/" render={props => (
            <React.Fragment>
              
              <Home />
            </React.Fragment> 
          )} />
          <Route path="/pp1" component={PP1} />
          <Route path="/option" component={Option} />
          <Route path="/artistmain" component={Artistmain}/>
          <Route path="/Home" component={Home} />
          <Route path="/fp1" component={FP1} />
          <Route path='/login' component={Login} />
          <Route path='/Fan' component={Fan} />
          <Route path='/forgetpassword' component={forgetpassword} />  
          <Route path='/Main' component={Main} />  
          <Route path='/gmain' component={Gmain}/>
          <Route path='/epmain' component={Epmain}/>
          <Route path='/studiofiltermain' component={Studiofiltermain}/>
          <Route path='/resetpassword' component={resetpassword} />  
      </div>
      </Router>
    );
  }
}

export default App;
