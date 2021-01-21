import './MainFeed.css';
import {React, useState, useEffect} from "react"
import UserInput from "../UserInput/UserInput.js"


const MainFeed = () =>{
  const [tweets, setTweet] = useState([])
  const getTweets = (data) => {
    setTweet([...tweets, `${data}`])
  }

  const getChuckNorris = () =>{
    console.log(tweets)

    fetch("https://api.chucknorris.io/jokes/random")
    .then((response)=> response.json())
    .then((data) => {
        setTweet([...tweets, data.value])
    })
  }
  useEffect(()=>{
    setTimeout(() =>{getChuckNorris()}, 5000)
    
  }, [tweets])

    return (
    <div class="main-feed">
      <UserInput getTweets={getTweets}/>

      {tweets.slice(0).reverse().map((tweet)=>{
        return (
          <div className="feed-wrapper">
          <div className="feed-logo">
            
          </div>
          <div className="feed-details">
            <div className="feed-title-section">
              <h4>Chuck Norris</h4>
              <p>@ChuckChuck</p>
              <p> . </p>
              <p>20 Jan</p>
            </div>
            <div className="tweet-feed">
              <p>{tweet}</p>
            </div>
            <div className="tweet-btns">
              <a href="#">
                <i class="far fa-comment fa-lg"></i>
              </a>
              <a href="#">
                <i class="fas fa-retweet fa-lg"></i>
              </a>
              <a href="#">
                <i class="far fa-heart fa-lg"></i>
              </a>
              <a href="#">
                <i class="far fa-share-square fa-lg"></i>
              </a>
  
            </div>
          </div>
        </div>


        )
      })}
    </div>
    )
  }




  export default MainFeed;