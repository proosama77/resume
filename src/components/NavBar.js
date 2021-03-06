import React , {Component} from 'react'
import { Link } from 'react-router-dom';

export default class NavBar extends Component{
  
    render(){
    
     return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Osama</span>
        <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/osama.jpg" alt=""/>
        </span>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

         <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
         <ul className="navbar-nav"> 
         
           <li className="nav-item">
           <Link className="nav-link js-scroll-trigger" to="/about">About</Link>
          </li>
          
          <li className="nav-item">
           <Link className="nav-link js-scroll-trigger" to="/experience">Experience</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/education">Education</Link>
          </li> 
    
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/skills">Skills</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/interests">Interests</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/awards">Awards</Link>
          </li>  */}
         </ul>
       </div> 
      </nav>
       
        )
    }
}