import './Sidebar.css';
import {React, useState, useEffect} from "react"

const Sidebar = () => {
    const [data, setData] = useState(["Home", "Explore", "Notifications", "Messages", "Bookmarks", "Lists", "Profile", "More"])

    useEffect(()=>{

    },[])
    return (
    <div className="sidebar">
      <ul>
        <li>
          <a>Logo</a>
        </li>
        {data.map((data)=>{
          return(
            <li>
              <a href="#">
                <i>Icon</i>
                <h2>{data}</h2>
              </a>
            </li>
          )
        })}
      </ul>
      <div className="user-section">

      </div>
      </div>
    )
    }

export default Sidebar;