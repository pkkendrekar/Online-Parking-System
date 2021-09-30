import React, { Component } from 'react'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"; 
import ApiAdminService from "../../service/ApiAdminService";

class viewBookingScreen extends Component{

    constructor(props) {
        super(props)
        this.state = {
          parkings:[],
          message: null

      }
        this.getParkingList = this.getParkingList.bind(this);
    }
    
  
    getParkingList(e) {
        e.preventDefault();
        ApiAdminService.fetchParkingList(this.state.city)
        .then((res) => {
            this.setState({parkings: res.data.result})
        });
    }
    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });



    render() {
    return (
       <div>
           <Navigation/>
           <div>
            <div className="main">
       <div  className="gplaces-autocomplete autocomplete-wrap d-flex">
       <input type="search" autocomplete="off"value={this.state.city} name="city" onChange={this.onChange} className="form-control focusField gplaces-input-dropdown  fout-enabled " id="home-autocomplete" placeholder="Enter city name"></input>
       <div className="searchBarBtn">
       <button className="btn btn-danger" type="submit" onClick={this.getParkingList} ><span className="hidden-xs fout-enabled">Parkings</span></button>
       </div> 
       </div>     
        </div>
           </div> 
           < div className="container">

        <h2 className="text-center">Bookings</h2>
           <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">Parking Id</th>
            <th scope="col">City</th>
            <th scope="col">Area</th>
            <th scope="col">Location</th>
            <th scope="col">Rate</th>
            <th scope="col">Available Parking</th>
            <th scope="col">Total Parking</th>
            
            </tr>
        </thead>
        <tbody>
        {this.state.parkings.map(
                 park =>
            <tr>
            <th scope="row">{park.id}</th>
            <td>{park.city}</td>
            <td>{park.area}</td>
            <td>{park.location}</td>
            <td>{park.rate}</td>
            <td>{park.avail_parkings}</td>
            <td>{park.total_parkings}</td>
            
            </tr>
        )}
        </tbody>
        </table>
            <Footer/>
            </ div>
            </div>
        
    );
    }
}
export default viewBookingScreen