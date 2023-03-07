import './nav.css';

const Nav = props => 
    <nav id="nav">
        <h1>Justin Delgado</h1>

        <div>
            <button onClick={() => props.setPage('about')}>About Me</button>
            <button onClick={() => props.setPage('work')}>Applications</button>
            <button onClick={() => props.setPage('contact')}>Contact</button>
        </div>
    </nav>

export default Nav;