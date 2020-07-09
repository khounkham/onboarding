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
  scoreOfMethod:[],
  scoreOfProLanguage:[],
  scoreOfFramework:[],
  scoreOfDb:[],
  scoreOfDevpTech:[],
  ScoreOfquestionGoal1:'',
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
    ScoreOfquestionGoal1,
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
  newList[i].mgtTool = v;
  setFormData({...formData,
    scoreOfMgtTool: newList,
  });
}

// const generateQuestion = 
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
          collectionList: collectionList.filter(r => r !== record)
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

//const {collectionList, methodologyList, programingList, frameworkList, databaseList, developmenttechList } = this.state;
  //const listTech = ['Asana', 'Trello', 'Slack'];
//const loading = false;
//console.log('state', formData);

  return (
    <Grid className ="container" >

      {/* <head className="" style={{marginTop: 20}}><title>xx</title></head> */}
      <body>
      <div className='container'>
     
      <form className="" onSubmit="">
      <h2>New Onboarding Design</h2>
        
          <div><p className="lead"><i className="fas fa-user"></i>Company profile</p>
            
            <table className="table" style={{width:710, height:20}}>
              <th>
                <tr style={{height: 15, width: 50}}>Company Name*</tr>
              </th>
              <th>
                <tr style={{height: 15, width: 50}}>
                  <TextField type="text" style={{width:710}} name="companyName" value={companyName} id="companyName" 
                  placeholder="Enter company name" onChange={onChangeCompanyName}/>
                </tr>
              </th>
            </table>

            <table className="table" style={{width:720, height: 20}}>
              <tr>
                <th style={{height: 15}}>Description</th>
              </tr>
              <tr>
                <td><textarea type="textarea" value={companyDescription} name="companyDescription" placeholder="Enter company description" 
                id="companyDescription" onChange={onChangeCompanyName}
                style={{width:710, height: 60}}></textarea>
                </td>
              </tr>
            </table>

            <table className="table" style={{width:720, height: 20}}>
                <thead>
                    <tr>
                    <th style={{height: 15}}>Project Management Tools*</th>
                    </tr>
                </thead>
                    <td>
                      <CompanyCollection add={addNewRow} delete={clickOnDelete} 
                      collectionList={collectionList}
                      onChangeCollectionList={onChangeCollectionList}/>
                    </td>
                <tfoot>
                </tfoot>
            </table>

            <table className="table" style={{width:720, height: 20}}>
              <tr>
                <th style={{height: 15}}>Development Methodologies*</th>
              </tr>
                <td>
                    <CompanyMethodology add={addNewRow1} delete={clickOnDelete1} methodologyList={methodologyList}/>
                </td>
            </table>
            </div>
            <p className="lead"><i className="fas fa-user"></i>Team/Project Profile</p>

            <table className="table" style={{width:720, height:20}}>
              <tr>
                <th style={{height: 15}}>Team/Project Name*</th>
              </tr>
              <tr>
                <td>
                  <input type="text" style={{width:710}} name="projectName" id="projectName" 
                  placeholder="Enter project name" />
                </td>
              </tr>
            </table>
            <table className="table" style={{width:720, height: 20}}>
              <tr>
                <th style={{height: 15}}>Description</th>
              </tr>
              <tr>
                <td>
                  <textarea type="textarea" name="projectDescription" placeholder="Enter team/project description" id="projectDescription" 
                  className="" onChange={e=>(e)} 
                  style={{width:710, height: 60}}>
                  </textarea>
                </td>
              </tr>
            </table>

            <table className="table" style={{width:720, height: 20}}>
                <thead>
                    <tr>
                    <th style={{height: 15}}>Programing Languages*</th>
                    </tr>
                </thead>
                  <tr>
                    <td>
                     <PrograminLanguage add={addNewRow2} delete={clickOnDelete2.bind(this)} programingList={programingList} />
                    </td>
                  </tr>
            </table>
            <table className="table" style={{width:720, height: 20}}>
              <tr>
                <th style={{height: 15}}>Frameworks*</th>
              </tr>
                <td>
                  <Frameworks add={addNewRow3} delete={clickOnDelete3.bind(this)} frameworkList={frameworkList} />
                </td>
            </table>

            <table className="table" style={{width:720, height: 20}}>
              <tr>
                <th style={{height: 15}}>Databases*</th>
              </tr>
                <td>
                  <Databases add={addNewRow4} delete={clickOnDelete4.bind(this)} databaseList={databaseList} />
                </td>
            </table>
            <table className="table" style={{width:720, height: 20}}>
              <tr>
                <th style={{height: 15}}>Development Techniques*</th>
              </tr>
                <td>
                <DevelopmentTechs add={addNewRow5} delete={clickOnDelete5.bind(this)} developmenttechList={developmenttechList} />
                </td>
            </table>
              <p className="lead"><i className="fas fa-user"></i>Onboarder's characteristics</p>

              <table className="table" style={{width:720, height:20}}>
              <tr>
                <th style={{height: 15}}>Onboarder's Name*</th>
              </tr>
              <tr>
                <td>
                  <input type="text" style={{width:710}} name="onboardername" id="onboardername" 
                  placeholder="Enter onboarder name" onChange={e=>e} />
                </td>
              </tr>
            </table>
            <table className="table" style={{width:720, height: 20}}>
              <tr>
                <th style={{height: 15}}>Email*</th>
              </tr>
              <tr>
                <td>
                <input type="text"  name="onboarderEmail" id="onboarderEmail" className="form-control" 
                placeholder="Enter onboarder email" onChange={e=>e} />
                </td>
              </tr>
            </table>

            <div>
              <div><GenerateQuestionMgtTool collectionList={collectionList} onChangescoreOfMgtTool={onChangescoreOfMgtTool} scoreOfMgtTool={scoreOfMgtTool}/></div>
              
              </div>                   
                    <p style={{fontSize:14}}><b>Have you ever work in this team or with some of the team members ?</b></p>
                      
                        <input name="goal2" type="radio" checked value="0<score<=3" style={{margin: 10}} />
                        <span>Yes</span>
                        <input name="goal2" type="radio" style={{margin: 10}}/>
                        <span>No</span>
                    <p style={{fontSize:14}}><b>Have you ever completed your main  responsibilities as a plan ?</b></p>
                      
                      <p>
                      <label>
                        <input name="goal3" type="radio" checked value="0<score<=3" />
                        <span>Yes</span>
                      </label>
                      </p>
                    <p>
                      <label>
                        <input name="goal3" type="radio" />
                        <span>No</span>
                      </label>
                    </p>
                    <p style={{fontSize:14}}><b>Have you ever rotated working on roles of other team members?</b></p>
                      
                      <p>
                      <label>
                        <input name="goal4" type="radio" checked value="0<score<=3" />
                        <span>Yes</span>
                      </label>
                      </p>
                    <p>
                      <label>
                        <input name="goal4" type="radio" />
                        <span>No</span>
                      </label>
                    </p>
                    <p style={{fontSize:14}}><b>Have you ever complete main duties on time ?</b></p>
                      
                      <p>
                      <label>
                        <input name="goal5" type="radio" checked value="0<score<=3" />
                        <span>Yes</span>
                      </label>
                      </p>
                    <p>
                      <label>
                        <input name="goal5" type="radio" />
                        <span>No</span>
                      </label>
                    </p>
                    <p style={{fontSize:14}}><b>Have you ever code and test a function of the product with team members ?</b></p>
                      
                      <p>
                      <label>
                        <input name="goal6" type="radio" checked value="0<score<=3" />
                        <span>Yes</span>
                      </label>
                      </p>
                    <p>
                      <label>
                        <input name="goal6" type="radio" />
                        <span>No</span>
                      </label>
                    </p>
                    <p style={{fontSize:14}}><b>Have you ever complete main assigned tasks based on the criterias of team's work quality?</b></p>
                      
                      <p>
                      <label>
                        <input name="goal7" type="radio" checked value="0<score<=3"/>
                        <span>Yes</span>
                      </label>
                      </p>
                    <p>
                      <label>
                        <input name="goal7" type="radio" />
                        <span>No</span>
                      </label>
                    </p>
                    <p style={{fontSize:14}}><b>Have you ever code and test a function of the product with team members ?</b></p>
                      
                      <p>
                      <label>
                        <input name="goal8" type="radio" checked value="0<score<=3" />
                        <span>Yes</span>
                      </label>
                      </p>
                    <p>
                      <label>
                        <input name="goal8" type="radio" />
                        <span>No</span>
                      </label>
                    </p>
                    <p style={{fontSize:14}}><b>Have you ever work in a project which Agile method was used ?</b></p>
                      
                      <p>
                      <label>
                        <input name="goal9" type="radio" checked value="0<score<=3" />
                        <span>Yes</span>
                      </label>
                      </p>
                    <p>
                      <label>
                        <input name="goal9" type="radio" />
                        <span>No</span>
                      </label>
                    </p>
                    <p style={{fontSize:14}}><b>Is there any member in your team use Agile artefacts ?</b></p>
                      
                      <p>
                      <label>
                        <input name="goal10" type="radio" checked value="0<score<=3" />
                        <span>Yes</span>
                      </label>
                      </p>
                    <p>
                      <label>
                        <input name="goal10" type="radio" />
                        <span>No</span>
                      </label>
                    </p>
                    <p style={{fontSize:14}}><b>Is there any member in your team use Agile artefacts ?</b></p>
                      <p>
                      <label>
                        <input name="goal11" type="radio" checked value="0<score<=3" />
                        <span>Yes</span>
                      </label>
                      </p>
                    <p>
                      <label>
                        <input name="goal11" type="radio" />
                        <span>No</span>
                      </label>
                    </p>
          <div>             
        </div>
      </form>

                                <div className="card-footer text-center">
                                    <button type="submit" className="btn btn-primary text-center" onClick="">Continue</button>
                                </div>
      </div>
      </body>
    </Grid>
    )
  }
export default Onboarding;

