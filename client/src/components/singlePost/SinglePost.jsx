import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            src="https://images.pexels.com/photos/7016745/pexels-photo-7016745.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=""
            className="singlePostImg"
          />
          <h1 className="singlePostTitle">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <div className="singlePostEdit">
              <i class="singlePostIcon far fa-edit"></i>
              <i class="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author: <b>Imran</b>
            </span>
            <span className="singlePostDate">1 hour ago</span>
          </div>
          <p className="singlePostDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
            corrupti voluptatibus temporibus dolorum mollitia consequuntur ullam
            sed deleniti? Rem enim magni minima deleniti saepe aliquid placeat
            vel nesciunt deserunt. Sequi. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Autem, corrupti voluptatibus
            temporibus dolorum mollitia consequuntur ullam sed deleniti? Rem
            enim magni minima deleniti saepe aliquid placeat vel nesciunt
            deserunt. Sequi. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Autem, corrupti voluptatibus temporibus dolorum mollitia
            consequuntur ullam sed deleniti? Rem enim magni minima deleniti
            saepe aliquid placeat vel nesciunt deserunt. Sequi.
          </p>
        </div>
      </div>
    </div>
  );
}
