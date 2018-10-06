import React , {Component} from 'react'

export default class Education extends Component{
    render(){
      const {education}=this.props;
      
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column animated jello" id="education">
            <div className="my-auto">
              <h2 className="mb-5">Education</h2>
              
             { education.map(edu=><div key={edu.id} className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">{edu.institution}</h3>
                  <div className="subheading mb-3">{edu.degree}</div>
                  <div>{edu.description}</div>
                  {/* <p>GPA: 3.23</p> */}
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{edu.startDate} - {edu.endDate}</span>
                </div>
              </div>
              )};
            </div>
          </section>
    
        )
    }
}