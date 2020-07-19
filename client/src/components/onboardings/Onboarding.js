import React, {Fragment, useState} from 'react';
import CompanyCollection from './CompanyCollection';
import CompanyMethodology from './CompanyMethodology';
import PrograminLanguage from './ProgramingLanguage';
import Frameworks from './Frameworks';
import Databases from './Databases';
import DevelopmentTechs from './DevelopmentTechniques';
import GenerateQuestionMgtTool from './GenerateQuestionMgtTool';
import GenerateQuestionMethod from './GenerateQuestionMethod';
//Redux 
    //import {setAlert} from '../../actions/alert';
    //import PropTypes from 'prop-types';
    //import {connect} from 'react-redux';

//@material-UI 
import {makeStyles} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Radio from '@material-ui/core/Radio';
import {default as MaterialRadioGroup} from '@material-ui/core/RadioGRoup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withTheme } from '@material-ui/core';

//const container = useStyles();

const Onboarding = () => {

const [formData, setFormData]= useState ({
  companyName: '',
  companyDescription: '',
  collectionList:[{ index: Math.random(), collectionName: "Asana"}],
  methodologyList: [{ index: Math.random(), methodologyName: "Agile"}],
  programingList: [{ index: Math.random(), programingName: ""}],
  projectName:'',
  projectDescription:'',
  frameworkList: [{ index: Math.random(), frameworkName: ""}],
  databaseList: [{ index: Math.random(), databaseName: ""}],
  developmenttechList: [{ index: Math.random(), developmenttechName: ""}],
  onboarderName: '',
  onboarderEmail: '',
  scoreOfMgtTool:[{index: Math.random(), mgtTool: ""}],
  scoreOfMethod:[{index: Math.random(), mgtMethod: ""}],
  scoreOfProLanguage:[{index: Math.random(), proLanguage: ""}],
  scoreOfFramework:[{index: Math.random(), devFramework: ""}],
  scoreOfDb:[{index: Math.random(), devDB: ""}],
  scoreOfDevpTech:[{index: Math.random(), devTech: ""}],
  //ScoreOfquestionGoal1:'',
  ScoreOfquestionGoal2:'',
  ScoreOfquestionGoal3:'',
  ScoreOfquestionGoal4:'',
  ScoreOfquestionGoal5:'',
  ScoreOfquestionGoal6:'',
  ScoreOfquestionGoal7:'',
  ScoreOfquestionGoal8:'',
  ScoreOfquestionGoal9:'',
  ScoreOfquestionGoal10:'',
  ScoreOfquestionGoal11:''
  });
  const [ScoreOfquestionGoal1, setScoreOfquestionGoal1] = useState('');
  const [workingExperience, setWorkingExperience] = useState('');
  const [isNewToCompany, setIsNewToCompany] = useState(false);

  const {
    companyName,
    companyDescription,
    collectionList,
    methodologyList,
    projectName,
    projectDescription,
    programingList,
    frameworkList,
    databaseList,
    developmenttechList,
    onboarderName,
    onboarderEmail,
    scoreOfMgtTool,
    scoreOfMethod,
    scoreOfProLanguage,
    scoreOfFramework,
    scoreOfDb,
    scoreOfDevpTech,
    //ScoreOfquestionGoal1,
    ScoreOfquestionGoal2,
    ScoreOfquestionGoal3,
    ScoreOfquestionGoal4,
    ScoreOfquestionGoal5,
    ScoreOfquestionGoal6,
    ScoreOfquestionGoal7,
    ScoreOfquestionGoal8,
    ScoreOfquestionGoal9,
    ScoreOfquestionGoal10,
    ScoreOfquestionGoal11
  } 
  = formData;

//const [scoreOfMgtTool, setScoreOfMgtTool] = useState();
//const {valueRadios} = formData;
// const onChangeRadios = e => {
//   console.log('onChangeRadios', e.target.value)
//   setScoreOfMgtTool(...scoreOfMgtTool, {[e.target.name] : e.target.value})
//   console.log('check status', setScoreOfMgtTool)
// }

const onChangeCompanyDescription = e => setFormData({companyDescription:e.target.value});


// const onChangeCompanyName = e => {
//   console.log('onChangeCompanyName', e.target);
//   setFormData((prevState) => ({...prevState, companyName: e.target.value}));
// }

const onChangeCompanyName = e => {
  //console.log('onChangeCompanyName', e.target);
  setFormData({...formData, [e.target.name]: e.target.value});
}
const onChangescoreOfMgtTool = (i,v) => {
  const newList = [...scoreOfMgtTool];
  newList[i] = v;
  setFormData({...formData,
    scoreOfMgtTool: newList,
  });
}
const onChangescoreOfMethod = (i,v) => {
  const newList = [...scoreOfMethod];
  newList[i] = v;
  setFormData({...formData,
    scoreOfMethod: newList,
  });
}

// const generateQuestion  
const onChangeCollectionList = (i, v) => {
  const newList = [...collectionList];
  newList[i].collectionName = v;
  setFormData({...formData,
    collectionList: newList
  });
}
// const generateQuestionMethod  
const onChangemethodologyList = (i, v) => {
  const newList = [...methodologyList];
  newList[i].methodologyName = v;
  setFormData({...formData,
    methodologyList: newList
  });
}


const addNewRow = (e) => {
          setFormData({...formData,
            collectionList: [...collectionList, { index: Math.random(), collectionName: "asana"}],
          });
      }
const addNewRow1 = (e) => {
          setFormData({...formData,
            methodologyList: [...methodologyList, { index: Math.random(), methodologyName: "Agile"}],
          });
        }

const addNewRow2 = (e) => {
          setFormData({...formData,
            programingList: [...programingList, { index: Math.random(), programingName: "JavaScript"}],
          });
}

const addNewRow3 = (e) => {
      setFormData({...formData,
        frameworkList: [...frameworkList, { index: Math.random(), frameworkName: "React.js"}],
      });
    }
const addNewRow4 = (e) => {
      setFormData({...formData,
        databaseList: [...databaseList, { index: Math.random(), databaseName: "MongoDB"}],
      });
    }

const addNewRow5 = (e) => {
      setFormData({...formData,
        developmenttechList: [...developmenttechList, { index: Math.random(), developmenttechName: "TDD"}],
      });
    }

const clickOnDelete = (record) => {
        setFormData({...formData,
          collectionList: collectionList.filter(r => r !== record),
          scoreOfMgtTool: scoreOfMgtTool.filter(r => r !== record)
        });

      }
const clickOnDelete1 = (record) => {
          setFormData({...formData,
            methodologyList: methodologyList.filter(r => r !== record),
            scoreOfMethod: scoreOfMethod.filter(r => r !== record)
          });
      }
const clickOnDelete2 = (record) => {
  setFormData({...formData,
    programingList: programingList.filter(r => r !== record),
    scoreOfProLanguage: scoreOfProLanguage.filter(r => r !== record)
  });
}

const clickOnDelete3 = (record) => {
        setFormData({...formData,
          frameworkList: frameworkList.filter(r => r !== record),
          scoreOfFramework: scoreOfFramework.filter(r => r !== record)
        });
      }
const clickOnDelete4 = (record) => {
        setFormData({...formData,
          databaseList: databaseList.filter(r => r !== record),
          scoreOfDb: scoreOfDb.filter(r => r !== record)
        });
      }

const clickOnDelete5 = (record) => {
        setFormData({...formData,
          developmenttechList: developmenttechList.filter(r => r !== record),
          scoreOfDevpTech: scoreOfDevpTech.filter(r => r !== record)
        });
      }
// //Onchange handlers
const handleOptionChangeYES= (e) => {
  console.log(handleOptionChangeYES);
  setScoreOfquestionGoal1({...ScoreOfquestionGoal1, isNewToCompany:!isNewToCompany});
  
};
const handleOptionChangeNO= (e) => {
  console.log(handleOptionChangeNO);
  if (isNewToCompany) {
    setScoreOfquestionGoal1({...ScoreOfquestionGoal1, isNewToCompany:isNewToCompany});
  } else {
    setScoreOfquestionGoal1({...ScoreOfquestionGoal1, isNewToCompany:!isNewToCompany});
  }
  
  //setIsNewToCompany(!isNewToCompany);
};
  //setisNewToCompany(true);


const handleOptionChangeworkingExperience= (e) => {
  console.log(handleOptionChangeworkingExperience);
  setWorkingExperience({...workingExperience,[e.target.name]: e.target.value});
  console.log(setWorkingExperience);
}

  return (
      <body>
        {/* <h2>Home/Navigation Here/xxx</h2> */}
      <div className='container Maindiv-newOnboarding'>

      <form className="" onSubmit="">
        <h2>New Onboarding Design</h2>
          <div><p className="lead"><i className="fas fa-user"></i> Company profile</p>
            <table className="table" style={{width:710, height:20}}>
              <th> Company Name*</th>
              
                <tr style={{height: 15, width: 50, background:withTheme}}>
                  <input type="text" style={{width:708}} name="companyName" value={companyName} id="companyName" 
                  placeholder="Enter company name" onChange={onChangeCompanyName}/>
                </tr>
                <th> Company Description</th>
                  <tr>
                  <textarea type="textarea" value={companyDescription} name="companyDescription" placeholder="Enter company description" 
                  id="companyDescription" onChange={onChangeCompanyName}
                  style={{width:708, height: 60}}></textarea>
                  </tr>   
                <th> Project Management Tools*</th>   
                  <tr>
                  <CompanyCollection add={addNewRow} delete={clickOnDelete} 
                        collectionList={collectionList}
                        onChangeCollectionList={onChangeCollectionList}/>
                  </tr>
                <th> Development Methodologies*</th>   
                  <tr>
                  <CompanyMethodology add={addNewRow1} delete={clickOnDelete1} 
                        methodologyList={methodologyList}
                        onChangemethodologyList={onChangemethodologyList} />
                  </tr>
            </table>
            </div>
            <p className="lead"><i className="fas fa-user"></i> Team/Project Profile</p>
            <table className="table" style={{width:710, height:20}}>
              <th> Team/Project Name*</th>  
                <tr style={{height: 15, width: 50, background:withTheme}}>
                  <input type="text" style={{width:708}} name="projectName" id="projectName" 
                  placeholder="Enter project name" value={projectName} />
                </tr>
              <th> Description</th>  
                <tr style={{height: 15, width: 50, background:withTheme}}>
                  <textarea type="textarea" name="projectDescription" value={projectDescription} placeholder="Enter team/project description" id="projectDescription" 
                  className="" onChange={e=>(e)} 
                  style={{width:708, height: 60}}>
                  </textarea>
                </tr>
              <th>Programing Languages*</th>  
                <tr style={{height: 15, width: 50, background:withTheme}}>
                  <PrograminLanguage add={addNewRow2} delete={clickOnDelete2} programingList={programingList} />
                </tr>
              <th>Frameworks*</th>  
                <tr style={{height: 15, width: 50, background:withTheme}}>
                  <Frameworks add={addNewRow3} delete={clickOnDelete3} frameworkList={frameworkList} />
                </tr>
              <th>Databases*</th>  
                <tr style={{height: 15, width: 50, background:withTheme}}>
                  <Databases add={addNewRow4} delete={clickOnDelete4} databaseList={databaseList} />
                </tr>
              <th>Development Techniques*</th>  
                <tr style={{height: 15, width: 50, background:withTheme}}>
                  <DevelopmentTechs add={addNewRow5} delete={clickOnDelete5} developmenttechList={developmenttechList} />
                </tr>
            </table>
            <p className="lead"><i className="fas fa-user"></i> Onboarder's characteristics</p>
            <table className="table" style={{width:710, height:20}}>
                <th>Onboarder's Name*</th>
                  <tr>
                    <input type="text" style={{width:708}} name="onboardername" value={onboarderName} id="onboardername" 
                    placeholder="Enter onboarder name" onChange={e=>e} />
                  </tr>
                <th>Email*</th>
                  <tr>
                    <input type="text" style={{width:708}} name="onboarderEmail" value={onboarderEmail} id="onboarderEmail" className="" 
                    placeholder="Enter onboarder email" onChange={e=>e} />
                  </tr>
            </table>

                  <div>
                    <GenerateQuestionMgtTool collectionList={collectionList} onChangescoreOfMgtTool={onChangescoreOfMgtTool} scoreOfMgtTool={scoreOfMgtTool} />
                  </div>
                  <div>
                    <GenerateQuestionMethod methodologyList={methodologyList} onChangescoreOfMethod={onChangescoreOfMethod} scoreOfMethod={scoreOfMethod}/>
                  </div>

            <table className="table" style={{width:710, height:20}}>
                <th>Are you new to this company ?</th>
                  <tr>
                    <label className="containerRadio">Yes
                          <input name="newToCompany"type="radio" checked={ScoreOfquestionGoal1} 
                          onChange={handleOptionChangeYES}
                          value={ScoreOfquestionGoal1}/>
                          <span className="checkmarkRadio"></span>
                      </label>
                      <label className="containerRadio"> No
                          <input type="radio" name="newToCompany" checked={ScoreOfquestionGoal1} 
                          onChange={handleOptionChangeNO} 
                          value={ScoreOfquestionGoal1} />
                          <span className="checkmarkRadio" ></span>
                      </label><br/>
                                {!isNewToCompany && <Fragment>
                                  <p>How long have you been working in this company ?</p>
                                      <tr>
                                        <label className="containerRadio">Less than 6 months
                                          <input type="radio" name="workingExperience" checked={workingExperience==='0-3'} value ="0-3" 
                                          onChange={handleOptionChangeworkingExperience}/>
                                          <span className="checkmarkRadio" ></span>
                                        </label>
                                        <label className="containerRadio">6 months to 1 year
                                            <input type="radio" name="workingExperience" checked={workingExperience==='3-5'} value ="3-5" 
                                            onChange={handleOptionChangeworkingExperience}/>
                                            <span className="checkmarkRadio" ></span>
                                        </label>
                                        <label className="containerRadio" > {'>'}1 year
                                            <input type="radio" name="workingExperience" checked={workingExperience==='5-8'} value ="5-8" 
                                            onChange={handleOptionChangeworkingExperience}/>
                                            <span className="checkmarkRadio" ></span>
                                        </label>
                                        <br/>
                                      </tr>
                                  </Fragment>}
                  </tr>
                <th>Have you ever work in this team or with some of the team members ?</th>
                  <tr>
                  <label className="containerRadio"> Yes
                          <input type="radio" name="ScoreOfquestionGoal2" checked={true}/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio"> No
                          <input type="radio" name="ScoreOfquestionGoal2" checked />
                          <span className="checkmarkRadio" ></span>
                      </label><br/>
                  </tr>
                <th>Have you ever completed your main  responsibilities as a plan ?</th>
                  <tr>
                  <label className="containerRadio"> Yes
                          <input name="ScoreOfquestionGoal3" type="radio" checked={true}/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio"> No
                          <input name="ScoreOfquestionGoal3" type="radio" checked />
                          <span className="checkmarkRadio" ></span>
                      </label><br/>
                  </tr>
                
                <th>Have you ever rotated working on roles of other team members?</th>
                  <tr>
                  <label className="containerRadio"> Yes
                          <input name="ScoreOfquestionGoal4" type="radio" checked={true}/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio"> No
                          <input name="ScoreOfquestionGoal4" type="radio" checked />
                          <span className="checkmarkRadio" ></span>
                      </label><br/>
                  </tr>
                <th>Have you ever complete main duties on time ?</th>
                  <tr>
                  <label className="containerRadio"> Yes
                          <input name="ScoreOfquestionGoal5" type="radio" checked={true}/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio"> No
                          <input name="ScoreOfquestionGoal5" type="radio" checked />
                          <span className="checkmarkRadio" ></span>
                      </label><br/>
                  </tr>
                <th>Have you ever code and test a function of the product with team members ?</th>
                  <tr>
                  <label className="containerRadio"> Yes
                          <input name="ScoreOfquestionGoal6" type="radio" checked={true}/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio"> No
                          <input name="ScoreOfquestionGoal6" type="radio" checked />
                          <span className="checkmarkRadio" ></span>
                      </label><br/>
                  </tr>
                <th>Have you ever complete main assigned tasks based on the criterias of team's work quality?</th>
                  <tr>
                  <label className="containerRadio"> Yes
                          <input name="ScoreOfquestionGoal7" type="radio" checked={true}/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio"> No
                          <input name="ScoreOfquestionGoal7" type="radio" checked />
                          <span className="checkmarkRadio" ></span>
                      </label><br/>
                  </tr>
                <th>Have you ever work in a project which Agile method was used ?</th>
                  <tr>
                  <label className="containerRadio"> Yes
                          <input name="ScoreOfquestionGoal8" type="radio" checked={true}/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio"> No
                          <input name="ScoreOfquestionGoal8" type="radio" checked />
                          <span className="checkmarkRadio" ></span>
                      </label><br/>
                  </tr>
                <th>Is there any member in your team use Agile artefacts ?</th>
                  <tr>
                  <label className="containerRadio"> Yes
                          <input name="ScoreOfquestionGoal9" type="radio" checked={true}/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio"> No
                          <input name="ScoreOfquestionGoal9" type="radio" checked />
                          <span className="checkmarkRadio" ></span>
                      </label><br/>
                  </tr>
                <th>Is there any member in your team use Agile artefacts ?</th>
                  <tr>
                  <label className="containerRadio"> Yes
                          <input name="ScoreOfquestionGoal10" type="radio" checked={true}/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio"> No
                          <input name="ScoreOfquestionGoal10" type="radio" checked />
                          <span className="checkmarkRadio" ></span>
                      </label><br/>
                  </tr>
                  <th>Were there more than one module in the products developed by your organizaiton? </th>
                  <tr>
                  <label className="containerRadio"> Yes
                          <input name="ScoreOfquestionGoal11" type="radio" checked={true}/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio"> No
                          <input name="ScoreOfquestionGoal11" type="radio" checked />
                          <span className="checkmarkRadio" ></span>
                      </label><br/>
                  </tr>
                  
            </table>
          <div>             
        </div>
      </form>
                                <div className="card-footer text-center">
                                    <button type="submit" className="btn btn-primary text-center" onClick="">Continue</button>
                                </div>
          <br/>                   
      </div>
      </body>
    )
  }
export default Onboarding;

