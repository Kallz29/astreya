import { astreyaData } from "../data/astreyaData";
import coverImage from "../assets/Cover.png";

const HomePage = () => {
  return (
    <div className="container">
      <div className="section home-hero">
        <img
          src={coverImage}
          alt="Astreya Campaign Cover"
          className="cover-image"
        />
        <h1>Astreya World</h1>
        <p className="subtitle">{astreyaData.home.tagline}</p>
        <div className="intro-content">
          {astreyaData.home.intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
