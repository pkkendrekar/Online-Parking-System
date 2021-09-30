import "../../App.css"
import Header from '../../components/Header'
import Footer from "../../components/Footer";
import { Component } from "react";
import ApiAdminService from "../../service/ApiAdminService";
import Navigation from "../../components/Navigation";

import { ToastContainer, toast } from "react-toastify"; //react public notification libraries

export default class addparking extends Component {
    constructor(props){
        super(props);
        this.state ={
            city: '',
            location: '',
            area: '',
            total_parkings: '',
            rate: '',
            message:''
              
        }
        this.saveParking = this.saveParking.bind(this);   //bind event handeler to component
    }

    saveParking = (e) => {              //save the data of a form submission
        e.preventDefault();
        let park = {city: this.state.city,area: this.state.area,location: this.state.location,total_parkings: this.state.total_parkings, rate: this.state.rate};
        ApiAdminService.addpark(park)
            .then(Res => {
                toast("parking added successfully", { type: "success" })

                this.setState({message : 'Parking Added successfully'});
                this.props.history.push('/display_parkings')
            },(err) => {
                console.log(err);
                toast("plz enter all details..", { type: "error" });
              });
    }

    onChange = (e) =>  
        this.setState({ [e.target.name]: e.target.value }); //we can assign to value to name by using set state


    render(){
        return (
            <div>
            <Navigation/>
            <adminCommon/>
            <div className="main">
            <Header title="Add New Parkings" />
            <div className="form">
            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">City</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="city" value={this.state.city} onChange={this.onChange} required="enter city name"/>
                </div>
            </div>

            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Area</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="area" value={this.state.area} onChange={this.onChange} required/>
                </div>
            </div>

            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Location</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="location" value={this.state.location} onChange={this.onChange} required/>
                </div>
            </div>

            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Total Parkings</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" name="total_parkings" value={this.state.total_parkings} onChange={this.onChange} required/>
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Rate</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" name="rate" value={this.state.rate} onChange={this.onChange} required/>
                </div>
            </div>
           
            <div className="mb-3">
                <div className="float-start" >
              
                
                </div>
                <button className="btn btn-success float-end" onClick={this.saveParking}>
                Add Parkings
                </button>
                <br></br>

            </div>
            </div>
        </div>
        <Footer />
        </div>
        );
    }
}