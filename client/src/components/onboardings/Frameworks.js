import React from "react";
const Frameworks = (props) => {
  const framework = [
    {
      name: 'django',
      label: 'django'
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
    props.frameworkList.map((val, idx) => {
      let frameworkName =`frameworkName-${idx}`
      return(
        <table key={val.index} style={{margin: 1, width:720, height: 20, border:1}}>
          <th className="">
            <select name="frameworkName" id={frameworkName} data-id={idx} style={{margin: 1, width:500}} className='dropDownListSelect'>
              {framework.map(f=>(<option value={f.name}>{f.label}</option>))}
            </select> {'  '}
            { 
                  idx===0?<button onClick={()=>props.add()} className="btn add-btn" type="button" style={{position: "relative"}}>+</button>
                  : <button className="btn btn-danger" style={{position: "relative"}} type="button" onClick={(()=>props.delete(val))}>-</button>
                  }
          </th>
        </table>
      )}
    ))}
export default Frameworks