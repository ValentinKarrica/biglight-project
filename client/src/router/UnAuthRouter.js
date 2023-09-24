import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../screens/home";
import Portfolio from "../screens/portfolio";
import About from "../screens/about";
import Layout from "../layout";

const UnAuthRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} index element={<Home />} />
        <Route path={"/portfolio"} index element={<Portfolio />} />
        <Route path={"/about"} index element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

export default UnAuthRouter;
