import React, {Fragment} from 'react';
//import axios from 'axios';
const GenerateQuestionDevpTech = (props) => {

  const onChangeSelectRadioDevpTech = (i,e) => {
    console.log('selected development tech value', e.target.value);
    props.onChangescoreOfDevpTech(i, e.target.value);
  };
    //console.log('props of Radio Selection', props.onChangescoreOfMgtTool)
    return (
    props.developmenttechList.map((val, idx) => {
     //const collectionName =`collectionName-${idx}`;
     //const mgtTool=`mgtTool-${idx}`;
      return(
          <Fragment>
            <tr key={val.index} style={{margin: 5, width:720, height: 10, border:0}}>
              <td>
                    <td><span className="questionLabel">How long are you familiar with {val.developmenttechName}?</span></td>

                      <label className="containerRadio">No experience
                          <input name={val.developmenttechName} type="radio" checked={props.scoreOfDevpTech[idx] === "0<score<=3"} 
                          onChange={e=>onChangeSelectRadioDevpTech(idx,e)} value="0<score<=3"/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio">Abit experience
                          <input name={val.developmenttechName} type="radio" checked={props.scoreOfDevpTech[idx] === "3<score<=5"} 
                          onChange={e=>onChangeSelectRadioDevpTech(idx,e)} value="3<score<=5"/>
                          <span className="checkmarkRadio"></span>
                      </label>
                      <label className="containerRadio">Alot of experience
                          <input name={val.developmenttechName} type="radio" checked={props.scoreOfDevpTech[idx] === "5<score<=8"} 
                          onChange={e=>onChangeSelectRadioDevpTech(idx,e)} value="5<score<=8"/>
                          <span className="checkmarkRadio"></span>
                      </label>

                  </td> 
            </tr>
        </Fragment>
      )}
))};
    
export default GenerateQuestionDevpTech