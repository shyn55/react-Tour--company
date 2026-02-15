import { Navigate } from "react-router-dom";
import { isLogIn } from "../utils";

function PrivateRoute({ children }) {
  return <>{isLogIn("admin") ? children : <Navigate to="/login" />}</>;
}
export default PrivateRoute;
