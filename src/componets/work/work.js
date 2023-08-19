import React from 'react';
import './work.css';
import apps from './work.json';

import pupsImage from './images/pups.jpg';
import terminatorImage from './images/IMG_2662.PNG';
import garageJunkiesImage from './images/hutt.png';
import quizImage from './images/quiz.png';
import weatherTrackerImage from './images/rain.png';

const appImages = {
  'ThePawPath': pupsImage,
  'Typo Terminator': terminatorImage,
  'Garage Junkies': garageJunkiesImage,
  'ScriptSprint': quizImage,
  'Weather Tracker': weatherTrackerImage
};

const Work = () => {
  const handleImageClick = (websiteUrl) => {
    window.location.href = websiteUrl;
  };

  return (
    <div id="work">
      <h1>Recent Projects</h1>

      <div id="appsDiv">
        {apps.map(({ key, appName, info, websiteUrl }) => (
          <div className="card" key={key}>
            <img
              src={appImages[appName]}
              alt="Picture of the app"
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
