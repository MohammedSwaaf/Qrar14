import React, { Component } from 'react';
import './Qrars.css';
import { NavLink, Redirect } from 'react-router-dom';
import Logo from './Logo';
// import About from './About';
// import swal from 'sweetalert';
// import Navigation from './CustomNav';
// logo



class Qrars extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      Data : [
        {
          'firstName':'Mohammed',
          'lastName':'Swaaf',
          'age':23,
          'job':'Front End Developer',
          'militryService':'Done'
        },
        {
          'firstName': 'Mohammed',
          'lastName': 'Khalaf',
          'age': 24,
          'job': 'Back End Developer',
          'militryService': 'On it'
        },
        {
          'firstName': 'Mohammed',
          'lastName': 'Swaaf',
          'age': 23,
          'job': 'Front End Developer',
          'militryService': 'Done'
        },{
          'firstName':'Mohammed',
          'lastName':'Swaaf',
          'age':23,
          'job':'Front End Developer',
          'militryService':'Done'
        },
        {
          'firstName': 'Mohammed',
          'lastName': 'Swaaf',
          'age': 23,
          'job': 'Front End Developer',
          'militryService': 'Done'
        },
        {
          'firstName': 'Mohammed',
          'lastName': 'Swaaf',
          'age': 23,
          'job': 'Front End Developer',
          'militryService': 'Done'
        },
        {
          'firstName': 'Mahmoud',
          'lastName': 'Khalaf',
          'age': 24,
          'job': 'Front End Developer',
          'militryService': 'On it'
        },
        {
          'firstName': 'Mohammed',
          'lastName': 'Swaaf',
          'age': 23,
          'job': 'Front End Developer',
          'militryService': 'Done'
        }
      ],
    }
  }


  render() {

    return (

      <div>
        <Logo />
        {/* <Navigation /> */}
        {/* <h1 classNameName='text-center'>Tables </h1> */ }
        <div className="wrapper">

          <section className="content">
            <div className="box">
              <div className="box-header text-center">
                <h3 className="box-title ">Data Table With Full Features</h3>
              </div>
              {/* <!-- /.box-header --> */ }
              <div className="box-body">
                <table id="example1" className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Age(s)</th>
                      <th>Job</th>
                      <th>Militry Service</th>
                    </tr>
                  </thead>
                  <tbody>

                    
                  {this.state.Data.map(data =>(
                    
                      <tr>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.age}</td>
                        <td> {data.job}</td>
                        <td>{data.militryService}</td>
                      </tr>
                    
                  ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Rendering engine</th>
                      <th>Browser</th>
                      <th>Platform(s)</th>
                      <th>Engine version</th>
                      <th>CSS grade</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              {/* <!-- /.box-body -->
          <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */ }

            {/* <!-- /.row --> */ }
          </section>
        </div>
      </div >



    );
  }
}
export default Qrars;