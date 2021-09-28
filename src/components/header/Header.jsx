import "./header.css";

export default function header() {
    return (
        <div clasName="header">
            <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
            </div>
            <img src={"https://images.pexels.com/photos/533923/pexels-photo-533923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} alt="" className="headerImg" />
        </div>
    )
}
