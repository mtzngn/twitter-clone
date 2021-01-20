import './MainFeed.css';
import {React, useState} from "react"
import UserInput from "../UserInput/UserInput.js"


const MainFeed = () =>{
  const [tweets, setTweet] = useState([])
  const getTweets = (data) => {
    setTweet([...tweets, `${data}`])
  }
    return (
    <div class="main-feed">
      <UserInput getTweets={getTweets}/>
      <div className="feed-wrapper">
        <div className="feed-logo">
          
        </div>
        <div className="feed-details">
        </div>
      </div>
      {tweets.map((tweet)=>{
        return (
          <h1>{tweet}</h1>
        )
      })}
    </div>
    )
  }

  export default MainFeed;