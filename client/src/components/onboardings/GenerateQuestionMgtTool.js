import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

//import axios from 'axios';
const GenerateQuestionMgtTool = (props) => {

  // const onChangeSelectRadioMgtTool = (i,e) => {
  //   //props.generateQuestion(e.target.value)
  //   console.log('selected radio values is', e.target.value);
  //   props.onChangescoreOfMgtTool(i, e.target.value);
  // };

const onChangeSelectRadioMgtTool = (i,e) => {
    //props.generateQuestion(e.target.value)
    console.log('selected radio values is', e.target.value);
    props.onChangescoreOfMgtTool(i, e.target.value);
  };


    //console.log('props of Radio Selection', props.onChangescoreOfMgtTool)
    return (
    props.collectionList.map((val, idx) => {
     //const collectionName =`collectionName-${idx}`;
     const mgtTool=`mgtTool-${idx}`;
      return(
          <Fragment>
            <tr key={val.index} style={{margin: 5, width:720, height: 10, border:0}}>
              <td>
                    <td><span className="questionLabel">How long are you familiar with {val.collectionName}?</span></td>

                      <label className="containerRadio">No experience
                          <input name={mgtTool} type="radio" checked={props.scoreOfMgtTool[idx] ==="0<score<=3"} 
                          onChange={e=>onChangeSelectRadioMgtTool(idx,e)} value="0<score<=3"/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio">Abit experience
                          <input name={mgtTool} type="radio" checked={props.scoreOfMgtTool[idx] === "3<score<=5"} 
                          onChange={e=>onChangeSelectRadioMgtTool(idx,e)} value="3<score<=5"/>
                          <span className="checkmarkRadio"></span>
                      </label>
                      <label className="containerRadio">Alot of experience
                          <input name={mgtTool} type="radio" checked={props.scoreOfMgtTool[idx] === "5<score<=8"} 
                          onChange={e=>onChangeSelectRadioMgtTool(idx,e)} value="5<score<=8"/>
                          <span className="checkmarkRadio"></span>
                      </label>

                  </td> 
            </tr>
        </Fragment>
      )}
))};

export default GenerateQuestionMgtTool