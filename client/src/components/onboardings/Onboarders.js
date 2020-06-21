import React, {Fragment, Component} from 'react';
class Onboarders extends Component{ 
continue = e=> {
    e.preventDefault();
    this.props.nextStep();
      }
back = e => {
        e.preventDefault();
        this.props.prevStep();
          }
    render() {
        const listTech = ['Asana', 'Trello', 'Slack'];
        return (
            <Fragment>
            <form className="form-group">
            <div><p className="lead"><i className="fas fa-user"></i> 
            Onboarder's characteristics</p></div>

            {
            listTech.map(tech =>
              (<form>
              <div>
                  How are you familiar with {tech}
              </div>
              <div>
                <input type="radio" id={tech + "_notAtall"} value="0<score<3" name={tech}/>
                <label>Not at all</label><br/>
                <input type="radio" id={tech + "_abit"} value="3<=score<5" name={tech}/>
                <label>Abit</label><br/>
                <input type="radio" id={tech + "_verywell"} value="5<=score<8" name={tech}/>
                <label>Very well</label><br/>
              </div>
              </form>
              )
              )
            }
          


            <div>
            <button type="submit" className="btn btn-primary text-center" onClick={this.continue}> Continue </button>
            </div>
            <br/>
            <div>
            <button type="submit" className="btn btn-primary text-center" onClick={this.back} > Back </button>
            </div>
            </form>
           </Fragment>
        );
    }
}

export default Onboarders