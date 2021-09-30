import "../../App.css"
import React, { Component } from 'react'
import Navigation from "../../components/Navigation";
import { ToastContainer, toast } from "react-toastify"; //react public notification libraries

class Logout extends Component {

  constructor(props) {
    super(props)
    this.changeStatus = this.changeStatus.bind(this);
}

componentDidMount() {
    this.changeStatus();
  }

changeStatus(st) {
    window.localStorage.removeItem("status");
    window.localStorage.removeItem("U_ID");
    window.localStorage.removeItem("U_NAME");
    window.localStorage.removeItem("GENDER");
    window.localStorage.removeItem("EMAIL");
    window.localStorage.removeItem("MOB");
    window.localStorage.removeItem("role");
    toast("Logout successfully....Have a good day", { type: "success" });

    this.props.history.push('/home');
  }


    render(){
      return (
        <div>
          <Navigation/>
           <h5>!!! Successfully Logout !!!</h5>
        </div>
     );
    }   
}
export default Logout