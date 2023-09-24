import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import "./index.scss";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = window.location.pathname;

  return (
    <div className="layout-main-container">
      <div className="layout-header">
        <Button
          selected={location === "/"}
          onClick={() => navigate("/")}
          type="secondary"
          label="Home"
        />
        <Button
          selected={location === "/portfolio"}
          onClick={() => navigate("/portfolio")}
          type="secondary"
          label="Portfolio"
        />
        <Button
          selected={location === "/about"}
          onClick={() => navigate("/about")}
          type="secondary"
          label="About"
        />
      </div>
      <div className="layout-main">{children}</div>
      <div className="layout-footer">2023 My Portfolio</div>
    </div>
  );
};

export default Layout;
