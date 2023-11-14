import { Component, Fragment } from "react";

export class UserProfile extends Component {
  render() {
    return (
      <Fragment>
        <h1>User Profile Page</h1>
        <ul>
          <li className="list-group-item">Name : Name</li>
          <li className="list-group-item">Email : Email</li>
        </ul>
      </Fragment>
    );
  }
}

export default UserProfile;
