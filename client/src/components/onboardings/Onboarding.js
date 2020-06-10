import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';

export const Onboarding = () => {
    return (
    <Fragment>
      <h1 className="large text-primary">New Onboarding Design</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Company profile and onboarder's characteristics
      </p>
      <section>
      <small>* = required field</small>
      <form className="form" >
        <div className="info-left">
        <div className="form-group">
          <input type="text" placeholder="Company name" name="company" />
          <small className="form-text">The name of your company</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Website" name="website" />
          <small className="form-text">Could be your own or a organization website</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" />
          <small className="form-text">City & state suggested (eg. Auckland CBD, Wellington etc)</small>
        </div>
        <div className="form-group">
          <select name="status" >
            <option value="0">* Working methodology</option>
            <option value="Developer">Agile</option>
            <option value="Junior Developer">Scrum</option>
            <option value="Senior Developer">Kanban</option>
            <option value="Manager">Water fall</option>
            <option value="Manager">Labour</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">What methodology is used in the company?</small>
        </div>
        <div className="form-group">
          <select name="status" >
            <option value="0">* Method</option>
            <option value="Developer">TDD</option>
            <option value="Junior Developer">BDD</option>
            <option value="Senior Developer">Pair Programming</option>
            <option value="Manager">User story mapping</option>
            <option value="Manager">Code sharing</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">What method is used in the company?</small>
        </div>
        <div className="form-xgroup">
          <input type="text" placeholder="* Skills" name="skills" />
          <small className="form-text">Please use comma separated values (eg.
            Public Communication, Computer Programming, Design etc)</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername" />
          <small className="form-text">If you want your latest repos and a Github link, include your
            username</small>
        </div>
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio" ></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
        
      </form>
      </section>
    </Fragment>
    )
}

export default Onboarding

