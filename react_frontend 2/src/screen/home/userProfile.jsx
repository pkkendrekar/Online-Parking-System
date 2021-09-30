import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"; 
import React, { Component } from 'react'
import Header from "../../components/Header"
import ApiCustomerService from "../../service/ApiCustomerService";
import profile from '../../img/profile.jpg';


class userProfile extends Component {

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

          render(){
        return (
          <div>
          <Navigation/>
          
          <div div className="container">
          <div class="container emp-profile">
           <form method="post">
               <div class="row">
                   <div class="col-md-4">
                       <div class="profile-img">
                           <img src={profile} alt=""/>
                           <div class="file btn btn-lg btn-primary">
                               Change Photo
                               <input type="file" name="file"/>
                           </div>
                       </div>
                   </div>
                   <div class="col-md-6">
                       <div class="profile-head">
                           <ul class="nav nav-tabs" id="myTab" role="tablist">
                               <li class="nav-item">
                                   <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                               </li>
                           </ul>
                       </div>
                   </div>
               </div>
               <div class="row">
                   <div class="col-md-4">
                       <div class="profile-work">
                           <p>USER DETAILS</p>
                       </div>
                   </div>
                   <div class="col-md-8" >
                       <div class="tab-content profile-tab" id="myTabContent">
                           <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                       <div class="row">
                                           <div class="col-md-6">
                                               <label>User Id</label>
                                           </div>
                                           <div class="col-md-6">
                                               <p>{this.state.id}</p>
                                           </div>
                                       </div>
                                       <div class="row">
                                           <div class="col-md-6">
                                               <label>Name</label>
                                           </div>
                                           <div class="col-md-6">
                                               <p>{this.state.name}</p>
                                           </div>
                                       </div>
                                       <div class="row">
                                           <div class="col-md-6">
                                               <label>Email</label>
                                           </div>
                                           <div class="col-md-6">
                                               <p>{this.state.email}</p>
                                           </div>
                                       </div>
                                       <div class="row">
                                           <div class="col-md-6">
                                               <label>Phone</label>
                                           </div>
                                           <div class="col-md-6">
                                               <p>{this.state.mobile}</p>
                                           </div>
                                       </div>
                                       <div class="row">
                                           <div class="col-md-6">
                                               <label>Gender</label>
                                           </div>
                                           <div class="col-md-6">
                                               <p>{this.state.gender}</p>
                                           </div>
                                    </div>
                           </div>
                       </div>
                   </div>
                   </div>
           </form>           
       </div>
           </div>
           </div>

   );
      }
        
    }
export default userProfile