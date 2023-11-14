/* eslint-disable no-unused-vars */
import { Component, Fragment } from "react";
import NavMenuMobile from "../components/common/NavMenuMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import FooterDesktop from "../components/common/FooterDesktop";
import SearchList from "../components/product_detail/SearchList";
import AppURL from "../API/AppURL";
import axios from "axios";

export class SearchPage extends Component {
  constructor(match) {
    super(match);
    this.state = {
      SearchKey: match.searchkey,
      ResultData: [],
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.SearchEngin(this.state.SearchKey))
      .then((response) => {
        this.setState({ ResultData: response.data });
      })
      .catch(() => {});
  }
  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <SearchList
          SearchKey={this.state.SearchKey}
          SearchData={this.state.ResultData}
        />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default SearchPage;
