/* eslint-disable no-unused-labels */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Component, Fragment } from "react";

export class UserProfile extends Component {
  render() {
    let name;
    let email;
    if(this.props.user){
      name = this.props.user.name;
      email = this.props.user.email;
    }
    return (
      <Fragment>
        <h1>User Profile Page</h1>
        <ul>
          <li className="list-group-item">Name : {name}</li>
          <li className="list-group-item">Email : {email}</li>
        </ul>
      </Fragment>
    );
  }
}

export default UserProfile;
