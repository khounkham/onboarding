import React from "react";
const CompanyMethodology = (props) => {
  return (
    props.methodologyList.map((val, idx) => {
      let methodologyName =`methodologyName-${idx}`
      return(
        <tr key={val.index}>
          <td className="">
            <select  name="methodologyName" id={methodologyName} data-id={idx} className="collection-container">
              <option value="Agile">Agile</option>
              <option value="Xp">XP</option>
              <option value="Water fall">Water fall</option>
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
export default CompanyMethodology