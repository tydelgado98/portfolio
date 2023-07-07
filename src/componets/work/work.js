import './work.css';
import apps from './work.json';

const Work = () => {
  const handleImageClick = (websiteUrl) => {
    window.location.href = websiteUrl;
  };

  return (
    <div id="work">
      <h1>Recent Projects</h1>

      <div id="appsDiv">
        {apps.map(({ key, appName, image, info, websiteUrl }) => (
          <div className="card" key={key}>
            <img
              src={image}
              alt="app pic"
              onClick={() => handleImageClick(websiteUrl)}
            />

            <div>
              <h2>{appName}</h2>
              <h7>{info}</h7>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
