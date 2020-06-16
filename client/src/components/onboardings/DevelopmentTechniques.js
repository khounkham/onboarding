import React from "react";
const DevelopmentTech = (props) => {
  return (
    props.developmenttechList.map((val, idx) => {
      let developmenttechName =`methodologyName-${idx}`
      return(
        <tr key={val.index}>
          <td className="">
            <select  name="developmenttechName" id={developmenttechName} data-id={idx} className="collection-container">
              <option value="Agile">TDD</option>
              <option value="Xp">...</option>
              <option value="Water fall">...</option>
            </select>
          </td>
          <td>
          {
            idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
            : <button className="btn btn-danger" onClick={(()=>props.delete(val))}><i className="fa fa-minus" aria-hidden="true"></i></button>
          }
          </td>
        </tr>
      )}
    ))}
export default DevelopmentTech