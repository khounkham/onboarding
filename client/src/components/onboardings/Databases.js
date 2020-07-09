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
        <tr key={val.index} style={{margin: 1, width:720, height: 20, border:1}}>
          <td className="">
            <select  name="databaseName" id={databaseName} data-id={idx} className="collection-container">
              {database.map(d=>(<option value={d.name}>{d.label}</option>))}
            </select>
          </td>
        <tr>
          <td>{ 
                  idx===0?<button onClick={()=>props.add()} className="btn add-btn" type="button" style={{position: "relative"}}>+</button>
                  : <button className="btn btn-danger" style={{position: "relative"}} type="button" onClick={(()=>props.delete(val))}>-</button>
                  }
            </td>
          </tr>
        </tr>
      )}
    ))}
export default Databases