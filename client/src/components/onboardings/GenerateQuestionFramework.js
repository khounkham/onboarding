import React, {Fragment} from 'react';
//import axios from 'axios';
const GenerateQuestionFramework = (props) => {

  const onChangeSelectRadioFramework = (i,e) => {
    console.log('selected method value', e.target.value);
    props.onChangescoreOfFramework(i, e.target.value);
  };
    //console.log('props of Radio Selection', props.onChangescoreOfMgtTool)
    return (
    props.frameworkList.map((val, idx) => {
     //const collectionName =`collectionName-${idx}`;
     const frameWork=`frameWork-${idx}`;
      return(
          <Fragment>
            <tr key={val.index} style={{margin: 5, width:720, height: 10, border:0}}>
              <td>
                    <td><span className="questionLabel">How long are you familiar with {val.frameworkName}?</span></td>
                      <label className="containerRadio">No experience
                          <input name={frameWork} type="radio" checked={props.scoreOfFramework[idx] === "0<score<=3"} 
                          onChange={e=>onChangeSelectRadioFramework(idx,e)} value="0<score<=3"/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio">Abit experience
                          <input name={frameWork} type="radio" checked={props.scoreOfFramework[idx] === "3<score<=5"} 
                          onChange={e=>onChangeSelectRadioFramework(idx,e)} value="3<score<=5"/>
                          <span className="checkmarkRadio"></span>
                      </label>
                      <label className="containerRadio">Alot of experience
                          <input name={frameWork} type="radio" checked={props.scoreOfFramework[idx] === "5<score<=8"} 
                          onChange={e=>onChangeSelectRadioFramework(idx,e)} value="5<score<=8"/>
                          <span className="checkmarkRadio"></span>
                      </label>

                  </td> 
            </tr>
        </Fragment>
      )}
))};   
export default GenerateQuestionFramework