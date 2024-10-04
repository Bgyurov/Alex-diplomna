import { useContext } from "react";
import heroPhoto from "../../assets/logo.png";
import { HeroItem } from "./HeroItem/HeroItem.jsx";
import "./welcome.css";
import AdsContext from "../../contexts/AdsContext.jsx";

export const Hero = ({}) => {
  let { heroAds } = useContext(AdsContext);

  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <div className="welcome-text">
          <h2>Rev Up Your Dreams at</h2>
          <h3>Mobile.UKTC</h3>
        </div>
        <img src={heroPhoto} alt="hero" />
      </div>
      <br />

      <div id="home-page">
        <h1>Latest Ad</h1>
        {heroAds.map((x) => (
          <HeroItem key={x._id} {...x} />
        ))}
        {heroAds.length === 0 && <p className="no-articles">No ads yet</p>}
      </div>
    </section>
  );
};
