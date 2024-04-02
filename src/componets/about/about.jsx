import React from 'react';
import './about.css';
import me from "./images/Juju.jpg";
import certificate from "./images/cer.png";
import skills1 from './images/react.png';
import skills2 from './images/html.png';
import skills3 from './images/csss.png';
import skills4 from './images/jss.png';
import skills5 from './images/node.png';
import skills6 from './images/sql.png';
import skills7 from './images/moo.png';
import skills8 from './images/msql.png';
import skills9 from './images/express.png';
import skills10 from './images/op.png';
import Work from '../work/work';
import pup from '../work/images/pups.jpg';
import herd from './images/icons8-github-100.png';
import sup from './images/icons8-linked-in-128.png';
import skills11 from './images/icons8-postman-api-256.png';

const About = () => (
  
  <div id="about">
    <img className='pictureTop' src={me} alt="picture of me"  />
    <div id='me'>
      <h2 className='intro'>Bio</h2>
      <h2 className='bioPart'>
        I'm Justin Delgado, a passionate full-stack developer <br /> who has honed my skills through rigorous training at UCF's esteemed bootcamp. <br />
        With a deep love for technology, my ultimate passion lies in bringing ideas to life through web development.
      </h2>
      <section id='herd'>
        <img src={herd} alt="" onClick={() => {
      window.location.href = "https://github.com/tydelgado98";
    }}  />

        <img src={sup} alt=""  onClick={() => {
      window.location.href = "https://www.linkedin.com/in/justin-delgado-90935b264/";
        }}/>
      </section>
    </div>
    <div id="bg">
      <div id="skills">
        <img src={skills1} alt='react image' />
        <img src={skills2} alt='html image' />
        <img src={skills3} alt='css image' />
        <img src={skills4} alt='jss image' />
        <img src={skills5} alt='node image' />
        <img src={skills6} alt='sql image' />
        <img src={skills7} alt='mongoDb image' />
        <img src={skills8} alt='mysql image' />
        <img src={skills9} alt='express image' />
        <img src={skills11} alt='postman image' />
      </div>
    </div>
    <div id="bottom">
      <h1>Full-Stack Web Development Certificate</h1>
      <img src={certificate} alt="picture of me" />
    </div>
  {/* <div id='works'>
    <div className='cards'></div>
    <img src={pup} alt="pawpath" />
    
  </div> */}
  {/* <Work /> */}
  </div>
   
);

export default About;
