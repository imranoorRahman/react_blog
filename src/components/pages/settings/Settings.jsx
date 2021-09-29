import Sidebar from "../../sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsDeleteTitle">Delete your Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/7016745/pexels-photo-7016745.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt=""
            />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon far fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Imran" />
          <label>Email</label>
          <input type="text" placeholder="Imransproject101@gmail.com" />
          <label>Password</label>
          <input type="passsword" placeholder="*****" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
