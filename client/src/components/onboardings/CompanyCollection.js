import React from "react";
import axios from 'axios';

const CompanyCollection = (props) => {
  // const tools = await axios.get()
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
    props.collectionList.map((val, idx) => {
      let collectionName =`collectionName-${idx}`
      return(
        <tr key={val.index} className="form-group">
          <td className="form-group">
            <select  name="collectionName" id={collectionName} data-id={idx} className="collection-container">
              {/* <option value="Trello">Trello</option>
              <option value="Ajira">Ajira</option>
              <option value="Asana">Asana</option>
              <option value="Asana">Monday.com</option> */}
              {tools.map(t => (<option value={t.name}>{t.label}</option>))}
            </select>

          </td>
          <td></td>
          <td>
          {
            idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
            : <button className="btn btn-danger" onClick={(()=>props.delete(val))}><i className="fa fa-minus" aria-hidden="true"></i></button>
          }
          </td>
        </tr>
      )}
    ))}
export default CompanyCollection