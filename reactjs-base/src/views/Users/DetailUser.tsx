import PropTypes from "prop-types";
import React, { Component } from "react";
import { withRouter } from "../HOC/withParams";

export class DetailUser extends Component {
  render() {
    // const { params, location } = this.props;
    // const query = new URLSearchParams(location.search).get("query");
    return <div>DetailUser</div>;
  }
}

export default withRouter(DetailUser);
