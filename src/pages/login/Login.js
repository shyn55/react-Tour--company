import { useState } from "react";
import Swal from 'sweetalert2'
import MyNavbar from "../../components/navbar/Navbar";
import "./Login.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const submitHandler = () => {
    if (username == "admin" && password == "1234") {
      document.cookie = "username=admin; expires=Thu, 18 Dec 2027 12:00:00 UTC; path=/";
      Swal.fire({
        title: "با موفقیت وارد شدی",
        icon: "success",
        draggable: true,
      });
      navigate('/panel')
    } else {
       Swal.fire({
        title: "username یا password اشتباه است",
        icon: "error",
        draggable: true,
      });
    }
  };

  return (
    <div>
      <MyNavbar />
      <h2 className="login-title">برای ورود به پنل ، باید وارد شوید</h2>
      <div className="containerLogin">
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username : admin"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password : 1234"
        />
        <button type="button" onClick={submitHandler}>
          enter
        </button>
      </div>
    </div>
  );
}
export default Login;
