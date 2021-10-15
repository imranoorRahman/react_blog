import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import "./home.css";

import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  try {
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/posts/");
        // console.log(res.data);
        setPosts(res.data);
      };
      fetchPosts();
    }, []);
  } catch (err) {
    console.log(err);
  }

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
