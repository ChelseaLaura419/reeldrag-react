import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.module.css'
import Home from './pages/Home'
import Modal from './components/Modal'
import Charters from './pages/Charters'
import Fishing from './pages/Fishing'
import Error from './pages/Error'
import Logo from './images/reelDragSm.png'

class App extends Component {
  state = {
    name: '',

  }
  getUserInfo() {
    this.setState({
      name: 'Chelsea'
    })
  }
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <img className="logo" src={Logo} alt="logo" />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <div className="nav-item nav-link"><Link to="/">HOME</Link></div>
              <div className="nav-item nav-link"><Link to="/charter">CHARTERS</Link></div>
              <div className="nav-item nav-link"><Link to="/fishingbuddies">FISHING BUDDIES</Link></div>
              <div className="nav-item nav-link"><Link to="/login">MY ACCOUNT</Link></div>
            </div>
            </div>
          </nav>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/charter" component={Charters}/>
              <Route path="/fishingbuddies" component={Fishing}/>
              <Route path="/myaccount" component={Modal}/>
              <Route component={Error} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
