import React , {Component} from 'react'

export default class Interests extends Component{
    render(){
      const {interests}=this.props
   
        return (
        
<section className="resume-section p-3 p-lg-5 d-flex flex-column animated jello" id="interests">
<div className="my-auto">
  <h2 className="mb-5">Interests</h2>
  {interests.map(interest=>
    <p>{interest.paragraph}</p>
  )}
 </div>
</section>
        )}}