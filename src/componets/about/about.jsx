import './about.css';
import me from "./images/PIC.jpg"
import certificate from "./images/cer.png"
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

const About = () =>
    <div id="about">
        <img src={me} alt="picture of me" />
        <div id='me'>
        <h1>About me</h1>
        <h2> 
        I'm Justin Delgado, a passionate full-stack developer who has honed my skills through rigorous training at UCF's esteemed bootcamp.
         With a deep love for technology, my ultimate passion lies in bringing ideas to life through web development. <br />
    During my time at UCF's bootcamp, I immersed myself in learning the intricacies of both front-end and back-end development,
    becoming proficient in various technologies and frameworks. <br />
        </h2>
        </div>

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
            <img src={skills10} alt='oop image' />
        </div>
        <div id="bottom">
        <h1>Certificate</h1>
        <img src={certificate} alt="picture of me" />
        </div>
    </div>

export default About;