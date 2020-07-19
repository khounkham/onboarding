import React from "react";
const CompanyMethodology = (props) => {

  const methods = [
    {
      name: 'Agile',
      label: 'Agile'
    },
    {
      name: 'Scrum',
      label: 'Scrum'
    },
    {
      name: 'Xp',
      label: 'Xp'
    },
    {
      name: 'Water fall',
      label: 'Water fall'
    }];

   const onChangeSelect = (i, e) => {
    //props.generateQuestion(e.target.value)
    console.log('selected', e.target.value);
    props.onChangemethodologyList(i, e.target.value);
  };

  console.log('props of methodologyList', props)


  return (
    props.methodologyList.map((val, idx) => {
      let methodologyName =`methodologyName-${idx}`
      return(
        <tr key={val.index} style={{margin: 1, width:720, height: 20, border:0}}>
          <th className="">
            <select  name="methodologyName" id={methodologyName} data-id={idx} className='dropDownListSelect' style={{width:500}} 
            onChange={e => onChangeSelect(idx, e)} value={val.methodologyName}>
            {methods.map(t => (<option value={t.name}>{t.label}</option>))}
            </select> {'  '}
            { 
            idx===0?<button onClick={()=>props.add()} className="btn add-btn" type="button" style={{position: "relative"}}>+</button>
            : <button className="btn btn-danger" style={{position: "relative"}} type="button" onClick={(()=>props.delete(val))}>-</button>
            }
          </th>
        </tr>
      )}
    ))}
export default CompanyMethodology