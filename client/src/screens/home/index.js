import "./index.scss";
import { useHomeQuery } from "../../services/useHomeQuery";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data, error, isLoading } = useHomeQuery();
  const navigate = useNavigate();

  // console.log("Home", data, error, isLoading);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Server Error Please contact Provider</div>;
  }
  return (
    <>
      {data && (
        <div className="home-container">
          <div className="home-title">{data.data[0]}</div>
          <div className="home-text">
            {data.data[1].replaceAll("<br/>", "\n")}
          </div>
          <div className="home-img-wrap">
            <img className="home-img-mobile" src={data.data[2]} alt="logo" />
            <img className="home-img-desktop" src={data.data[3]} alt="logo" />
            <div className="home-btn">
              <Button
                onClick={() => navigate("/portfolio")}
                type="main"
                label="Check out my Portfolio"
              />
              <Button
                onClick={() => navigate("/about")}
                type="main"
                label="Read more about me"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
