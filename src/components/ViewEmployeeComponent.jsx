import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state= {
            id: this.props.match.params.id,
            employee:{}
        }
        
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        });
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'>View Employ Details</h3>
                    <div className='card-body'>
                        <div className="row">
                            <label style={{color:'blue'}}>Employee First Name:</label>
                            <div> {this.state.employee.firstName } </div> 
                        </div>
                        <div className='row'>
                            <label style={{color:'blue'}}>Employee Last Name: </label>
                            <div> {this.state.employee.lastName } </div> 
                        </div>
                        <div className='row'>
                            <label style={{color:'blue'}}>Employee Email: </label>
                            <div> { this.state.employee.emailId } </div> 
                        </div>
                    </div>
                </div>
                <button className='btn btn-info' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}> Cancel </button>
                
            </div>
        );
    }
}

export default ViewEmployeeComponent;