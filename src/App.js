import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import About from './components/About';
import Experience from './components/Experience';
import {HashRouter as Router , Route, Switch} from 'react-router-dom';
import Education  from './components/Education';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Awards from './components/Awards';
import uuid from 'uuid';

class App extends Component {
  
  render() {
      const person = {

          about: { avatar: 'https://gndx.co/wp-content/uploads/2017/05/oscar_barajas.jpg',
            name: 'Osama',
            email:'proosama77@gmail.com',
            phone:'5124647',
            profession: 'Web Developer',
            bio: '❤ Web Developer - Java, Javascript, Better known as The Osama Developer.',
            address: 'Gaza Strip, Palestine.',
            social: [

              {name: 'facebook', url: 'https://www.facebook.com/devfuture'},
              {name: 'github', url: 'https://github.com/proosama77'},
              {name: 'linkedin', url: 'https://www.linkedin.com/in/oscarbarajas/'}
            ]
          },
          
            experience: [
               
              {id:uuid(),jobTitle: 'IT Developer,', company: 'Terasek', startDate: 'Jan 2016', endDate: 'August 2018', jobDescription: 'Mobile Application, web sites, web applications, web sites and Desktop programms .'},
              {id:uuid(),jobTitle: 'Freelancer', company: 'Gaza Strip', startDate: 'September 2011', endDate: 'February 2013', jobDescription: 'desktop programs , design websites'},
              {id:uuid(),jobTitle: 'IT Teacher', company: 'Government', startDate: '2008', endDate: '2009', jobDescription: 'desktop programs , design websites'}
            ],
            education: [
              {id:uuid(),degree: 'Master in Computer and Information Engineering', institution: 'IIUM', startDate: 'August 2014', endDate: '2017', description: 'ENHANCEMENT OF SERVICE-ORIENTED ARCHITECTURE MIDDLEWARE FOR MOBILE INTERNET OF THINGS.'},
              {id:uuid(),degree: 'High Diploma in Education', institution: 'Al Quds University', startDate: '2007', endDate: '2008', description: 'Educational Qualification High Diploma.'},
              {id:uuid(),degree: 'Bachelor In Technology and Applied Science', institution: 'Al Quds University', startDate: '2003', endDate: '2007', description: 'Computer and Information Systems.'}
            ],
            // certificate: [
            //   {name: 'FrontEnd Developer', institution: 'Platzi', date: 'Jan 2015', description: 'Aenean commodo ligula eget dolor. Aenean massa.' },
            //   {name: 'Backend Developer', institution: 'Platzi', date: 'Jan 2016', description: 'Aenean commodo ligula eget dolor. Aenean massa.' }
            // ],
            skills: [
              {id:uuid(),name: 'HTML5,CSS , Bootsrap', percentage: '85%'},
              {id:uuid(),name: 'Java , Spring Boot , JavaFX , AWS', percentage: '80%'},
              {id:uuid(),name: 'JavaScript, Ajax,JQuery, react , Angular', percentage: '70%'},
              {id:uuid(),name: 'Python,PHP , WordPress', percentage: '50%'},
              {id:uuid(),name: 'Adobe photoshop, Adobe Dreamweaver', percentage: '50%'}
            ],
            interests:[
              {paragraph:"As Software Developer , With a Bachelor’s degree in Computer Science, Master’s degree in Computer and Information Engineering , and hands-on experience using Java , Javascript  languages to create and implement software applications, I am confident I will be an asset to any software organization."},
              {paragraph:"I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success of different organizations."}
            ]
          };
    return (
      <Router>
         <div className="App">
        <NavBar></NavBar>
        <Switch>
        
         <Route exact path="/about" 
         render={props=><About {...props} 
         about={person.about}>
         </About>}></Route>
        
         <Route exact path="/" 
         render={props=><About {...props} 
         about={person.about}>
         </About>}></Route>
     
       <Route exact path="/experience" 
        render={props=><Experience {...props} 
         experience={person.experience}>
         </Experience>}></Route>
      
       <Route exact path="/education" 
       render={props=><Education {...props} 
       education={person.education}>
       </Education>}
       ></Route>
      
       <Route exact path="/skills" 
        render={props=><Skills {...props} 
        skills={person.skills}>
        </Skills>}
       ></Route>

       <Route exact path="/interests" 
        render={props=><Interests {...props} 
        interests={person.interests}></Interests>}
       ></Route>

       {/* <Route exact path="/awards" component={Awards}></Route> */}
        </Switch>
      </div>
      </Router>
     
    );
  }
}

export default App;
