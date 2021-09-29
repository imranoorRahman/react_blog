import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/7016745/pexels-photo-7016745.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt=""
        className="writeImg"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeText writeInput"
            type="text"
            placeholder="Write an article..."
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
