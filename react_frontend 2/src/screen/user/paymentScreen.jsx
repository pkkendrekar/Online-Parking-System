import React, { Component } from 'react'
import ApiCustomerService from "../../service/ApiCustomerService";

import { ToastContainer, toast } from "react-toastify"; //react public notification libraries
import "react-toastify/dist/ReactToastify.css";

class paymentScreen extends Component {

    constructor(props) {
        super(props)
        this.state ={
        status: '',
          message: ''
      }
        this.payment = this.payment.bind(this);
        this.addBookingPay = this.addBookingPay.bind(this);
       
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    addBookingPay(){
        ApiCustomerService.addBookingPay( window.localStorage.getItem("bookid"))
    .then(res => {
        this.setState({ status:res.data.result})
      
    });
    }
   
    payment() {
        this.addBookingPay();
        this.state.status= 1;
        toast("Booking Done...", { type: "success" });
     
        // window.localStorage.removeItem("bookid");
        // window.localStorage.removeItem("parkingid");
        // window.localStorage.removeItem("location");
        // window.localStorage.removeItem("date");
        // window.localStorage.removeItem("duration");
        // window.localStorage.removeItem("intime");
        // window.localStorage.removeItem("date");
        // window.localStorage.removeItem("payment");

        this.props.history.push('/view_bookingHistoryByCusId');
    }

    selectCredit() {
        this.state.paymentInfo= "CREDIT";
    }

    selectDebit() {
        this.state.paymentInfo= "DEBIT";
    }

    render () {
        return (
            <div className="payment">
            <div>
             <div className="main">
                 <h5>Total Payment : {window.localStorage.getItem("payment")}</h5>
                 <br/>
                 <div className="container">
                      <div className="dropdown">
                          <a className="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                          Payment Type
                          </a>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                              <li><a className="dropdown-item" onClick={() => { this.selectCredit()}}>CREDIT</a></li>
                              <li><a className="dropdown-item" onClick={() => { this.selectDebit()}}>DEBIT</a></li>
                          </ul>
                      </div>     
                  </div> 
                  <br/>  

                 <button className="btn4 btn-primary" style={{width:'150px'}} onClick={() => this.payment()}>Payment</button>
             </div>
             </div>
         </div>
 
        );
    }
}

export default paymentScreen