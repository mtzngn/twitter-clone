import './App.css';
import {React} from "react"
import Trends from "./components/Trends/Trends.js"
import FollowSuggestions from "./components/FollowSuggestions/FollowSuggestions.js"
import Sidebar from "./components/Sidebar/Sidebar.js"
import MainFeed from "./components/MainFeed/MainFeed.js"
import SearchBar from "./components/SearchBar/SearchBar.js"

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
  





export default App;
