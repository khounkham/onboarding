import React from "react";
const Frameworks = (props) => {
  return (
    props.frameworkList.map((val, idx) => {
      let frameworkName =`frameworkName-${idx}`
      return(
        <tr key={val.index}>
          <td className="">
            <select  name="frameworkName" id={frameworkName} data-id={idx} className="collection-container">
              <option value="Agile">Django</option>
              <option value="Xp">Ruby on rails</option>
              <option value="Water fall">PHP cake</option>
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
export default Frameworks