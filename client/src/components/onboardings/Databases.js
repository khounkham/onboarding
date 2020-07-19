import React from "react";
const Databases = (props) => {
  const database=[{
    name: 'MongoDB',
    label: 'MongoDB'
  },
  {
    name: 'MySql',
    label: 'MySql'
  },
  {
    name: 'Oracle',
    label: 'Oracle'
  }];

  return (
    props.databaseList.map((val, idx) => {
      let databaseName =`methodologyName-${idx}`
      return(
        <table key={val.index} style={{margin: 1, width:720, height: 20, border:1}}>
          <th className="">
            <select name="databaseName" id={databaseName} data-id={idx} className='dropDownListSelect' style={{margin: 1, width:500}}>
              {database.map(d=>(<option value={d.name}>{d.label}</option>))}
            </select>{' '}
            { 
                  idx===0?<button onClick={()=>props.add()} className="btn add-btn" type="button" style={{position: "relative"}}>+</button>
                  : <button className="btn btn-danger" style={{position: "relative"}} type="button" onClick={(()=>props.delete(val))}>-</button>
                  }
          </th>
        </table>
      )}
    ))}
export default Databases