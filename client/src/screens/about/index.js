import "./index.scss";
import { useAboutQuery, useAboutMutation } from "../../services/useAbout";
import { useEffect, useState } from "react";

const About = () => {
  const { data, isLoading, error } = useAboutQuery();
  const { mutate, data: nextRow } = useAboutMutation();
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleScroll = () => {
    const totalHeight = document.documentElement.offsetHeight;
    const scrollHeight =
      window.innerHeight + document.documentElement.scrollTop;
    if (
      totalHeight - 160 < scrollHeight &&
      scrollHeight < totalHeight - 140 &&
      data.data.rowsCount > values.length &&
      !loading
    ) {
      setLoading(true);
      mutate({ row: values.length + 1 });
    }
    return;
  };

  useEffect(() => {
    if (data) {
      setValues([
        {
          imgMobil: data?.data?.values[2],
          imgDesktop: data?.data?.values[3],
          title: data?.data?.values[4],
          desc: data?.data?.values[5],
        },
      ]);
    }
  }, [data]);

  useEffect(() => {
    if (nextRow && loading) {
      const copyValues = [...values];
      copyValues.push({
        imgMobil: nextRow.data[2],
        imgDesktop: nextRow.data[3],
        title: nextRow.data[4],
        desc: nextRow.data[5],
      });
      setValues(copyValues);
      setLoading(false);
    }
  }, [nextRow]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Server Error Please contact Provider</div>;
  }
  return (
    <>
      {data && (
        <div className="about-container">
          <div className="about-title">{data?.data?.values[0]}</div>
          <div className="about-text">
            {data?.data?.values[1].replaceAll("<br/>", "\n")}
          </div>
          {values.map((val, i) => {
            return (
              <div key={i} className="about-img-wrap">
                <img
                  className="about-img-mobile"
                  src={val.imgMobil}
                  alt="logo"
                />
                <img
                  className="about-img-desktop"
                  src={val.imgDesktop}
                  alt="logo"
                />
                <div className="info-wrap">
                  <div className="info-title">{val.title}</div>
                  <div className="info-desc">{val.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default About;
