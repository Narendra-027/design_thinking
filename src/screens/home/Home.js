import './Home.css';
import Try from '../sidebar/Sidebar'
import React from 'react';

function Home() {
  return (
    <body>
      
      <Try pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    
      <div className='head'>
        <a>Login</a>
        <a>Sign up</a>
      </div>
      <div>
        <img src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"></img>
      </div>
      <div>
        <p>This is an application used for ideation phase of an project, which is used by thinkers to ideate over an idea and to innovate new thoughts.</p>
        <p>Disclaimer -- Site under progress</p>
        <p>Made with love -- Admins</p>
      </div>
    </body>
  );
}

export default Home;
