import './Sidebar.css';
import {React, useState, useEffect} from "react"

const Sidebar = () => {
    const [data, setData] = useState(["Home", "Explore", "Notifications", "Messages", "Bookmarks", "Lists", "Profile", "More"])
    const [font, setFont] = useState(["fas fa-home","fas fa-hashtag","far fa-bell","far fa-envelope","far fa-bookmark","far fa-list-alt",
    "far fa-user","fas fa-ellipsis-h"])

    useEffect(()=>{

    },[])
    return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#">
          <i className="fab fa-twitter"></i>
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
      </ul>
      <button>Tweet</button>
      <div className="user-section">

      </div>
      </div>
    )
    }

export default Sidebar;