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
}

export default AppURL;
