import "./singlePost.css";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SinglePost() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      // console.dir(res);
      setPost(res.data);
      // console.log(path);
    };
    getPost();
  }, [path]);

  return (
    <div className="singlepost">
      <div className="singlePost">
        <div className="singlePostWrapper">
          {post.photo && (
            <img src={post.photo} alt="" className="singlePostImg" />
          )}
          <h1 className="singlePostTitle">
            {post.title}
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author: <b>{post.username}</b>
            </span>
            <span className="singlePostDate">
              {new Date(post.createdAt).toDateString()}
            </span>
          </div>
          <p className="singlePostDesc">{post.desc}</p>
        </div>
      </div>
    </div>
  );
}
