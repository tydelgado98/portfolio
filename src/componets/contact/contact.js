import './contact.css';
import git from './images/Git.png';

const Contact = () => 
    <div id="contact">
        <h1>Contact</h1>
        <div id="links">
        <h1>Email</h1>
       <p>
         <a href="mailto: delgadojustin100@yahoo.com">Delgadojustin100@yahoo.com</a>
           </p>
         
           <h1>LinkedIn</h1>
           <img src={git} alt="git" />

           </div>

    </div>
    

export default Contact;