import './UserInput.css';
import {React, useState, useEffect} from "react"

const UserInput = ({getTweets}) => {
    const [inputText, setinputText] = useState("");
    const [tweet, setTweet] = useState([]);
    const handleChange = (e) =>{
        setinputText(e.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        setTweet([...tweet, `${inputText}`]);
        setinputText("");
    }

    useEffect(()=>{
        
        if(tweet.length > 0) {
            getTweets(`${tweet.slice(-1)[0]}`)
        }
    }, [tweet])

    return (
    <div className="user-input">
        <div className="sticky-home-link-wrapper">
        <a href="#" className="sticky-home-link">
            <p><strong>Home</strong></p>
            <i className="far fa-star fa-lg"></i>
        </a>
        </div>
        <div className="enter-tweet-wrapper">
            <div className="enter-tweet-logo">
                <div className="user-logo">

                </div>
            </div>

            <div className="enter-tweet">
                <div className="enter-tweet-input">
                    <form onSubmit={handleSubmit}>
                    <textarea value={inputText} onChange={handleChange}type="text"  placeholder="What's happening?" maxlength="280">
                    </textarea>
                    </form>

                </div>
                <div className="enter-tweet-icons-wrapper">
                    <div className="enter-tweet-icons">
                        <a href="#"><i class="far fa-image fa-lg"></i></a>
                        <a href="#"><i class="far fa-image fa-lg"></i></a>
                        <a href="#"><i class="far fa-chart-bar fa-lg"></i></a>
                        <a href="#"><i class="far fa-smile fa-lg"></i></a>
                        <a href="#"><i class="far fa-calendar fa-lg"></i></a>
                    </div>
                    <div className="enter-tweet-btn">
                        <button disabled={!inputText} onClick={handleSubmit}><strong>Tweet</strong></button>
                    </div>

                </div>
            </div>
        </div>
    </div>
      )
  }

  export default UserInput;