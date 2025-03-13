import Cookies from "js-cookie";

class LoginRepository {
  static logout() {
    Cookies.remove("token");
    Cookies.remove("userId");
    window.location.href = "/login";
  }
}

export default LoginRepository;
