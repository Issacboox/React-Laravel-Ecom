import { useParams } from 'react-router-dom';
import { Component, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import NotificationPage from '../pages/NotificationPage';
import CartPage from '../pages/CartPage';
import ProductCategoryPage from '../pages/ProductCategoryPage';
import SearchPage from '../pages/SearchPage';
import RegisterPage from '../pages/RegisterPage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import ProfilePage from '../pages/ProfilePage';

export class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
          <Route path="/resetpass/:id" element={<ResetPasswordPage />} />
          <Route path="/userprofile/:id" element={<ProfilePage />} />
          <Route path="/productdetails/:id" element={<ProductDetailPageWrapper />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/productcategory/:category"
            element={<ProductCategoryPageWrapper />}
          />
          <Route path="/productbysearch/:searchkey" element={<ProductSearchWrapper />} />

        </Routes>
      </Fragment>
    );
  }
}
const ProductSearchWrapper = () => {
  const { searchkey } = useParams();
  return <SearchPage searchkey={searchkey}/>
}

const ProductDetailPageWrapper = () => {
  const { id } = useParams();
  return <ProductDetailsPage id={id}/>
}

// Create a wrapper component to use the useParams hook
const ProductCategoryPageWrapper = () => {
  const { category } = useParams();
  return <ProductCategoryPage category={category} />;
};

export default AppRoute;
