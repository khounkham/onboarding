import React, {Fragment} from 'react';
//import axios from 'axios';
const GenerateQuestionDatabase = (props) => {

  const onChangeSelectRadioDatabase = (i,e) => {
    console.log('selected database value', e.target.value);
    props.onChangescoreOfDb(i, e.target.value);
  };
    return (
    props.databaseList.map((val, idx) => {
     //const collectionName =`collectionName-${idx}`;
     //const mgtTool=`mgtTool-${idx}`;
      return(
          <Fragment>
            <tr key={val.index} style={{margin: 5, width:720, height: 10, border:0}}>
              <td>
                    <td><span className="questionLabel">How long are you familiar with {val.databaseName}?</span></td>
                      <label className="containerRadio">No experience
                          <input name={val.databaseName} type="radio" checked={props.scoreOfDb[idx] === "0<score<=3"} 
                          onChange={e=>onChangeSelectRadioDatabase(idx,e)} value="0<score<=3"/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio">Abit experience
                          <input name={val.databaseName} type="radio" checked={props.scoreOfDb[idx] === "3<score<=5"} 
                          onChange={e=>onChangeSelectRadioDatabase(idx,e)} value="3<score<=5"/>
                          <span className="checkmarkRadio"></span>
                      </label>
                      <label className="containerRadio">Alot of experience
                          <input name={val.databaseName} type="radio" checked={props.scoreOfDb[idx] === "5<score<=8"} 
                          onChange={e=>onChangeSelectRadioDatabase(idx,e)} value="5<score<=8"/>
                          <span className="checkmarkRadio"></span>
                      </label>

                  </td> 
            </tr>
        </Fragment>
      )}
))};
    
export default GenerateQuestionDatabase