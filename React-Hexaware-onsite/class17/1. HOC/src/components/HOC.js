import axios from "axios";
import React, { Component } from "react";

// High Order Component
// it is a fucntion that takes a component and return a new component
const HOC = (WrappedComponent, model) => {
  return class extends Component {
    state = {
      data: [],
      search: "",
    };

    componentDidMount = () => {
      this.fetchData();
    };

    fetchData = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${model}`
      );
      this.setState({
        ...this.state,
        data: response.data,
      });
    };

    render() {
      let { search, data } = this.state;
      let filterDataList = data.filter((t) => {
        if (model === "users") {
          const { name } = t;
          return name.indexOf(search) >= 0;
        }
        if (model === "posts") {
          const { title } = t;
          return title.indexOf(search) >= 0;
        }
      });

      return (
        <div>
          <h1>{model}</h1>
          <input
            type="text"
            value={search}
            onChange={(event) =>
              this.setState({ ...this.state, search: event.target.value })
            }
          />
          <WrappedComponent data={ filterDataList } ></WrappedComponent>
        </div>
      );
    }
  };
};
export default HOC;