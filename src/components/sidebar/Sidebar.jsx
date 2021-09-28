import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          width="450px"
          src="https://images.pexels.com/photos/8200210/pexels-photo-8200210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Gym & Fitness</li>
          <li className="sidebarListItem">Goals</li>
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
