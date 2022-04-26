//import './App.css';
import React from 'react';

import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';



function  Logo() {
  return (
    
    <div className="logo">
      <i>
                    <FaLinkedin />
                  </i>
                  <i>
                    <FaGithubSquare />
                  </i>
    </div>
  );
}

export default Logo;
