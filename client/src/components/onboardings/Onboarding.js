import React, {Fragment, Component} from 'react'
import {Link} from 'react-router-dom';
import CompanyCollection from './CompanyCollection';
import CompanyMethodology from './CompanyMethodology';
import PrograminLanguage from './ProgramingLanguage';
import Frameworks from './Frameworks';
import Databases from './Databases';
import DevelopmentTechs from './DevelopmentTechniques';

class Onboarding extends Component {
   state = { collectionList: [{index: Math.random(), collectionName: ""}], companyName: "", companyDescription: "",
   methodologyList: [{index1: Math.random(), methodologyName: ""}], programingList: [{index2: Math.random(), programingName: ""}],
   frameworkList: [{index2: Math.random(), frameworkName: ""}],databaseList: [{index2: Math.random(), databaseName: ""}],
   developmenttechList: [{index2: Math.random(), developmenttechName: ""}]};

handleChange = (e) => {
    if (["collectionName"].includes(e.target.name)){
        let collectionList = [...this.state.collectionList]
        collectionList[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
        this.setState({ [e.target.name]: e.target.value })
    }
}

  addNewRow = (e) => {
    this.setState((prevState) => ({
        collectionList: [...prevState.collectionList, { index: Math.random(), collectionName: ""}],
    }));
}
addNewRow1 = (e) => {
  this.setState((prevState) => ({
    methodologyList: [...prevState.methodologyList, { index: Math.random(), methodologyName: ""}],
  }));
}
addNewRow2 = (e) => {
  this.setState((prevState) => ({
    programingList: [...prevState.programingList, { index: Math.random(), programingName: ""}],
  }));
}
addNewRow3 = (e) => {
  this.setState((prevState) => ({
    frameworkList: [...prevState.frameworkList, { index: Math.random(), frameworkName: ""}],
  }));
}
addNewRow4 = (e) => {
  this.setState((prevState) => ({
    databaseList: [...prevState.databaseList, { index: Math.random(), databaseName: ""}],
  }));
}
addNewRow5 = (e) => {
  this.setState((prevState) => ({
    developmenttechList: [...prevState.developmenttechList, { index: Math.random(), developmenttechName: ""}],
  }));
}
deteteRow = (index) => {
    this.setState({
        collectionList: this.state.collectionList.filter((s, sindex) => index !== sindex),
    });}
  
deteteRow1 = (index) => {
      this.setState({
        methodologyList: this.state.methodologyList.filter((s, sindex) => index !== sindex),
      });
    // const taskList1 = [...this.state.taskList];
    // taskList1.splice(index, 1);
    // this.setState({ taskList: taskList1 });
  }
  deteteRow2 = (index) => {
    this.setState({
      programingList: this.state.programingList.filter((s, sindex) => index !== sindex),
    });
}
deteteRow3 = (index) => {
  this.setState({
    frameworkList: this.state.frameworkList.filter((s, sindex) => index !== sindex),
  });
}
deteteRow4 = (index) => {
  this.setState({
    databaseList: this.state.databaseList.filter((s, sindex) => index !== sindex),
  });
}

deteteRow5 = (index) => {
  this.setState({
    developmenttechList: this.state.developmentList.filter((s, sindex) => index !== sindex),
  });
}
clickOnDelete(record) {
  this.setState({collectionList: this.state.collectionList.filter(r => r !== record)
  });
  }
clickOnDelete1(record) {
    this.setState({methodologyList: this.state.methodologyList.filter(r => r !== record)
    });
    }

clickOnDelete2(record) {
      this.setState({programingList: this.state.programingList.filter(r => r !== record)
      });
      }

clickOnDelete3(record) {
      this.setState({frameworkList: this.state.frameworkList.filter(r => r !== record)
      });
      }
clickOnDelete4(record) {
  this.setState({databaseList: this.state.databaseList.filter(r => r !== record)
  });
  }

clickOnDelete5(record) {
    this.setState({developmenttechList: this.state.developmenttechList.filter(r => r !== record)
    });
    }

render(){
    let {collectionList, methodologyList, programingList, frameworkList, databaseList, developmenttechList} = this.state
    return (
    <Fragment>
      <h1 className="large text-primary">New Onboarding Design</h1>
      <div className="">
        <form className="form" onSubmit="" onChange={this.handleChange}>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-sm-1"></div>
              <div className="col-sm-10">
                <div className="card">
                <div><p className="lead"><i className="fas fa-user"></i> 
                  Company profile </p></div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="form-group ">
                          <label className="required table">Company name:</label>
                          <input type="text"  name="companyName" id="companyName" className="form-control" placeholder="Enter company name..." />
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group ">
                          <label className="required">Description:</label>
                          <textarea type="textarea" name="companyDescription" id="description" className="form-control"></textarea>
                        </div>
                      </div>
                      </div>
                      <div className=""><label className="">Project management tools:</label></div>
                          <div><CompanyCollection add={this.addNewRow} delete={this.clickOnDelete.bind(this)} collectionList={collectionList}/></div>
                      <div className="required"><label className="form-group">Development methodologies:</label></div>
                          <div><CompanyMethodology add={this.addNewRow1} delete={this.clickOnDelete1.bind(this)} methodologyList={methodologyList} /></div>
                      <div><br/><p className="lead"><i className="fas fa-user"></i> 
                        Team/project profile </p></div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group ">
                          <label className="required">Project name</label>
                          <input type="text"  name="projectName" id="projectName" className="form-control" placeholder="Enter team/project name..." />
                        </div>
                      </div>

                      <div className="col-sm-4">
                        <div className="form-group ">
                          <label className="required">Project description</label>
                          <textarea type='textarea' name="projectDescription"  id="projectDescription" className="form-control"></textarea>
                        </div>
                      </div>
                        <div className="form-group ">
                          <div><label className="required">Programing Languages:</label><br/>
                            <tbody>
                              <PrograminLanguage add={this.addNewRow2} delete={this.clickOnDelete2.bind(this)} programingList={programingList} />
                            </tbody>
                          </div>
                          <div><label className="required">Frameworks:</label><br/>
                            <tbody>
                            <Frameworks add={this.addNewRow3} delete={this.clickOnDelete3.bind(this)} frameworkList={frameworkList} />
                          </tbody>
                          <div><label className="required">Databases:</label><br/>
                            <tbody>
                             <Databases add={this.addNewRow4} delete={this.clickOnDelete4.bind(this)} databaseList={databaseList} />
                          </tbody>
                        </div>
                        </div>
                          <div><p className="required">Development Techniques</p></div>
                            <DevelopmentTechs add={this.addNewRow5} delete={this.clickOnDelete5.bind(this)} developmenttechList={developmenttechList} />
                        <br/><br/>
                        <div className="card-footer text-center">
                            <button type="submit" className="btn btn-primary text-center">Next >></button>
                        </div>
                  
                  </div>
                  <div className="col-sm-1"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
    </Fragment>
    
    )
}
}
export default Onboarding

