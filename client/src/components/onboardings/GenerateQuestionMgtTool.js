import React, {useState, Fragment} from "react";
//import axios from 'axios';
const GenerateQuestionMgtTool = (props) => {

  // const onChangescoreOfMgtTool = e => {
  //   console.log('setScoreOfMgtTool', e.target.value);
  //   setScoreOfMgtTool({...scoreOfMgtTool, [e.target.name]: e.target.value});
  // }
  // const tools = [
  //   {
  //     name: 'asana',ß
  //     label: 'Asana'
  //   },
  //   {ß
  //     name: 'jira',
  //     label: 'jira'
  //   },
  //   {
  //     name: 'foo',
  //     label: 'Foo'
  //   }];

    //const onChangeDropList = e => setFormData({...[e.target.name]:e.target.value});
    //const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    // const [valueRadio, setValueRadio] = useState('');

    // const onChangeRadio = e => {
    //   setValueRadio({...valueRadio, [e.target.name]:e.target.value})
    //   console.log('selected', e.target.value)
    // };

    console.log('props of companyCollectioin', props)
    return (
    props.collectionList.map((val, idx) => {
     const collectionName =`collectionName-${idx}`;
     const mgtToolName=`mgtTool-${idx}`
      return(
          <Fragment>
            <tr key={val.index} style={{margin: 5, width:720, height: 10, border:0}}>
              <td>
                    <td><span className="questionLabel">How long are you familiar with {val.collectionName}?</span></td>                     
                      <label className="containerRadio">No experience
                          <input name={mgtToolName} type="radio" checked={props.scoreOfMgtTool == "0<score<=3"} value="0<score<=3"/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio">Abit experience
                          <input name={mgtToolName} type="radio" checked={props.scoreOfMgtTool == "3<score<=5"} value="3<score<=5"/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio">Alot of experience
                          <input name={mgtToolName} type="radio" checked={props.scoreOfMgtTool == "5<score<=8"} value="5<score<=8"/>
                          <span className="checkmarkRadio"></span>
                      </label>
                       
                  </td> 
            </tr>
        </Fragment>
      )}))};
    
export default GenerateQuestionMgtTool