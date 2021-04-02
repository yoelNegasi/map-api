import "./App.css";
function Result(props) {
  return (
    <div className="container">
      <div className="one">
        <h1>
          StudentID:
          <br /> {props.Id}
        </h1>
      </div>
      <div className="two">
        <h1>
          Student Name:
          <br /> {props.Name}
        </h1>
      </div>
      <div className="three">
        <h1>
          Number of Likes
          <br /> {props.Likes}
        </h1>
      </div>
      <div className="four">
        <h1>
          Number of Comment:
          <br /> {props.Comment}
        </h1>
      </div>
    </div>
  );
}

export default Result;
