import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Redirect, Route,Nav,Router,Link,Switch} from 'react-router-dom';
import {CreateIssue} from "./components/createissue"; 
import {ViewIssueList} from  "./components/viewissuelist";
import{ViewIssue} from "./components/viewissue";
import {Landline}from "./components/landline";
import {Cellular} from "./components/cellular";
import {Broadband} from "./components/Broadband";
class App extends Component {
  render() {
    return (
      <div className="ui container">
      <div class="ui secondary menu" >

      <Link className="item" to="/">View Issues</Link>
      <Link className="item" to="/creatissue">Create Issue</Link>
      <Link className="item" to="/Landline">Landline</Link>
      <Link className="item" to="/Cellular">Cellular</Link>
      <Link className="item" to="/Broadband">Broadband</Link>
        <div class="right menu">
          <a class="item">Profile</a>
          <a class="item">Logout</a>
        </div>
      </div>
        <Switch>
        <Route exact path="/" component={ViewIssueList } /> 
          <Route exact path="/creatissue" component={CreateIssue} /> 
          <Route exact path="/Cellular" component={Cellular} />  
          <Route exact path="/Landline" component={Landline} /> 
          <Route exact path="/Broadband" component={Broadband} />   
          <Route exact path="/trackissue/:id" component={ViewIssue} />         
        </Switch>
        
      </div>
    );
  }
}

export default App;
