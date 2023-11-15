import { useParams } from "react-router-dom";
import { Component, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserLoginPage from "../pages/UserLoginPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import NotificationPage from "../pages/NotificationPage";
import CartPage from "../pages/CartPage";
import ProductCategoryPage from "../pages/ProductCategoryPage";
import SearchPage from "../pages/SearchPage";
import RegisterPage from "../pages/RegisterPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ProfilePage from "../pages/ProfilePage";
import axios from "axios";
import AppURL from "../API/AppURL";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
export class AppRoute extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.UserData)
      .then((response) => {
        this.setUser(response.data);
      })
      .catch(() => {});
  }

  setUser = (user) => {
    this.setState({ user: user });
  };
  render() {
    return (
      <Fragment>
        <NavMenuDesktop user={this.state.user} setUser={this.setUser} />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <UserLoginPage user={this.state.user} setUser={this.setUser} />
            }
          />
          <Route path="/register" element={<RegisterPage user={this.state.user} setUser={this.setUser} />} />
          <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
          <Route path="/resetpass/:id" element={<ResetPasswordPage />} />
          <Route
            path="/userprofile"
            element={
              <ProfilePage user={this.state.user} setUser={this.setUser} />
            }
          />
          <Route
            path="/productdetails/:id"
            element={<ProductDetailPageWrapper user={this.state.user} setUser={this.setUser} />}
          />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/productcategory/:category"
            element={<ProductCategoryPageWrapper />}
          />
          <Route
            path="/productbysearch/:searchkey"
            element={<ProductSearchWrapper />}
          />
        </Routes>
      </Fragment>
    );
  }
}
const ProductSearchWrapper = () => {
  const { searchkey } = useParams();
  return <SearchPage searchkey={searchkey} />;
};

const ProductDetailPageWrapper = () => {
  const { id } = useParams();
  return <ProductDetailsPage id={id} />;
};

// Create a wrapper component to use the useParams hook
const ProductCategoryPageWrapper = () => {
  const { category } = useParams();
  return <ProductCategoryPage category={category} />;
};

export default AppRoute;
