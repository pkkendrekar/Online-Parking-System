import Footer from "../../components/Footer";
import ApiCustomerService from "../../service/ApiCustomerService";
import React, { Component } from 'react'
import Header from "../../components/Header"
import Navigation from "../../components/Navigation";
import { ToastContainer, toast } from "react-toastify"; //react public notification libraries

class updatePassword extends Component {

  constructor(props) {
    super(props)
    this.state ={
      email:'',
      oldPassword : '',
      newPassword:'',
      confirmPassword:'',
 }
    this.changePassword = this.changePassword.bind(this);
}

componentDidMount() {
    this.setState({
        email: window.localStorage.getItem("EMAIL"),
        })
}

     changePassword = (e) => {
      e.preventDefault();
      let user = {email: this.state.email,oldPassword: this.state.oldPassword,newPassword: this.state.newPassword, confirmPassword: this.state.confirmPassword};
      ApiCustomerService.editUserPassword(user)
          .then(res => {
            toast("Password Change successfully...", { type: "success" });
            // this.props.history.push('/home');
          },
          (err) => {
            console.log(err);
            toast("Wrong Credential!!!..try again", { type: "error" });
          }
          );
  }
  onChange = (e) =>
  this.setState({ [e.target.name]: e.target.value });

  render(){
    return (
      <div><Navigation/>
        <div className="main">
      <Header title="Change Password" />
      <div className="form">
      <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Enter Email</label>
          <div className="col-sm-8">
              <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.onChange} />
          </div>
       </div>
      <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Enter Old Password </label>
          <div className="col-sm-8">
              <input type="password" className="form-control" name="oldPassword" value={this.state.oldPassword} onChange={this.onChange} required/>
          </div>
       </div>
       <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Enter New Password</label>
          <div className="col-sm-8">
              <input type="password" className="form-control" name="newPassword" value={this.state.newPassword} onChange={this.onChange} required/>
          </div>
       </div>
       <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Confirm Password</label>
          <div className="col-sm-8">
              <input type="password" className="form-control" name="confirmPassword" value={this.state.confirmPassword} onChange={this.onChange}/>
          </div>
       </div>
        <div className="mb-3">
          <button className="btn btn-success float-end" onClick={this.changePassword}>
            Change Password
          </button>
          <br></br>

        </div>
      </div>
    </div>
    <Footer/>
      </div>
  )
  }
    
}
export default updatePassword