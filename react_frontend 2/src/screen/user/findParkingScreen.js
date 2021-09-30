import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import React, { Component } from "react";
// import parking from "../../img/parking.jpg";

import ApiCustomerService from "../../service/ApiCustomerService";
import { ToastContainer, toast } from "react-toastify"; //react public notification libraries
import "react-toastify/dist/ReactToastify.css";

class findParkingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      parking: [],
      areas: [],
      filteredLocations: [],
      userid: "",
      parkingid: "",
      area: "",
      location: "",
      city: "",
      date: "",
      intime: "",
      duration: "",
      bookid: "",
      rate: 0,
      st: "Parking Not Found",
      startDate: new Date(),
    };

    this.onAreaChange = this.onAreaChange.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
    this.addBooking = this.addBooking.bind(this);
    this.onChange = this.onChange.bind(this);
    this.reloadLocation = this.reloadLocation.bind(this);
  }

  componentDidMount() {
    this.reloadLocation();
  }

  reloadLocation() {
    ApiCustomerService.fetchParkingByCity(
      window.localStorage.getItem("searchParkingArea")
    ).then((res) => {
      let result = res.data.result;
      console.log("result", res);
      let areas = [];
      result.forEach((item) => {
        //to filter unique areas
        const finedINdex = areas?.findIndex(
          //
          (area) => area?.area === item?.area
        );
        // if findIndex == -1 means item area is not exist in areas so we will push that item to areas array to have unique area
        if (finedINdex == -1) {
          areas.push(item);
        }
      });
      console.log(areas);
      this.setState({ parking: res.data.result, areas });
    });
  }

  onAreaChange = (e) => {
    // on area change to get filtered list locations based on area
    const filteredLocations = this.state.parking.filter(
      (ele) => ele.area === e.target.value
    );
    this.setState({ filteredLocations });
    this.onChange(e);
  };

  addBooking = (e) => {
    e.preventDefault();
    console.log(this.state);
    // to get whole location object based on this.state.location which location name
    const location = this.state.parking.find(
      (ele) => ele.location == this.state.location
    );
    let book = {
      userid: JSON.parse(window.localStorage.getItem("U_ID")),
      parkingid: location ? location.id : null, // parkingid = location.id
      date: this.state.date,
      intime: this.state.intime,
      duration: this.state.duration,
      rate: location ? location.rate : 0,
    };
    ApiCustomerService.addbook(book).then(
      (Res) => {
        let book = Res.data.result;
        this.setState({
          bookid: book.bookid,
          parkingid: book.parkingid,
          location: book.location,
          date: book.date,
          duration: book.duration,
          intime: book.intime,
          date: book.date,
          payment: book.payment,
        });
        window.localStorage.setItem("bookid", book.bookid);
        window.localStorage.setItem("parkingid", book.parkingid);
        window.localStorage.setItem("location", book.location);
        window.localStorage.setItem("date", book.date);
        window.localStorage.setItem("duration", book.duration);
        window.localStorage.setItem("intime", book.intime);
        window.localStorage.setItem("date", book.date);
        window.localStorage.setItem("payment", book.payment);

        this.props.history.push("/payment");
      },
      (err) => {
        console.log(err);
        toast("Booking failed", { type: "error" });
      }
    );
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onLocationChange = (e) => {
    console.log(e);
    this.onChange(e);
    //on location change find setting rate in state based on location selected
    const rate = this.state.parking.find(
      (ele) => ele.location === e.target.value
    )?.rate;
    this.setState({ rate });
  };
  render() {
    return (
      <div>
        <Navigation />
        <ToastContainer />
        {/* <body class="video"><img
                src={parking}
                class="img-fluid"
                alt="parking"
                
              /></body> */}
        <div class="main">
          <h3>Park Before Arriving</h3>
          <h5>Booking Now</h5>
        </div>
        <div class="main">
          <div class="form-group row">
            <label for="example-text-input" class="col-2 col-form-label">
              <h5> CITY : {this.state?.parking[0]?.city}</h5>
            </label>
          </div>
          <div class="form-group row">
            <label for="exampleSelect1">
              <h6>AREA</h6>
            </label>
            <select
              value={this.state.area}
              onChange={this.onAreaChange}
              name="area"
              class="form-control"
              id="exampleSelect1"
            >
              <option value="" disabled>
                Select Area{" "}
              </option>
              {this.state.areas.map((park) => (
                <option value={park.area}>{park.area}</option>
              ))}
            </select>
          </div>
          <div class="form-group row">
            <label for="exampleSelect1">
              <h6>LOCATION</h6>
            </label>
            <select
              value={this.state.location}
              name="location"
              onChange={this.onLocationChange}
              class="form-control"
              id="exampleSelect1"
            >
              <option value="" disabled>
                Select Location
              </option>
              {this.state.filteredLocations.map((park) => (
                <option value={park.location}>{park.location}</option>
              ))}
            </select>
          </div>

          <div class="mb-4">
            <div>
              <h6>DURATION</h6>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Duration"
                name="duration"
                value={this.state.duration}
                onChange={this.onChange}
              ></input>
            </div>
          </div>

          <div class="form-group row">
            <label for="example-date-input" class="col-2 col-form-label">
              <h6>DATE</h6>
            </label>
            <div class="col-10">
              <input
                class="form-control"
                type="date"
                name="date"
                value={this.state.date}
                onChange={this.onChange}
              ></input>
            </div>
          </div>

          <div class="form-group row">
            <label for="example-time-input" class="col-2 col-form-label">
              <h6>TIME</h6>
            </label>
            <div class="col-10">
              <input
                class="form-control"
                type="time"
                name="intime"
                value={this.state.intime}
                onChange={this.onChange}
              ></input>
            </div>
          </div>
          <div>
            <h6>RATE /hr</h6> : <h6>{this.state.rate}</h6>
          </div>
          <button
            color="primary"
            type="button"
            class="btn btn-primary"
            onClick={this.addBooking}
          >
            Book Now
          </button>
        </div>
      </div>
    );
  }
}
export default findParkingScreen;
