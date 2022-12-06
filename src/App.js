import React, { Component } from 'react';
import './App.css';
import Button from './components/button';
import Form from './components/form/form';
import Live from './components/live/live';
import ColorSchemesExample from './components/navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: [],
      data: [],
      formData: null,
      Resetfunc: null,
      index: null,
      name: "",
      value: "",
      title: "",
    }

    this.getFormData = this.getFormData.bind(this);
    this.delFormData = this.delFormData.bind(this);
    this.getLiveData = this.getLiveData.bind(this);
    this.addItem = this.addItem.bind(this);

  }

  getFormData(e, i) {
    this.setState({
      formData: e
    })
    this.setState({ index: i })
  }

  delFormData() {
    this.setState({
      formData: null
    })
  }

  getLiveData(name, value) {
    console.log("name", name, "value", value)
    this.setState({ value: value })
    this.setState({ name: name })
    this.setState({ formData: { ...this.state.formData, [name]: value } })
  }

  addItem(e) {
    this.setState({ data: [...this.state.data, e] })
  }

  render() {
    
    return (
      <div className="App">
        <ColorSchemesExample />
        <div className='container'>

          <div className='inner-container'>
            <div className='main-form-btn'>
              <Button data={this.state.data}
                new={true} getData={this.getFormData}
                delFormData={this.delFormData}
              />
              <div className='form-btn'>
                <div className='form'>
                  <Form
                    addItem={this.addItem}
                    data={this.state.data}
                    formData={this.state.formData}
                    ref={instance => { this.child = instance; }}
                    liveData={this.getLiveData}
                    delFormData={this.delFormData} />
                </div>
                <div className='btn'>
                  <div className='del' onClick={() => {
                    this.delFormData(); this.setState({ data: this.state.data.filter((item) => (this.state.index) !== item.id) })
                  }}>
                    <img src={require("D:/job-manager/src/assets/delete.png")} className='delete-icon' />
                    <div>Delete</div>
                  </div>
                  <div className='duplicate'>
                    <img src={require("D:/job-manager/src/assets/dupli.png")} className='delete-icon' />
                    <div className='duplicates' onClick={() => {
                      this.setState({ data: [...this.state.data, { ...this.state.formData, id: this.state.data.length }] })
                    }} >Duplicate</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className='live-preview'>
            <Live data={this.state.formData} name={this.state.name} value={this.state.value}/>

          </div>
        </div>

      </div>
    )
  }
}

export default App;
