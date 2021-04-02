import React, { Component } from "react";
import axios from "axios";
import Result from "./Result";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3001/").then((res) => {
      console.log(res);
      this.setState({
        students: res.data,
      });
    });
  }
  render() {
    let ele = this.state.students.map((el) => {
      return (
        <Result
          Id={el.Id}
          Name={el.Name}
          Likes={el.Likes}
          Comment={el.Comment}
        />
      );
    });
    console.log("ee", ele);
    return (
      <div>
        <h1>Student data</h1>

        {ele}
      </div>
    );
  }
}
export default App;
