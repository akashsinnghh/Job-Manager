import React, { Component } from 'react';
import './form.css';
import ToggleSwitch from '../toogle-btn/toggle';



class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: "", titleStatus: false,
      intro: "", introStatus: false,
      description: "", descriptionStatus: false,
      rr: "", rrStatus: false,
      minExp: "",
      maxExp: "", expStatus: false,
      qualification: "", qualificationStatus: false,
      salary: "", salaryStatus: false,
      statement: "", statementStatus: false,
      company: "", companyStatus: false,
      location: "", locationStatus: false,
      jobType: "", jobTypeStatus: false,
      selectTerm: "", selectTermStatus: false,
      options: [
        {
          value: "Full Time",
          key: "full time"
        },
        {
          value: "Part Time",
          key: "part time"
        },
        {
          value: "Contract",
          key: "contract"
        },
        {
          value: "Internship",
          key: "internship"
        },
      ],
      term: [
        {
          value: "Remote",
          key: "remote"
        },
        {
          value: "5 day work",
          key: "5 day work"
        },
        {
          value: "6 day work",
          key: "6 day work"
        },
      ],
      min: [0, 1, 2, 3],
      max: [1, 2, 3, 4],
      propsData: []
    }
    // console.log("form level",props)
    this.resetState = this.resetState.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return {
      propsData: props.formData
    }
  }

  resetState() {
    // console.log("entered--------------->")
    this.setState({
      id: 0,
      title: "", titleStatus: false,
      intro: "", introStatus: false,
      description: "", descriptionStatus: false,
      rr: "", rrStatus: false,
      minExp: "",
      maxExp: "", expStatus: false,
      qualification: "", qualificationStatus: false,
      salary: "", salaryStatus: false,
      statement: "", statementStatus: false,
      company: "", companyStatus: false,
      location: "", locationStatus: false,
      jobType: "", jobTypeStatus: false,
      selectTerm: "", selectTermStatus: false,
    })
    this.setState({ propsData: null })
    this.props.delFormData()
  }

  sumbit(e) {
    e.preventDefault();

    let job = {
      id: this.props.data.length,
      title: this.state.title,
      titleStatus: this.state.titleStatus,
      intro: this.state.intro,
      introStatus: this.state.introStatus,
      description: this.state.description,
      descriptionStatus: this.state.descriptionStatus,
      rr: this.state.rr,
      rrStatus: this.state.rrStatus,
      minExp: this.state.minExp,
      maxExp: this.state.maxExp,
      expStatus: this.state.expStatus,
      qualification: this.state.qualification,
      qualificationStatus: this.state.qualificationStatus,
      salary: this.state.salary,
      salaryStatus: this.state.salaryStatus,
      statement: this.state.statement,
      statementStatus: this.state.statementStatus,
      company: this.state.company,
      companyStatus: this.state.companyStatus,
      location: this.state.location,
      locationStatus: this.state.locationStatus,
      jobType: this.state.jobType, jobTypeStatus: false,
      selectTerm: this.state.selectTerm, selectTermStatus: false,
    }

    this.props.addItem(job)
    this.resetState()
  }




  render() {
    
    return (
      <div className='main'>
        <div className="form">
          <form onSubmit={(e) => this.sumbit(e)}>
            <div className='job-title'>
              <div className='input-box'>
                <input
                  type="checkbox"
                  value={this.state.titleStatus}
                  onClick={() => this.setState({ titleStatus: !this.state.titleStatus })}
                  defaultChecked
                />
                &nbsp;&nbsp;&nbsp;
                <input
                  name='title'
                  placeholder='Title'
                  value={this.props.formData ? this.props.formData.title : this.state.title}
                  disabled={this.state.titleStatus}
                  onChange={(e) => {
                    this.setState({ title: e.target.value }); this.props.liveData(e.target.name, e.target.value)
                  }}
                />
              </div>
              <div>
                <ToggleSwitch label="Active" />
              </div>
              <div>
              </div>
            </div>

            <div className='intro-text'>
              <input
                name='introduction'
                type="checkbox" defaultChecked
                value={this.state.introStatus}
                onClick={() => this.setState({ introStatus: !this.state.introStatus })}

              />
              &nbsp;&nbsp;&nbsp;
              <label htmlFor='name'>Introduction</label>

            </div>
            <input
              name='intro'
              placeholder='The ideal candidate is someone ..'
              className='intro-input-box'
              value={this.props.formData ? this.props.formData.intro :this.state.intro}
              disabled={this.state.introStatus}
              onChange={(e) => { this.setState({ intro: e.target.value }); this.props.liveData(e.target.name, e.target.value) }}
            />
            <br />
            <div className='text'>
              <input
                type="checkbox" defaultChecked
                value={this.state.rrStatus}
                onClick={() => this.setState({ rrStatus: !this.state.rrStatus })}

              />
              &nbsp;&nbsp;&nbsp;
              <label htmlFor='age'>Roles & Responsiblities</label>
            </div>
            <input
              name='rr'
              placeholder='Your job role will include ..'
              className='rr-input-box'
              value={this.props.formData ? this.props.formData.rr :this.state.rr}
               disabled={this.state.rrStatus}
              onChange={(e) => { this.setState({ rr: e.target.value }); this.props.liveData(e.target.name, e.target.value) }}
            />
            <div className='range'>
              <input
                type="checkbox" defaultChecked
                value={this.state.expStatus}
                onClick={() => this.setState({ expStatus: !this.state.expStatus })}
              />
              &nbsp;&nbsp;&nbsp;
              <label htmlFor='address' className='exp'>Experence Range(yrs)</label>
              <select name="minExp" id="minExp" value={this.props.formData ? this.props.formData.minExp :this.state.minExp} className="ranges" disabled={this.state.expStatus}
                onChange={(e) => { this.setState({ minExp: e.target.value }); this.props.liveData(e.target.name, e.target.value) }}>
                <option disabled={true} value="">
                  --Choose an option--
                </option>
                {this.state.min.map((e) => {
                  return <option key={e} value={e}>{e}</option>
                })}
              </select>
              &nbsp;&nbsp;-&nbsp;&nbsp;
              <select name="maxExp" id="maxExp" value={this.props.formData ? this.props.formData.maxExp :this.state.maxExp} className="ranges" disabled={this.state.expStatus}
                onChange={(e) => { this.setState({ maxExp: e.target.value }); this.props.liveData(e.target.name, e.target.value) }}>
                <option disabled={true} value="">
                  --Choose an option--
                </option>
                {this.state.max.map((e) => {
                  return <option key={e} value={e}>{e}</option>
                })}
              </select>
            </div>
            <div className='text'>
              <input
                name='introduction'
                type="checkbox" defaultChecked
                value={this.state.qualificationStatus}
                onClick={() => this.setState({ qualificationStatus: !this.state.qualificationStatus })}
              />
              &nbsp;&nbsp;&nbsp;
              <input
                name='qualification'
                placeholder='Highest Qualification'
                className='qualification-input-box'
                value={this.props.formData ? this.props.formData.qualification :this.state.qualification}
                onChange={(e) => { this.setState({ qualification: e.target.value }); this.props.liveData(e.target.name, e.target.value) }}
                disabled={this.state.qualificationStatus}
              />
            </div>

            <div className='text'>
              <input
                name='introduction'
                type="checkbox" defaultChecked
                value={this.state.salaryStatus}
                onClick={() => this.setState({ salaryStatus: !this.state.salaryStatus })}
              />
              &nbsp;&nbsp;&nbsp;
              <input
                name='salary'
                placeholder='Salary Range'
                value={this.props.formData ? this.props.formData.salary :this.state.salary}
                onChange={(e) => { this.setState({ salary: e.target.value }); this.props.liveData(e.target.name, e.target.value) }}
                disabled={this.state.salaryStatus}
              />
            </div>
            <div className='text'>
              <input
                name='introduction'
                type="checkbox" defaultChecked
                value={this.state.statementStatus}
                onClick={() => this.setState({ statementStatus: !this.state.statementStatus })}
              />
              &nbsp;&nbsp;&nbsp;
              <input
                name='statement'
                placeholder='Concluding Statements'
                className='big-input-box'
                value={this.props.formData ? this.props.formData.statement :this.state.statement}
                onChange={(e) => { this.setState({ statement: e.target.value }); this.props.liveData(e.target.name, e.target.value) }}
                disabled={this.state.statementStatus}
              />
            </div>
            <div className='text'>
              <input
                name='introduction'
                type="checkbox" defaultChecked
                value={this.state.companyStatus}
                onClick={() => this.setState({ companyStatus: !this.state.companyStatus })}
              />
              &nbsp;&nbsp;&nbsp;
              <input
                name='company'
                placeholder='Company'
                value={this.props.formData ? this.props.formData.company :this.state.company} 
                disabled={this.state.companyStatus}
                onChange={(e) => { this.setState({ company: e.target.value }); this.props.liveData(e.target.name, e.target.value) }}
              />
            </div>
            <div className='text'>
              <input
                name='introduction'
                type="checkbox" defaultChecked
                value={this.state.locationStatus}
                onClick={() => this.setState({ locationStatus: !this.state.locationStatus })}
              />
              &nbsp;&nbsp;&nbsp;
              <input
                name='location'
                placeholder='Job Location(Map Search)'
                className='location-input-box'
                value={this.props.formData ? this.props.formData.location :this.state.location} disabled={this.state.locationStatus}
                onChange={(e) => { this.setState({ location: e.target.value }); this.props.liveData(e.target.name, e.target.value) }}
              />
            </div>
            <div>
              <input
                name='introduction'
                type="checkbox" defaultChecked
                value={this.state.jobTypeStatus}
                onClick={() => this.setState({ jobTypeStatus: !this.state.jobTypeStatus })}
              />
              &nbsp;&nbsp;&nbsp;
              <select name="jobType" id="jobType" value={this.props.formData ? this.props.formData.jobType :this.state.jobType} 
              disabled={this.state.jobTypeStatus}
                onChange={(e) => { this.setState({ jobType: e.target.value }); this.props.liveData(e.target.name, e.target.value) }}>
                <option disabled={true} value="">
                  --Choose an option--
                </option>
                {this.state.options.map((e) => {
                  return <option key={e.key} value={e.value}>{e.value}</option>
                })}
              </select>
              &nbsp;&nbsp;&nbsp;
              <input
                name='introduction'
                type="checkbox" defaultChecked
                value={this.state.selectTermStatus}
                onClick={() => this.setState({ selectTermStatus: !this.state.selectTermStatus })}
              />
              &nbsp;&nbsp;&nbsp;
              <select name="selectTerm" id="selectTerm" 
              value={this.props.formData ? this.props.formData.selectTerm :this.state.selectTerm} 
              disabled={this.state.selectTermStatus}
                onChange={(e) => { this.setState({ selectTerm: e.target.value }); this.props.liveData(e.target.name, e.target.value) }}>
                <option disabled={true} value="">
                  --Choose an option--
                </option>
                {this.state.term.map((e) => {
                  return <option key={e.key} value={e.value}>{e.value}</option>
                })}
              </select>
            </div><br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default Form;
