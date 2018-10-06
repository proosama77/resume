import React,{Component} from 'react'

export default class Skills extends Component{
    render(){
      const {skills}=this.props;
        return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column animated jello" id="skills">
<div className="my-auto">
  <h2 className="mb-5">Skills</h2>   
    
  <div className="subheading mb-3">Programming Languages &amp; Tools</div>
  <ul className="fa-ul mb-0">
  {skills.map(skill=> <div key={skill.id}>
    <li>
      <i className="fa-li fa fa-check"></i>
       {skill.name} </li>
       <div className="progress">
     <div className="progress-bar progress-bar-striped" style={{width:skill.percentage}}>{skill.percentage}</div>
    </div>

  </div>

    
  )}
    
    {/* <div className="progress">
     <div className="progress-bar progress-bar-striped" style={{width:'30%'}}>30%</div>
    </div>
      <i className="fa-li fa fa-check"></i>
      Cross Functional Teams</li>
      <div className="progress">
     <div className="progress-bar progress-bar-striped" style={{width:'30%'}}>30%</div>
      </div>

    <li>
      <i className="fa-li fa fa-check"></i>
      Agile Development &amp; Scrum</li>
      <div className="progress">
     <div className="progress-bar progress-bar-striped" style={{width:'30%'}}>30%</div>
    </div> */}
  </ul>
</div>
</section>
        )}

}


