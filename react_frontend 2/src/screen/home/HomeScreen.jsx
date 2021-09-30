import { Component } from "react"
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import background1 from "./background1.png";

class HomeScreen extends Component  {
   constructor(props) {
      super(props)
      this.state = {
        st : false,
        searchParking : '',
    }
      this.getStatus = this.getStatus.bind(this);
      this.searchParkingByArea = this.searchParkingByArea.bind(this);
  }
  
  onChange = (e) =>
          this.setState({ [e.target.name]: e.target.value });
  
  componentDidMount() {
    this.getStatus();
  }
  getStatus() {
    this.setState(prevState => ({ st: window.localStorage.getItem("status") === 'true'}))
    
  }
  
  
  searchParkingByArea (e){
    e.preventDefault();
    window.localStorage.setItem("searchParkingArea", this.state.searchParking)
      if((window.localStorage.getItem("U_ID"))!=null)
      // window.open("/show-search-parking");
      window.location.href = "/show-search-parking";

       else
     // window.open("/login"); next page 

     window.location.href = "/login";//next page

}
  
    render(){
  
  return (
 
    <div >
       <Navigation/>
        <img src={background1}  width="100%"/>

       {/* < video className="video" autoPlay> 
          <source src="https://www.youtube.com/watch?v=PYqGuLnq2p0" type="video/mp4" ></source>
       </video> */}
       {/* <img
                src={background1}
                class="img-fluid"
                alt="Logo"
                width="100px"
                height="100px"
        /> */}
       <hr/>
       <div className="head">
       <h1>Book Your Parking Spaces</h1>
          <h5>Save Upto 50%</h5>
          </div>
       <div className="search">
       <div  className="gplaces-autocomplete autocomplete-wrap d-flex">
       <input type="search" autoComplete="on"value={this.state.searchParking} name="searchParking" onChange={this.onChange} className="form-control focusField gplaces-input-dropdown  fout-enabled " id="home-autocomplete" placeholder="Search city" required="enter city name"></input>
       <div className="searchBarBtn">
       <button className="btn btn-danger" type="submit" onClick={this.searchParkingByArea} ><span className="hidden-xs fout-enabled">FIND PARKING</span></button>
       </div> 
       </div>     
        </div>
        <Header/>
    </div>
    
  )
}
}
export default HomeScreen
