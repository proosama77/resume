import React , {Component} from 'react'

export default class Experience extends Component{
    render(){
      const {experience} =this.props;
      console.log(experience);
        return (
     <section className="resume-section p-3 p-lg-5 d-flex flex-column animated jello" id="experience">
     <div className="my-auto">
    <h2 className="mb-5">Experience</h2>
  
  {experience.map(e=><div key={e.id} className="resume-item d-flex flex-column flex-md-row mb-5">
    <div className="resume-content mr-auto" >
      <h3 className="mb-0">{e.jobTitle}</h3>
      <div className="subheading mb-3">{e.company}</div>
      <p>{e.jobDescription}.</p>
    </div>
    <div className="resume-date text-md-right">
      <span className="text-primary">{e.startDate} - {e.endDate}</span>
    </div>
  </div>
    )}
  




</div>

</section>

        )
    }
}



