import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import Header from '../../components/Header'
import { Link } from "react-router-dom";
import "../../App.css"
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { ToastContainer, toast } from "react-toastify"; //react public notification libraries

class Login extends Component{

    constructor(props){
        super(props);
        this.state ={
          id: '',
          name: '',
          email: '',
          gender:'',
          password: '',
          mobile: '',
          role: '', 
          message: ''
        }
        this.saveUser = this.saveUser.bind(this)
    }
    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value })

    saveUser = (e) => {
        e.preventDefault();
        let loginRequest = {email: this.state.email, password: this.state.password}
        ApiService.loginUser(loginRequest)
            .then(res => {
              let user = res.data;
                user == null && this.setState({message : 'Invalid Login'})
                user !== null && this.setState({
                  id:user.id,
                  name:user.name,
                  email:user.email,
                  gender:user.gender,
                  mobile:user.mobile,
                  role:user.role,
                  message:'',
                })
                user !=null &&  toast("SignIn successfully....Wellcome "+this.state.name, { type: "success" })
                user != null && this.setState({message : 'User Login successfully.'});
                user != null && window.localStorage.setItem("status", true);
                user != null && window.localStorage.setItem("U_NAME",user.name);
                user != null && window.localStorage.setItem("GENDER", user.gender);
                user != null && window.localStorage.setItem("EMAIL", user.email);
                user != null && window.localStorage.setItem("MOB", user.mobile);
                user != null && window.localStorage.setItem("role", user.role);

                user != null && JSON.stringify(window.localStorage.setItem("U_ID", user.id));
               
           
                if(user.role === "ADMIN"){
                 this.props.history.push('/admin');
                 } else
                 user != null && this.props.history.push('/home');
            } ,(err) => {
              console.log(err);
              toast("Login Failed!!!..try again", { type: "error" });
            }
            
            );
    }

   

    render() {
        return(
          <div>
          <Navigation/>
            <div className="main">
            <Header title="Login" />
            <div className="form">
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input 
                  type="email"
                  className="form-control"
                  placeholder="name@gmail.com" name="email" value={this.state.email} onChange={this.onChange} required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="*****" name="password" value={this.state.password} onChange={this.onChange} required></input>
              </div>
              <div className="mb-3">
                <button className="btn btn-success float-start"onClick={this.saveUser}>
                  Login
                </button>
                <div className="float-end">
                  New User? <Link to="/SignUp">Create Account here</Link>
                </div>
                <br></br>
    
              </div>
            </div>
          </div>
          <Footer/>

          </div>
        );
    }
}

export default Login;