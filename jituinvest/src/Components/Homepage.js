import { Link } from 'react-router-dom';
import water from '../water.png'
import boat from '../boat.png'
import cloud from '../cloud.png'
import DownloadLink from 'react-download-link';
import Logo from './Logo';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';



function Homepage() {
  return (
    <div className="hero">
      
      <ul className="menu">
        <Link to="Homepage">
          <li>Home</li>
        </Link>
        <Link to="Wsb">
          <li>Search</li>
        </Link>
        <Link to="Basics">
          <li>Basics</li>
        </Link>
      </ul>
      <div className="content">
        <h1 className="slide-left">Welcome to <br></br>Jitu Investments </h1>
        <p className="slide-left">Just an exhibit of my coding skills and data analsyis skills. Definitely not financial advice</p>
        <div className="links slide-left">
          <Link to="WSB" className="btn">Search</Link>
          <a href="https://docs.google.com/document/d/1p-9h4nrA-kSExXfC1Js7isTgGTzbZ9BzrJyE8lJE5PM/export?format=pdf" className="btn">Resume</a>
        </div>
        <img src={cloud} className="cloud" ></img>
        <div className="ocean">
        <img src={water} className="water"></img>
        <div className="boat">
          <img src={boat}></img>
        </div>
        
      </div>
      </div>
      <Logo/>
      
    </div>
  );
}

export default Homepage;
