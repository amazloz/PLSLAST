import { Link } from "react-router-dom";
import "./AfterNavbar.css";

const Navbar = () => {
  return (
    <div className="navcon">
      <Link to="/" className="title">
        Talkis
      </Link>
    </div>
  );
};

export default Navbar;
