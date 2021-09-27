import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topSocialIcon fab fa-linkedin"></i>
                <i className="topSocialIcon fab fa-github-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img src="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?cs=srgb&dl=pexels-pixabay-264905.jpg&fm=jpg" alt="face" className="topImg" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
