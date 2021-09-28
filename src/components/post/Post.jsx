import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImage"
        // height="100px"
        // width="100px"
        width="100%"
        // src="https://images.pexels.com/photos/3254753/pexels-photo-3254753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        src="https://images.pexels.com/photos/2317899/pexels-photo-2317899.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Technology</span>
          <span className="postCat">Crypto</span>
          <span className="postCat">Fitness</span>
          <span className="postCat">Deen</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <hr />
        <span className="postDate">01-01-1990</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, odio
        adipisci cumque incidunt cupiditate soluta blanditiis quo suscipit quia
        asperiores veritatis ex molestias tempore natus illum distinctio veniam
        exercitationem laudantium! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quaerat, odio adipisci cumque incidunt cupiditate
        soluta blanditiis quo suscipit quia asperiores veritatis ex molestias
        tempore natus illum distinctio veniam exercitationem laudantium! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quaerat, odio
        adipisci cumque incidunt cupiditate soluta blanditiis quo suscipit quia
        asperiores veritatis ex molestias tempore natus illum distinctio veniam
        exercitationem laudantium!
      </p>
    </div>
  );
}
