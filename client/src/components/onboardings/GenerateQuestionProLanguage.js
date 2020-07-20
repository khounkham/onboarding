import React, {Fragment} from 'react';
//import axios from 'axios';
const GenerateQuestionProLanguage = (props) => {

  const onChangeSelectRadioProLanguage = (i,e) => {
    console.log('selected programingLanguage value', e.target.value);
    props.onChangescoreOfProLanguage(i, e.target.value);
  };
    //console.log('props of Radio Selection', props.onChangescoreOfMgtTool)
    return (
    props.programingList.map((val, idx) => {
     //const collectionName =`collectionName-${idx}`;
     const proLanguage=`proLanguage-${idx}`;
      return(
          <Fragment>
            <tr key={val.index} style={{margin: 5, width:720, height: 10, border:0}}>
              <td>
                    <td><span className="questionLabel">How long are you familiar with {val.programingName}?</span></td>

                      <label className="containerRadio">No experience
                          <input name={proLanguage} type="radio" checked={props.scoreOfProLanguage[idx] === "0<score<=3"} 
                          onChange={e=>onChangeSelectRadioProLanguage(idx,e)} value="0<score<=3"/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio">Abit experience
                          <input name={proLanguage} type="radio" checked={props.scoreOfProLanguage[idx] === "3<score<=5"} 
                          onChange={e=>onChangeSelectRadioProLanguage(idx,e)} value="3<score<=5"/>
                          <span className="checkmarkRadio"></span>
                      </label>
                      <label className="containerRadio">Alot of experience
                          <input name={proLanguage} type="radio" checked={props.scoreOfProLanguage[idx] === "5<score<=8"} 
                          onChange={e=>onChangeSelectRadioProLanguage(idx,e)} value="5<score<=8"/>
                          <span className="checkmarkRadio"></span>
                      </label>

                  </td> 
            </tr>
        </Fragment>
      )}
))};
export default GenerateQuestionProLanguage