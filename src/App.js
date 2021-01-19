import logo from './logo.svg';
import './App.css';
import {React, useState} from "react"
import Trends from "./components/Trends/Trends.js"
import FollowSuggestions from "./components/FollowSuggestions/FollowSuggestions.js"
import Sidebar from "./components/Sidebar/Sidebar.js"

const App = ()=>{
  return (
    <div className="App">
      <div className="sidebar-wrapper">
      <Sidebar/>
      </div>
      <div className="mainfeed-wrapper">
      <MainFeed/>
      </div>
      <div className="trend-section-wrapper">
      <SearchBar/>
      <Trends/>
      <FollowSuggestions/>
      </div>
    </div>
  );
}


  
const UserInput = () => {
  return (
  <div className="user-input">
    <h1>you will tweet from here!</h1>
  </div>
    )
}
const MainFeed = () =>{
  return (
  <div class="main-feed">
    <UserInput/>
    <h1>Here the tweets</h1>
  </div>
  )
}
const SearchBar = () => {
  return (
    <div className="searchbar">
      <i>Icon</i>
      <input placeholder="Search Twitter" id="search"></input>
    </div>
      )
}



export default App;
