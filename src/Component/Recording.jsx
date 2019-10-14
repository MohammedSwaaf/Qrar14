import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import './Recording.css';
import Logo from './Logo';

// import About from './About';


class Recording extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      'Year':'',
      'Markaz':'',
      'Mosalsal':'',
      'Recorder':'',
      'Commender':'',
    }

  }
  // To get value of users
  onChangeData = ( ( e ) => {
    e.preventDefault();
    // For puting the new data in state
    this.setState( {
      [ e.target.name ]: e.target.value,
    } );
    // console.log(this.state);
  } );
  onClickToSendData = ((e) =>{
    e.preventDefault();
    let fetchData = JSON.stringify( this.state );
    console.log( fetchData );
  })
  render() {

    return (
      <div>
        <Logo />
        <div className="Qrars">
          <div className="container">
          {/* The header of page */}
            <h1 className='headOfQrars'>Qrar 14</h1>
            <div className="row">
              <div className="form-group" onChange={this.onChangeData}>
                <div className="inputContainers">
                  <div className="col-lg-4 col-md-4 tholasy ">

                    <input type="text" id='year' className="form-control" placeholder="Year" name='Year' value={this.state.name}/>
                  </div>

                  <div className="col-lg-4 col-md-4 tholasy">
                    <input type="text" id='month' className="form-control" placeholder="Markaz " name="Markaz" value={this.state.name} />

                  </div>

                  <div className="col-lg-4 col-md-4 tholasy">
                    <input type="text" id='day' className="form-control" placeholder="Mosalsal" name="Mosalsal" value={ this.state.name }/>

                  </div>
                  <div className="soldierRecording">
                    <select className="custom-select soldiers" name="Recorder" id="inputGroupSelect01">
                      <option >Choosing a Recorder ...</option>
                      <option  value={this.state.name}>Swaaf</option>

                      <option value={this.state.name}  >Khalaf</option>

                    </select>
                  </div>

                  <div className="commenderRecording">
                    <select className="custom-select goods" name='Commender' placeholder="hi" onChange={this.onChangeData} >
                      <option>Choosing a Commender ...</option>
                      <option value={this.state.name} >C.Aymn</option>

                      <option  value={this.state.name}>C.Sheref</option>

                    </select>
                  </div>
                  
                  <NavLink to='/qrars' className='btn btn-danger'>Qrars</NavLink>
                  <NavLink to='' onClick={this.onClickToSendData} className='btn btn-danger'>Save</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}
export default Recording;