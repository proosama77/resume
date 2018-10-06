import React , {Component} from 'react'

export default class About extends Component{

    render(){
      const {about}=this.props;
      const social=this.props.about.social;
      const urlFacebook=social[0].url;
    
        return (
            <section className="resume-section p-3 p-lg-5 d-flex d-column animated jello" id="about"
           >
            <div className="my-auto">
              <h1 className="mb-0">{about.name}
                <span className="text-primary">Developer</span>
              </h1>
              <div className="subheading mb-5">{about.address}
                <a href={"mailto:"+about.email}>{about.email}</a>
              </div>
              <p className="lead mb-5">I am experienced in {about.bio}</p>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
                {/* <a href="#">
                  <i className="fab fa-twitter"></i>
                </a> */}
                <a href={urlFacebook}>
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </section>
          
        )
    
    }
}