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
        <tr key={val.index}>
          <td className="">
            <select  name="methodologyName" id={methodologyName} data-id={idx} className="collection-container">
            {tools.map(t => (<option value={t.name}>{t.label}</option>))}
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