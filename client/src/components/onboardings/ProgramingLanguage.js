import React from "react";
const ProgramingLanguages = (props) => {
  return (
    props.programingList.map((val, idx) => {
      let programingName =`programingName-${idx}`
      return(
        <tr key={val.index}>
          <td>
            <select  name="programingName" id={programingName} data-id={idx} className="collection-container">
              <option value="Water fall">Java</option>
              <option value="Agile">JavaScript</option>
              <option value="Xp">Python</option>
              <option value="Water fall">C++</option>
            </select>
            </td>
            <tr>{
            idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
            : <button className="btn btn-danger" onClick={(()=>props.delete(val))}><i className="fa fa-minus" aria-hidden="true"></i></button>
            }
          </tr>
          
        </tr>
      )}
    ))}
export default ProgramingLanguages