import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="img not found"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <lebel htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </lebel>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title" 
            className="WriteInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="WriteInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">publish</button>
      </form>
    </div>
  );
}
