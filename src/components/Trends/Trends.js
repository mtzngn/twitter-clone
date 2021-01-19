import {useState} from "react"
import './Trends.css';


const Trends = () => {
    const [data, setData] = useState([
        {location: "Turkey",
        trend: "Ceyda Duvenci",
        tweetCount : 2900},
        {location: "Uk",
        trend: "WeAreCodeNation",
        tweetCount : 5300},
        {location: "Uk",
        trend: "ManchesterTech",
        tweetCount : 3900},
        {location: "Turkey",
        trend: "DonerKebap",
        tweetCount : 12900},
        {location: "World",
        trend: "Tenet",
        tweetCount : 9900},
    ])
    return (
    <div className="trends">
      <ul>
        <li>
        <h2> <strong>Trends for you</strong></h2>
        </li>
        {data.map((data)=>{
                return(
                    <li>
                    <a href="#" className="trends-link">
                    <p>Trending in {data.location}</p>
                    <h3>{data.trend}</h3>
                    <p>{data.tweetCount} Tweets</p>
                    </a>
                  </li>
                )
            })
        }
        <li>
          <a href="#" className="trends-show-more">
          Show more
          </a>
        </li>
  
      </ul>
    </div>
      )
  }

  export default Trends;
