import React from "react";
const DevelopmentTech = (props) => {
  const devtech = [
    {
      name: 'TDD',
      label: 'TDD'
    },
    {
      name: 'RubyonRails',
      label: 'Ruby on rails'
    },
    {
      name: 'React',
      label: 'React'
    }];
  return (
    props.developmenttechList.map((val, idx) => {
      let developmenttechName =`methodologyName-${idx}`
      return(
        <tr key={val.index}>
          <td className="">
            <select  name="developmenttechName" id={developmenttechName} data-id={idx} className="collection-container">
            {devtech.map(devt=>(<option value={devt.name}>{devt.label}</option>))}
            </select>
          </td>
          <td>{ 
                  idx===0?<button onClick={()=>props.add()} className="btn add-btn" type="button" style={{position: "relative"}}>+</button>
                  : <button className="btn btn-danger" style={{position: "relative"}} type="button" onClick={(()=>props.delete(val))}>-</button>
                  }
              </td>
        </tr>
      )}
    ))}
export default DevelopmentTech