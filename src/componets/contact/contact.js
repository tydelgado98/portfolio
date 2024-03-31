import './contact.css';
import git from '../about/images/icons8-github-100.png';
import linked from '../about/images/icons8-linked-in-128.png';

const Contact = () => (
  <div id="contact">
    <div id="links">
      <h1>Email</h1>
      <p>
        <a href="mailto:delgadojustin100@yahoo.com">Delgadojustin100@yahoo.com</a>
      </p>
    </div>
    <div id="click">
      <a href="https://github.com/tydelgado98">
        <img src={git} alt="git" />
        </a>
        <a href="https://www.linkedin.com/in/justin-delgado-9b0a1a1b0/">
        <img src={linked} alt="linked" />
      </a>
    </div>
  </div>
);

export default Contact;
