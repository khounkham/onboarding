import React, {Component} from 'react';
import Onboarding from '../onboardings/Onboarding';
import OnboardingOptions from '../onboardingSchemes/SchemeOptions';

export class OnboardingForm extends Component {
  state = {step:1,};
//Go back to prev step
prevStep =() => {
  const {step}= this.state;
  this.setState({
    step: step-1
  });
};
// Proceed to next step
nextStep =() => {
  const {step} = this.state;
  this.setState({
    step:step+1
  });
}
//Handle fields change
handleChange =input => e =>{
  this.setState({[e.target.name]:e.target.value});
}

render(){
  const { step } = this.state;
  const values ={};
  switch (step) {
      case 1: 
      return (
        <Onboarding 
          nextStep={this.nextStep}
        />
      )
      case 2: 
        return (
          <div><h1> Onboarding Schemes Selection </h1>
          <OnboardingOptions
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
          </div>
        )
      case 3: 
        return <h1> The final checklist of activities and goals and confirm</h1>
      case 4: 
        return <h1> Success</h1>
      }
    }
}
export default OnboardingForm
