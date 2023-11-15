class AppURL {
  static BaseURL = "http://127.0.0.1:8000/api";
  static VisitorDetails = this.BaseURL + "/getvisitor";
  static AllCategory = this.BaseURL + "/allcategory";

  static ProductByRemark(Remark) {
    return this.BaseURL + "/allproductlistbyremark/" + Remark;
  }
  static ProductByCategory(Category) {
    return this.BaseURL + "/allproductlistbycategory/" + Category;
  }
  static ProductBySupCat(Category, SupCat) {
    return (
      this.BaseURL + "/allproductlistbysubcategory" + Category + "/" + SupCat
    );
  }
  static HomeSlider = this.BaseURL + "/allslider";

  static ProductDetail(id) {
    return this.BaseURL + "/productdetail/" + id;
  }
  static Notification = this.BaseURL + "/notification";

  static SearchEngin(key) {
    return this.BaseURL + "/search/" + key;
  }

  // this for Login Register Forget Reset Pass
  static UserLogin = this.BaseURL + "/login";
  static UserData = this.BaseURL + "/user";
  static UserRegister = this.BaseURL + "/register";
  static UserForgetPassword = this.BaseURL + "/forgetpassword";
  static UserResetPassword = this.BaseURL + "/reset";

  static SimilarProduct(category) {
    return this.BaseURL + "/similar/" + category;
  }

  static ProductReview(code) {
    return this.BaseURL + "/reviewlist/" + code;
  }

}

export default AppURL;
