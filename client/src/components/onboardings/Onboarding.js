import React, {Fragment, useState} from 'react';
import CompanyCollection from './CompanyCollection';
import CompanyMethodology from './CompanyMethodology';
import PrograminLanguage from './ProgramingLanguage';
import Frameworks from './Frameworks';
import Databases from './Databases';
import DevelopmentTechs from './DevelopmentTechniques';
import GenerateQuestionMgtTool from './GenerateQuestionMgtTool';
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
  collectionList:[{ index: Math.random(), collectionName: ""}],
  methodologyList: [{ index: Math.random(), methodologyName: ""}],
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
  const [workingExperience, setWorkingExperience] = useState('0-3');

  const [isNotNewtoCompany, setIsNotNewtoCompany] = useState(false);

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

// const generateQuestion  
const onChangeCollectionList = (i, v) => {
  const newList = [...collectionList];
  newList[i].collectionName = v;
  setFormData({...formData,
    collectionList: newList
  });
}

// const onChangescoreOfMgtTool = (i, v) => {
//   const newList = [...scoreOfMgtTool];
//   newList[i].mgtToolName = v;
//   setFormData({...formData,
//     scoreOfMgtTool: newList,
    
  // });
  //console.log(scoreOfMgtTool);
//}
const addNewRow = (e) => {
          setFormData({...formData,
            collectionList: [...collectionList, { index: Math.random(), collectionName: "asana"}],
          });
      }
const addNewRow1 = (e) => {
          setFormData((prevState) => ({
            methodologyList: [...prevState.methodologyList, { index: Math.random(), methodologyName: ""}],
          }));
        }
const addNewRow2 = (e) => {
  setFormData((prevState) => ({
            programingList: [...prevState.programingList, { index: Math.random(), programingName: ""}],
          }));
        }
const addNewRow3 = (e) => {
  setFormData((prevState) => ({
            frameworkList: [...prevState.frameworkList, { index: Math.random(), frameworkName: ""}],
          }));
        }
const addNewRow4 = (e) => {
      setFormData((prevState) => ({
            databaseList: [...prevState.databaseList, { index: Math.random(), databaseName: ""}],
          }));
        }
const addNewRow5 = (e) => {
  setFormData((prevState) => ({
            developmenttechList: [...prevState.developmenttechList, { index: Math.random(), developmenttechName: ""}],
          }));
        }
const deteteRow = (index) => {
  setFormData({
                collectionList: this.state.collectionList.filter((s, sindex) => index !== sindex),
            });}
  
const deteteRow1 = (index) => {
  setFormData({
                methodologyList: this.state.methodologyList.filter((s, sindex) => index !== sindex),
              });
          }
const deteteRow2 = (index) => {
  setFormData({
            programingList: this.state.programingList.filter((s, sindex) => index !== sindex),
          });
      }
const deteteRow3 = (index) => {
  setFormData({
            frameworkList: this.state.frameworkList.filter((s, sindex) => index !== sindex),
          });
        }
const deteteRow4 = (index) => {
          setFormData({
            databaseList: this.state.databaseList.filter((s, sindex) => index !== sindex),
          });
        }
const deteteRow5 = (index) => {
          setFormData({
            developmenttechList: this.state.developmentList.filter((s, sindex) => index !== sindex)
          });
        }

const clickOnDelete = (record) => {
        setFormData({...formData,
          collectionList: collectionList.filter(r => r !== record),
          scoreOfMgtTool: scoreOfMgtTool.filter(r => r !== record)
        });

      }
const clickOnDelete1 = (record) => {
          setFormData({methodologyList: this.state.methodologyList.filter(r => r !== record)
          });
          }

const clickOnDelete2 = (record) => {
            setFormData({programingList: this.state.programingList.filter(r => r !== record)
            });
            }
const clickOnDelete3 = (record) => {
            setFormData({frameworkList: this.state.frameworkList.filter(r => r !== record)
            });
            }
const clickOnDelete4 = (record) => {
        setFormData({databaseList: this.state.databaseList.filter(r => r !== record)
        });
        }

const clickOnDelete5 = (record) => {
         setFormData({developmenttechList: this.state.developmenttechList.filter(r => r !== record)
        });
        }
// //Onchange handlers
// const onChangeRadioButtonHandler = (e) =>{
//     setScoreOfquestionGoal1({workingExperience: e.target.value})
// }

const handleOptionChange= (e) => {
  setScoreOfquestionGoal1({...ScoreOfquestionGoal1, [e.target.name]: e.target.value});
  //setIsNotNewtoCompany(true);
  }

