import React from "react";
const ProgramingLanguages = (props) => {

  const prolanguage = [
    {
      name: 'Java',
      label: 'Java'
    },
    {
      name: 'JavaScript',
      label: 'JavaScript'
    },
    {
      name: 'Python',
      label: 'Python'
    },
    {
      name: 'C++',
      label: 'C++'
    }];

  return (
    props.programingList.map((val, idx) => {
      let programingName =`programingName-${idx}`
      return(
        <table key={val.index} style={{margin: 1, width:720, height: 20, border:0}}>
          <th style={{margin: 1, border:0}}>
            <select  name="programingName" id={programingName} data-id={idx} style={{margin: 1, width:500}} 
            className='dropDownListSelect'>
              {prolanguage.map(p=>(<option value={p.name}>{p.label}</option>))}
            </select> {'  '}
            { 
                  idx===0?<button onClick={()=>props.add()} className="btn add-btn" type="button" style={{position: "relative"}}>+</button>
                  : <button className="btn btn-danger" style={{position: "relative"}} type="button" onClick={(()=>props.delete(val))}>-</button>
                  }
            </th>          
        </table>
      )}
    ))}
export default ProgramingLanguages