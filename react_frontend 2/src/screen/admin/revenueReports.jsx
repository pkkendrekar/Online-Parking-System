import {Link} from 'react-router-dom'
import React, { Component } from 'react'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"; 
import ApiAdminService from "../../service/ApiAdminService";

class revenueReportScreen extends Component{

    constructor(props) {
        super(props)
        this.state = {
          report:[],
          message: null

      }
        this.getReportList = this.getReportList.bind(this);
    }
    
    componentDidMount() {
      this.getReportList();
    }

    getReportList(e) {
        // e.preventDefault();
        ApiAdminService.fetchReportList()
        .then((res) => {
            
            this.setState({report: res.data.result})
        });
    }
   



    render() {
    return (
       <div>
           <Navigation/>
           <div>
           {/* <div className="main">
       <div  className="gplaces-autocomplete autocomplete-wrap d-flex">
       <input type="search" autocomplete="off"value={this.state.parkingid} name="parkingid" onChange={this.onChange} className="form-control focusField gplaces-input-dropdown  fout-enabled " id="home-autocomplete" placeholder="Enter Parking Id"></input>
       <div className="searchBarBtn">
       <button className="btn btn-danger" type="submit" onClick={this.getHistoryList} ><span className="hidden-xs fout-enabled">View Booking</span></button>
       </div> 
       </div>     
        </div>
           </div>
           < div className="container"> */}

        <h2 className="text-center">Revenue Report</h2>
           <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">Parking Id</th>
            <th scope="col">Date</th>
            <th scope="col">Total Revenue</th>

            </tr>
        </thead>
        <tbody>
        {/* {this.state.report.map(
                 history => */}
            <tr>
            {/* <th scope="row">{history.parkingid}</th> */}
            <th scope="row"></th>
            <td>{this.state.report.park_id}</td>
             <td>{this.state.report.date}</td>
            <td>{this.state.report.payment}</td>
            </tr>
        </tbody>
        </table>
            <Footer/>
            </div>
            </div>
        
    );
    }
}
export default revenueReportScreen