import React, {useState, Fragment} from "react";
//import axios from 'axios';
const CompanyCollection = (props) => {
  const tools = [
    {
      name: 'Asana',
      label: 'Asana'
    },
    {
      name: 'Jira',
      label: 'Jira'
    },
    {
      name: 'Monday.com',
      label: 'Monday.com'
    },
    {
      name: 'Trello',
      label: 'Trello'
    }];

    //const onChangeDropList = e => setFormData({...[e.target.name]:e.target.value});
    const onChangeSelect = (i, e) => {
      //props.generateQuestion(e.target.value)
      console.log('selected', e.target.value);
      props.onChangeCollectionList(i, e.target.value);
    };

    console.log('props of companyCollectioin', props)
    return (
    props.collectionList.map((val, idx) => {
     const collectionName =`collectionName-${idx}`;
      return(
          <Fragment>
            <table key={val.index} style={{margin: 1, width:720, height: 20, border:0}}>
                  <th style={{margin: 1}}>
                    <select name="collectionName" id={collectionName} data-id={idx} style={{margin: 1, width:500}} 
                    className='dropDownListSelect' onChange={e => onChangeSelect(idx, e)}
                    value={val.collectionName}> 
                      {tools.map(t => (<option value={t.name}>{t.label}</option>))}
                    </select>
                  </th>
                  <th>
                    { 
                    idx===0?<button onClick={()=>props.add()} className="btn add-btn" type="button" style={{position: "relative"}}>+</button>
                    : <button className="btn btn-danger" style={{position: "relative"}} type="button" onClick={(()=>props.delete(val))}>-</button>
                    }
                  </th>
            </table>
        </Fragment>
      )}))};

      // input[type=text], select {
      //   width: 100%;
      //   padding: 12px 20px;
      //   margin: 8px 0;
      //   display: inline-block;
      //   border: 1px solid #ccc;
      //   border-radius: 4px;
      //   box-sizing: border-box;
      // }
    
export default CompanyCollection