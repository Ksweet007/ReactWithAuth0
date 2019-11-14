import React, { Component } from "react";

class Callback extends Component {
  constructor(props) {
    super(props);
    debugger;
    this.history = props.history;
  }

  componentDidMount = () => {
    // Handle authentication if expected values are in the URL.
    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication();
      this.history.push("/");
    } else {
      throw new Error("Invalid callback URL.");
    }
  };
  render() {
    return <h1>Loading...</h1>;
  }
}

export default Callback;
