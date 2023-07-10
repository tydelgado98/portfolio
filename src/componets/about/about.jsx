import './about.css';
import me from "./images/PIC.jpg"
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
     I'm Justin Delgado, a passionate full-stack developer <br /> who has honed my skills through the rigorous training I received at UCF's esteemed bootcamp.<br /> 
        I've always had a deep love for technology, and being able to bring ideas to life through web development <br /> is my ultimate passion.
    During my time at UCF's bootcamp, I immersed myself in learning everything I could about both front-end and back-end development. <br />
     I've become well-versed in languages like 
    HTML, CSS, JavaScript, and Python, <br /> and I've also gained expertise in frameworks and libraries such as React, Angular, and Django. <br /> 
        </h2>
        </div>

        <div id="skills">
            <img src={skills1} alt='skills' />
            <img src={skills2} alt='skills' />
            <img src={skills3} alt='skills' />
            <img src={skills4} alt='skills' />
            <img src={skills5} alt='skills' />
            <img src={skills6} alt='skills' />
            <img src={skills7} alt='skills' />
            <img src={skills8} alt='skills' />
            <img src={skills9} alt='skills' />
            <img src={skills10} alt='skills' />
        </div>
        <div id="bottom">
        
        <h1>Skills</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi rerum similique magni atque, voluptas maxime aperiam libero, </p>
        <p>Ipsa explicabo commodi, eveniet voluptatibus minus ratione sequi. Quisquam quos labore harum. Debitis, molestiae nemo amet laudantium perferendis dicta culpa libero voluptates vel non voluptate.</p>
        <p>Quisquam quos labore harum. Debitis, molestiae nemo amet laudantium perferendis dicta culpa libero voluptates vel non voluptate.</p>
        </div>
    </div>

export default About;