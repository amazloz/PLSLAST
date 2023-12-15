import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        Talkis
      </Link>
      <div>
        <Link to="/register" className="butn">
          Бүртгүүлэх
        </Link>
        <Link to="/login" className="butn">
          Нэвтрэх
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
