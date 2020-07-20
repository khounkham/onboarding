import React, {Fragment} from 'react';
const SchemeOption = () => {
      return(
          <Fragment>
            <tr style={{margin: 5, width:720, height: 10, border:0}}>
              <td>
                    <td><span className="questionLabel">Please select an onboarding scheme</span></td>
                      <label className="containerRadio">Templates
                          <input name="template" type="radio" checked={true}/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio">Previous onboarders
                          <input name="preonboarders" type="radio" checked/>
                          <span className="checkmarkRadio"></span>
                      </label>
                      <label className="containerRadio">Manual
                          <input name="manual" type="radio" checked/>
                          <span className="checkmarkRadio"></span>
                      </label>

                  </td> 
            </tr>
        </Fragment>
      )}
export default SchemeOption