import {Link} from 'react-router-dom'
import React, { Component } from 'react'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"; 
import ApiAdminService from "../../service/ApiAdminService";
import profile from '../../img/profile.jpg'


class customerDetailsScreen extends Component{

    constructor(props) {
        super(props)
        this.state = {
          user:{},
          message: null

      }
        this.getUserDetails = this.getUserDetails.bind(this);
    }
    

    getUserDetails(e) {
        e.preventDefault();
        ApiAdminService.fetchUserDetails(this.state.u_id)
        .then((res) => {
            console.log(res);
            this.setState({user: res.data.result})
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
       <input type="search" autocomplete="off"value={this.state.u_id} name="u_id" onChange={this.onChange} className="form-control focusField gplaces-input-dropdown  fout-enabled " id="home-autocomplete" placeholder="Enter User Id"></input>
       <div className="searchBarBtn">
       <button className="btn btn-danger" type="submit" onClick={this.getUserDetails} ><span className="hidden-xs fout-enabled">View customer</span></button>
       </div> 
       </div>     
        </div>
           </div>
           < div className="container">
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
                                                <p>{this.state.user.id}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.user.name}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.user.email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.user.mobile}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Gender</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.user.gender}</p>
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
export default customerDetailsScreen