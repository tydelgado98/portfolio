import './about.css';
import me from "./images/PIC.jpg"
import skills1 from './images/react.png';

const About = () =>
    <div id="about">
        <img src={me} alt="picture of me" />
        <h1>About me</h1>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi rerum similique magni atque, voluptas maxime aperiam libero, est consequatur at dicta, odio cumque dolore quisquam.</p>
        <p>Ipsa explicabo commodi, eveniet voluptatibus minus ratione sequi. Quisquam quos labore harum. Debitis, molestiae nemo amet laudantium perferendis dicta culpa libero voluptates vel non voluptate.</p>

        <div id="skills">
            <img src={skills1} alt='skills' />
        </div>
    </div>

export default About;