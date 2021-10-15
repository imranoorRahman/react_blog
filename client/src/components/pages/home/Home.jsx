import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import "./home.css";

import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  try {
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/posts/" + search);
        setPosts(res.data);
      };
      fetchPosts();
    }, [search]);
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
