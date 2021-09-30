import Footer from "../../components/Footer";
import ApiCustomerService from "../../service/ApiCustomerService";
import React, { Component } from 'react'
import Header from "../../components/Header"
import Navigation from "../../components/Navigation";
import { ToastContainer, toast } from "react-toastify"; //react public notification libraries

class editprofile extends Component {

  constructor(props) {
    super(props)
    this.state ={
      id : '',
      name: '',
      email: '',
      gender: '',
      mobile: '',
      message: ''
  }
    this.editUser = this.editUser.bind(this);
}

componentDidMount() {
    this.setState({
        id: window.localStorage.getItem("U_ID"),
        name: window.localStorage.getItem("U_NAME"),
        gender: window.localStorage.getItem("GENDER"),
        email: window.localStorage.getItem("EMAIL"),
        mobile: window.localStorage.getItem("MOB"),
        })
}


onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    editUser = (e) => {
      e.preventDefault();
      let user = {id: this.state.id, name: this.state.name, gender: this.state.gender, email: this.state.email, mobile: this.state.mobile};
      ApiCustomerService.editUser(user)
          .then(res => {
              let u = res.data;
              u != null && window.localStorage.setItem("U_NAME",user.name);
              u != null && window.localStorage.setItem("GENDER", user.gender);
              u != null && window.localStorage.setItem("EMAIL", user.email);
              u != null && window.localStorage.setItem("MOB", user.mobile);
              toast("Profile Updated successfully....", { type: "success" });
              // this.props.history.push('/home');
          });
  }

  render(){
    return (
      <div>
        <Navigation/>
        <div className="main">
      <Header title="Edit Profile" />
      <div className="form">
      <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Full Name</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange}/>
          </div>
       </div>

       <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Gender</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="gender" value={this.state.gender} onChange={this.onChange}/>
          </div>
       </div>

       <div class="row mb-3">
          <label className="col-sm-4 col-form-label">Email</label>
          <div className="col-sm-8">
              <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.onChange} readOnly/>
          </div>
       </div>

       <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Mobile No.</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="mobile" value={this.state.mobile} onChange={this.onChange}/>
          </div>
       </div>
        <div className="mb-3">
          <button className="btn btn-success float-end" onClick={this.editUser}>
            Edit Profile
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
export default editprofile