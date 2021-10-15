import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  try {
    useEffect(() => {
      const getCats = async () => {
        const res = await axios.get("/categories/");
        setCats(res.data);
      };
      getCats();
    }, []);
  } catch (err) {
    console.log(err);
  }

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          width="350px"
          src="https://images.pexels.com/photos/8200210/pexels-photo-8200210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarSocialIcon fab fa-linkedin"></i>
          <i className="sidebarSocialIcon fab fa-github-square"></i>
        </div>
      </div>
    </div>
  );
}
