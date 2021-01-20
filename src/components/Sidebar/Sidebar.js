import './Sidebar.css';
import {React, useState, useEffect} from "react"

const Sidebar = () => {
    const [data, setData] = useState(["Home", "Explore", "Notifications", "Messages", "Bookmarks", "Lists", "Profile", "More"])
    const [font, setFont] = useState(["fas fa-home fa-lg","fas fa-hashtag fa-lg","far fa-bell fa-lg","far fa-envelope fa-lg","far fa-bookmark fa-lg","far fa-list-alt fa-lg",
    "far fa-user fa-lg","fas fa-ellipsis-h fa-lg"])

    useEffect(()=>{

    },[])
    
    return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#">
          <i className="fab fa-twitter fa-lg"></i>
          </a>
        </li>
        {data.map((data,i)=>{
          return(
            <li>
              <a href="#">
              <i class={font[i]}></i>
                <h2>{data}</h2>
              </a>
            </li>
          )
        })}
        <li id="sidebar-tweet">
          <a href="#">
            <p>Tweet</p>
          </a>
        </li>
      </ul>
      <div className="user-section">

      </div>
      </div>
    )
    }

export default Sidebar;