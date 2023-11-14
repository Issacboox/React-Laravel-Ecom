/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Component, Fragment } from "react";
import NavMenuMobile from "../components/common/NavMenuMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import FooterDesktop from "../components/common/FooterDesktop";
import UserProfile from "../components/common/UserProfile";

export class ProfilePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {

    const User = this.props.user;

    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <UserProfile user={User} />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default ProfilePage;
