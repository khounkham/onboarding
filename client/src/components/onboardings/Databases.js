import React from "react";
const Databases = (props) => {
  return (
    props.databaseList.map((val, idx) => {
      let databaseName =`methodologyName-${idx}`
      return(
        <tr key={val.index}>
          <td className="">
            <select  name="databaseName" id={databaseName} data-id={idx} className="collection-container">
              <option value="Agile">MongoDB</option>
              <option value="Xp">MySQL</option>
              <option value="Water fall">MS SQLserver</option>
            </select>
          </td>
          <tr>
          {
            idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
            : <button className="btn btn-danger" onClick={(()=>props.delete(val))}><i className="fa fa-minus" aria-hidden="true"></i></button>
          }
          </tr>
        </tr>
      )}
    ))}
export default Databases