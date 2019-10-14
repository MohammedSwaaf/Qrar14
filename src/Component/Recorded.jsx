import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import './Recorded.css';
import Logo from './Logo';

// import About from './About';


class Recorded extends Component {
    constructor( props ) {
        super( props );
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Logo />
                <div className="QrarsSaved">
                    <div className="container">
                        {/* The header of page */ }
                        <h1 className='headOfQrars'>Qrar 14</h1>
                        <div className="row">
                            <div className="form-group">
                               
                                <div className="numOfQrars ">
                                    <p className='text-center'>64</p>
                                </div>
                                
                                <div className="inputContainers">
                                    <div className="col-lg-4 col-md-4 tholasy ">
                                        <span className='moslsal'>64</span>
                                    </div>

                                    <div className="col-lg-4 col-md-4 tholasy">
                                        <span className='markaz'>350</span>
                                    </div>

                                    <div className="col-lg-4 col-md-4 tholasy">
                                        <span className='year'>1996</span>
                                    </div>
                                    
                                    <div className="nameOfClients">
                                        <input type="text" id='name' className="form-control" placeholder="Write his name" />
                                    </div>
                                    <div className="soldierRecording">
                                        <p className='nameOfSoldier'>Swaaf</p>
                                    </div>

                                    <div className="commenderRecording">
                                        <p className='nameOfcommender'>C.Aymn</p>
                                    </div>
                                    <NavLink to='/' className='btn btn-danger'>Save</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}
export default Recorded;