import React from "react";
const CompanyMethodology = (props) => {

  const tools = [
    {
      name: 'asana',
      label: 'Asana'
    },
    {
      name: 'a=jira',
      label: 'Ajira'
    },
    {
      name: 'foo',
      label: 'Foo'
    },
    {
      name: 'test',
      label: 'test'
    }];

  return (
    props.methodologyList.map((val, idx) => {
      let methodologyName =`methodologyName-${idx}`
      return(
        <tr key={val.index} style={{margin: 1, width:720, height: 20, border:0}}>
          <td className="">
            <select  name="methodologyName" id={methodologyName} data-id={idx} className='dropDownListSelect' style={{width:500}}>
            {tools.map(t => (<option value={t.name}>{t.label}</option>))}
            </select>
          </td>
          <td>
          { 
                  idx===0?<button onClick={()=>props.add()} className="btn add-btn" type="button" style={{position: "relative"}}>+</button>
                  : <button className="btn add-btn" style={{position: "relative"}} type="button" onClick={(()=>props.delete(val))}>-</button>
                  }
          </td>
        </tr>
      )}
    ))}
export default CompanyMethodology