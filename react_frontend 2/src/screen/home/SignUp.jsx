import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import "../../App.css"
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { ToastContainer, toast } from "react-toastify"; //react public notification libraries



class SignUp extends Component{

    constructor(props){
        super(props);
        this.state ={
            name: '',
            email: '',
            mobile: '',
            gender: '',
            password: '',
            message:''
              
        }
        this.saveUser = this.saveUser.bind(this);   //bind event handeler to component
    }

    saveUser = (e) => {              //save the data of a form submission
        e.preventDefault();
        let user = {name: this.state.name,email: this.state.email,mobile: this.state.mobile,gender: this.state.gender, password: this.state.password};
        ApiService.addUser(user)
            .then(Res => {
                this.setState({message : 'SignUp successfully.Please login'});
                toast("SignUp successfully...", { type: "success" });

                this.props.history.push('/login');    //after complition of registation page redirect to signin page
                  
            },
            (err) => {
                console.log(err);
                toast("SignUp failed!!!", { type: "error" });
              }
            )
    }

    onChange = (e) =>  
        this.setState({ [e.target.name]: e.target.value }); //we can assign to value to name by using set state

    render() {
        return(
            <div><Navigation/>

        <div className="main">
        <Header title="Create Account" />
        <form>
        <div className="form">
        <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Full Name</label>
            <div className="col-sm-10">
                <input type="text"placeholder="Enter a full name" className="form-control" name="name" value={this.state.name} onChange={this.onChange} required="name"/>
            </div>
         </div>

         <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
                <input type="email" placeholder="abc@gmail.com" className="form-control" name="email" value={this.state.email} onChange={this.onChange} required="email"/>
            </div>
         </div>

         <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Mobile</label>
            <div className="col-sm-10">
                <input type="text" placeholder="91+" className="form-control" name="mobile" value={this.state.mobile} onChange={this.onChange} required="mobile"/>
            </div>
         </div>

         <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Gender</label>
            <div className="col-sm-10">
                <input type="text" placeholder="gender" className="form-control" name="gender" value={this.state.gender} onChange={this.onChange} />
            </div>
         </div>

         <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
                <input type="password" placeholder="*******" className="form-control" name="password" value={this.state.password} onChange={this.onChange} />
            </div>
         </div>
          <div className="mb-3">
            <button className="btn btn-success float-start" onClick={this.saveUser}>
              Register
            </button>
            <div className="float-end">
              Existing User? <Link to="/login">Login here</Link>
            </div>
            <br></br>

          </div>
        </div>
        </form>
      </div>
      <Footer/>

      </div>

    )
}
}

export default SignUp;