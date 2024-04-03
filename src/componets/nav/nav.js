import './nav.css';

const Nav = props => 
    <nav id="nav">
        <div id="first">
        <h1>Justin Delgado</h1>
        <h4>Full Stack Web Developer</h4>
        </div>
        <div>
            <button onClick={() => props.setPage('about')}>About Me</button>
            <button onClick={() => props.setPage('work')} >Projects</button>
            <button onClick={() => props.setPage('contact')}>Contact</button>
        </div>
    </nav>

export default Nav;