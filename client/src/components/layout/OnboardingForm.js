import React, {Component} from 'react';
import Onboarding from '../onboardings/Onboarding';
import Onboarders from '../onboardings/Onboarders';

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
          handleChange = {this.handleChange}
        />
      )
      case 2: 
        return (
          <Onboarders 
            nextStep={this.nextStep}
            handleChange = {this.handleChange}
            prevStep={this.prevStep}
          />
        )
      case 3: 
        return <h1> Onboarding Schemes Selection </h1>
      case 4: 
        return <h1> The final checklist of activities and goals and confirm</h1>
      case 5: 
        return <h1> Success</h1>
      }
    }
}
export default OnboardingForm
