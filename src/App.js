import React, { Component } from 'react'
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import View from './View'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeView: 'home'
    }
  }

  setActiveView = (view) => {
    this.setState({
      activeView: view
    })
  }

  render() {
    return (
      <div className="app">

        <View viewName="home" activeView={this.state.activeView} className="color1">
          <div className="header"><i onClick={() => this.setActiveView('nav')} className="fas fa-bars"></i></div>
          <div className="main">
            <h3>Home</h3>
            <p onClick={() => this.setActiveView('about')}>Go to About</p>
          </div>
        </View>

        <View viewName="about" activeView={this.state.activeView} className="color2">
          <div className="header"><i onClick={() => this.setActiveView('nav')} className="fas fa-bars"></i></div>
          <div className="main">
            <h3>About</h3>
            <p onClick={() => this.setActiveView('home')}>Go to Home</p>
          </div>
        </View>
        
        <View viewName="login" activeView={this.state.activeView} className="color3">
          <div className="header"><i onClick={() => this.setActiveView('nav')} className="fas fa-bars"></i></div>
          <div className="main">
            <h3>Login</h3>
            <p onClick={() => this.setActiveView('home')}>Go to Home</p>
          </div>
        </View>
        
        <View viewName="nav" activeView={this.state.activeView} className="color4">
          <div className="header"><i onClick={() => this.setActiveView('home')} className="fas fa-times"></i></div>
          <div className="main">
            <ul className="menu">
              <li><a onClick={() => this.setActiveView('home')} className="" href="#">Home</a></li>
              <li><a onClick={() => this.setActiveView('about')} className="" href="#">About</a></li>
              <li><a onClick={() => this.setActiveView('login')} className="" href="#">Login</a></li>
            </ul>
          </div>
        </View>
        
        

      </div>
    )
  }
}

export default App
