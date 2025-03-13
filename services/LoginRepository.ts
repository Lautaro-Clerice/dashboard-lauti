import Cookies from "cookies-js";

class LoginRepository {
  static logout() {
    Cookies.expire("token");
    Cookies.expire("userId");
    window.location.href = "/login";
  }
}

export default LoginRepository;
