import axios from "axios";
import React from "react";
import "./ListUser.scss";

const URL = "https://reqres.in/";
const users = "api/users?page=2";
class ListUser extends React.Component {
  state = {
    listUsers: [],
  };

  async componentDidMount() {
    // axios.get(`${URL}${users}`).then((res) => {
    //   console.log(`--------->>> responses: `, res);
    // });
    let usersRes = await axios.get(`${URL}${users}`);
    this.setState({
      listUsers: usersRes.data?.data || [],
    });
  }

  render() {
    return (
      <div className="listUserContainer">
        Hello! list user
        <div className="title">Get user list using Axios</div>
        {this.state.listUsers.length > 0 &&
          this.state.listUsers &&
          this.state.listUsers?.map((item, index) => {
            const { id, last_name, first_name, email } = item;
            return (
              <div className="listUserItem">
                {index + 1}. {id} - {first_name} {last_name}
              </div>
            );
          })}
      </div>
    );
  }
}

export default ListUser;
