import './contact.css';
import git from './images/Git.png';
import linked from './images/linked.png';


const Contact = () => 
    <div id="contact">
        <div id="links">
        <h1>Email</h1>
       <p>
         <a href="mailto: delgadojustin100@yahoo.com">Delgadojustin100@yahoo.com</a>
           </p>
           </div>
           <div id="click">
           <img src={git} alt="git" />
           <img src={linked} alt="linked" />
           </div>
    </div>
    

export default Contact;