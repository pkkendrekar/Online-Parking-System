import {Link} from 'react-router-dom'
import React, { Component } from 'react'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"; 
import ApiAdminService from "../../service/ApiAdminService";
import adminCommon from './adminCommon';

class viewBookingScreen extends Component{

    constructor(props) {
        super(props)
        this.state = {
          booking:[],
          message: null

      }
        this.getHistoryList = this.getHistoryList.bind(this);
    }
    
    // componentDidMount() {
    //   this.getHistoryList();
    // }

    getHistoryList(e) {
        e.preventDefault();
        ApiAdminService.fetchHistoryList(this.state.parkingid)
        .then((res) => {
            this.setState({booking: res.data.result})
        });
    }
    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });



    render() {
    return (
       <div>
           <Navigation/>
           <adminCommon/>
           <div>
           <div className="main">
       <div  className="gplaces-autocomplete autocomplete-wrap d-flex">
       <input type="search" autocomplete="off"value={this.state.parkingid} name="parkingid" onChange={this.onChange} className="form-control focusField gplaces-input-dropdown  fout-enabled " id="home-autocomplete" placeholder="Enter Parking Id"></input>
       <div className="searchBarBtn">
       <button className="btn btn-danger" type="submit" onClick={this.getHistoryList} ><span className="hidden-xs fout-enabled">View Booking</span></button>
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
            <th scope="col">Customer Id</th>
            <th scope="col">Booking Id</th>
            <th scope="col">Duration</th>
            <th scope="col">Date</th>
            <th scope="col">In Time</th>
            <th scope="col">Rate</th>
            <th scope="col">Payment</th>
            <th scope="col">Payment Status</th>


            </tr>
        </thead>
        <tbody>
        {this.state.booking.map(
                 history =>
            <tr>
            <th scope="row">{history.parkingid}</th>
            <td>{history.userid}</td>
            <td>{history.bookid}</td>
            <td>{history.duration}</td>
            <td>{history.date}</td>
            <td>{history.intime}</td>
            <td>{history.rate}</td>
            <td>{history.payment}</td>
            {<td>{history.status}</td>}

            
            </tr>
        )}
        </tbody>
        </table>
            <Footer/>
            </div>
            </div>
        
    );
    }
}
export default viewBookingScreen