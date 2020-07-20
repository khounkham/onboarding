import React from "react";
const DevelopmentTech = (props) => {
  const devtech = [
    {
      name: 'TDD',
      label: 'TDD'
    },
    {
      name: 'ABC',
      label: 'ABC'
    },
    {
      name: 'MOP programing',
      label: 'MOP programing'
    }];

    const onChangeSelect = (i, e) => {
      //props.generateQuestion(e.target.value)
      console.log('selected', e.target.value);
      props.onChangedevelopmenttechList(i, e.target.value);
    };

  return (
    props.developmenttechList.map((val, idx) => {
      let developmenttechName =`methodologyName-${idx}`
      return(
        <table key={val.index}>
          <th className="">
            <select  name="developmenttechName" id={developmenttechName} data-id={idx} className='dropDownListSelect' 
            style={{margin: 1, width:500}} onChange={e => onChangeSelect(idx, e)} value={val.developmenttechName}>
            {devtech.map(devt=>(<option value={devt.name}>{devt.label}</option>))}
            </select>{'  '}
            { 
                  idx===0?<button onClick={()=>props.add()} className="btn add-btn" type="button" style={{position: "relative"}}>+</button>
                  : <button className="btn btn-danger" style={{position: "relative"}} type="button" onClick={(()=>props.delete(val))}>-</button>
                  }
          </th>
        </table>
      )}
    ))}
    
export default DevelopmentTech