const handleOptionChangeworkingExperience= (e) => {
  setWorkingExperience({...workingExperience,[e.target.name]: e.target.value});
  //console.log(handleOptionChangeworkingExperience);
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
                        methodologyList={methodologyList}/>
                  </tr>
            </table>
            </div>
            <p className="lead"><i className="fas fa-user"></i> Team/Project Profile</p>
            <table className="table" style={{width:710, height:20}}>
              <th> Team/Project Name*</th>  
                <tr style={{height: 15, width: 50, background:withTheme}}>
                  <input type="text" style={{width:708}} name="projectName" id="projectName" 
                  placeholder="Enter project name" />
                </tr>
              <th> Description</th>  
                <tr style={{height: 15, width: 50, background:withTheme}}>
                  <textarea type="textarea" name="projectDescription" placeholder="Enter team/project description" id="projectDescription" 
                  className="" onChange={e=>(e)} 
                  style={{width:708, height: 60}}>
                  </textarea>
                </tr>
              <th>Programing Languages*</th>  
                <tr style={{height: 15, width: 50, background:withTheme}}>
                  <PrograminLanguage add={addNewRow2} delete={clickOnDelete2.bind(this)} programingList={programingList} />
                </tr>
              <th>Frameworks*</th>  
                <tr style={{height: 15, width: 50, background:withTheme}}>
                  <Frameworks add={addNewRow3} delete={clickOnDelete3.bind(this)} frameworkList={frameworkList} />
                </tr>
              <th>Databases*</th>  
                <tr style={{height: 15, width: 50, background:withTheme}}>
                  <Databases add={addNewRow4} delete={clickOnDelete4.bind(this)} databaseList={databaseList} />
                </tr>
              <th>Development Techniques*</th>  
                <tr style={{height: 15, width: 50, background:withTheme}}>
                  <DevelopmentTechs add={addNewRow5} delete={clickOnDelete5.bind(this)} developmenttechList={developmenttechList} />
                </tr>
            </table>
            <p className="lead"><i className="fas fa-user"></i> Onboarder's characteristics</p>
            <table className="table" style={{width:710, height:20}}>
                <th>Onboarder's Name*</th>
                  <tr>
                    <input type="text" style={{width:708}} name="onboardername" id="onboardername" 
                    placeholder="Enter onboarder name" onChange={e=>e} />
                  </tr>
                <th>Email*</th>
                  <tr>
                    <input type="text" style={{width:708}} name="onboarderEmail" id="onboarderEmail" className="" 
                    placeholder="Enter onboarder email" onChange={e=>e} />
                  </tr>
            </table>

            <div>
              <GenerateQuestionMgtTool collectionList={collectionList} onChangescoreOfMgtTool={onChangescoreOfMgtTool} scoreOfMgtTool={scoreOfMgtTool} />
            </div>
            <table className="table" style={{width:710, height:20}}>
                <th>Are you new to this company ?</th>
                  <tr>
                    <label className="containerRadio">Yes
                          <input name="newToCompany"type="radio" checked={ScoreOfquestionGoal1} 
                          onChange={handleOptionChange} 
                          value={ScoreOfquestionGoal1}/>
                          <span className="checkmarkRadio"></span>
                      </label>
                      <label className="containerRadio"> No
                          <input type="radio" name="newToCompany" checked={ScoreOfquestionGoal1} 
                          onChange={{handleOptionChange}} 
                          value={ScoreOfquestionGoal1} />
                          <span className="checkmarkRadio" ></span>
                      </label><br/>
                                {isNotNewtoCompany ? <Fragment>
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
                                  </Fragment> : null}
                  </tr>
                <th>Have you ever work in this team or with some of the team members ?</th>
                  <tr>
                  <label className="containerRadio"> Yes
                          <input type="radio" checked={true}/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio"> No
                          <input type="radio" checked />
                          <span className="checkmarkRadio" ></span>
                      </label><br/>
                  </tr>
                <th>Have you ever completed your main  responsibilities as a plan ?</th>
                  <tr>
                  <label className="containerRadio"> Yes
                          <input type="radio" checked={true}/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio"> No
                          <input type="radio" checked />
                          <span className="checkmarkRadio" ></span>
                      </label><br/>
                  </tr>
                
                <th>Have you ever rotated working on roles of other team members?</th>
                  <tr>
                  <label className="containerRadio"> Yes
                          <input type="radio" checked={true}/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio"> No
                          <input type="radio" checked />
                          <span className="checkmarkRadio" ></span>
                      </label><br/>
                  </tr>
                <th>Have you ever complete main duties on time ?</th>
                  <tr>
                  <label className="containerRadio"> Yes
                          <input type="radio" checked={true}/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio"> No
                          <input type="radio" checked />
                          <span className="checkmarkRadio" ></span>
                      </label><br/>
                  </tr>
                <th>Have you ever code and test a function of the product with team members ?</th>
                  <tr>
                  <label className="containerRadio"> Yes
                          <input type="radio" checked={true}/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio"> No
                          <input type="radio" checked />
                          <span className="checkmarkRadio" ></span>
                      </label><br/>
                  </tr>
                <th>Have you ever complete main assigned tasks based on the criterias of team's work quality?</th>
                  <tr>
                  <label className="containerRadio"> Yes
                          <input type="radio" checked={true}/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio"> No
                          <input type="radio" checked />
                          <span className="checkmarkRadio" ></span>
                      </label><br/>
                  </tr>
                <th>Have you ever work in a project which Agile method was used ?</th>
                  <tr>
                  <label className="containerRadio"> Yes
                          <input type="radio" checked={true}/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio"> No
                          <input type="radio" checked />
                          <span className="checkmarkRadio" ></span>
                      </label><br/>
                  </tr>
                <th>Is there any member in your team use Agile artefacts ?</th>
                  <tr>
                  <label className="containerRadio"> Yes
                          <input type="radio" checked={true}/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio"> No
                          <input type="radio" checked />
                          <span className="checkmarkRadio" ></span>
                      </label><br/>
                  </tr>
                <th>Is there any member in your team use Agile artefacts ?</th>
                  <tr>
                  <label className="containerRadio"> Yes
                          <input type="radio" checked={true}/>
                          <span className="checkmarkRadio" ></span>
                      </label>
                      <label className="containerRadio"> No
                          <input type="radio" checked />
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

