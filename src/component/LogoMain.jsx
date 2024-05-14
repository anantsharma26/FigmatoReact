import { logo } from "../assets";
import { Link } from "react-router-dom";

function LogoMain() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
}

export default LogoMain;
