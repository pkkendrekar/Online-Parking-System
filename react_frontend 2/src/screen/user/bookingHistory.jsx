import {Link} from 'react-router-dom'
import React, { Component } from 'react'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"; 
import ApiCustomerService from "../../service/ApiCustomerService";

class bookingHistoryScreen extends Component{

    constructor(props) {
        super(props)
        this.state = {
          book:[],
          message: null

      }
        this.getHistoryList = this.getHistoryList.bind(this);
    }
    
    componentDidMount() {
      this.getHistoryList();
    }

    getHistoryList() {
        ApiCustomerService.fetchHistoryList(window.localStorage.getItem("U_ID"))
        .then((res) => {
            this.setState({book: res.data.result})
        });
    }



    render() {
    return (
       <div>
           <Navigation/>
           <div className="container">
        <h2 className="text-center">Booking History</h2>
           <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">Booking Id</th>
            <th scope="col">Parking Id</th>
            <th scope="col">Duration</th>
            <th scope="col">Date</th>
            <th scope="col">In Time</th>
            <th scope="col">Payment</th>

            </tr>
        </thead>
        <tbody>
        {this.state.book.map(
                        history =>
            <tr>
            <th scope="row">{history.bookid}</th>
            <td>{history.parkingid}</td>
            <td>{history.duration}</td>
            <td>{history.date}</td>
            <td>{history.intime}</td>
            <td>{history.payment}</td>
            {<td>{history.location}</td>}
            
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
export default bookingHistoryScreen