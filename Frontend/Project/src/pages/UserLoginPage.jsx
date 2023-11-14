/* eslint-disable react/prop-types */
import { Component, Fragment } from "react";

import NavMenuMobile from "../components/common/NavMenuMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import FooterDesktop from "../components/common/FooterDesktop";
import UserLogin from "../components/common/UserLogin";

export class UserLoginPage extends Component {
  render() {
    const setUser = this.props.setUser;
    const user = this.props.user;

    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <UserLogin setUser={setUser} user={user} />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default UserLoginPage;
