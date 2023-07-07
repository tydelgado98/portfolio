import './about.css';
import me from "./images/PIC.jpg"
import skills1 from './images/react.png';

const About = () =>
    <div id="about">
        <img src={me} alt="picture of me" />
        <h1>About me</h1>
    <h2> 
     I'm Justin Delgado, a passionate full-stack developer who has honed my skills through the rigorous training I received at UCF's esteemed bootcamp. 
        I've always had a deep love for technology, and being able to bring ideas to life through web development is my ultimate passion.
    During my time at UCF's bootcamp, I immersed myself in learning everything I could about both front-end and back-end development.
     I've become well-versed in languages like 
    HTML, CSS, JavaScript, and Python, and I've also gained expertise in frameworks and libraries such as React, Angular, and Django. 
    This comprehensive knowledge allows me to tackle complex projects with confidence and deliver exceptional results. 
    My portfolio is a testament to my creativity and 
    attention to detail, showcasing a range of web applications and projects that combine stunning design with robust functionality. 
    I'm always eager to stay up-to-date with the 
    latest industry trends, ensuring that my work remains at the forefront of 
    innovation in web development. With my dedication, skills, and unwavering commitment to excellence, 
    I'm ready to make a significant impact in the world of full-stack development.
        </h2>
        <div id="skills">
            <img src={skills1} alt='skills' />
            <img src={skills1} alt='skills' />
            <img src={skills1} alt='skills' />
            <img src={skills1} alt='skills' />
            <img src={skills1} alt='skills' />
            <img src={skills1} alt='skills' />
            <img src={skills1} alt='skills' />
            <img src={skills1} alt='skills' />
            <img src={skills1} alt='skills' />
            <img src={skills1} alt='skills' />
            <img src={skills1} alt='skills' />
            <img src={skills1} alt='skills' /> 
        </div>
        <div id="bottom">
        <br/> <br/> <br /><br/>
        <br /><br /> <br /><br/>
        <br/><br/><br/>
        <h1>Skills</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi rerum similique magni atque, voluptas maxime aperiam libero, </p>
        <p>Ipsa explicabo commodi, eveniet voluptatibus minus ratione sequi. Quisquam quos labore harum. Debitis, molestiae nemo amet laudantium perferendis dicta culpa libero voluptates vel non voluptate.</p>
        <p>Quisquam quos labore harum. Debitis, molestiae nemo amet laudantium perferendis dicta culpa libero voluptates vel non voluptate.</p>
        </div>
        {/* <div id="skills">
            <img src={skills1} alt='skills' />
        </div> */}
    </div>

export default About;