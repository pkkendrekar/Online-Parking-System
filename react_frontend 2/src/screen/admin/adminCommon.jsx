import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import {Nav} from "react-bootstrap";

const adminCommon = (props) => {
  return (
    <body>
    <div>
      <Navigation/>
      <Nav>
        
<div className="common">
{/* <div className="nav nav-tabs"> */}
<ul className="nav flex-column ">
  <li className="nav-item">
    <a className="nav-link active" href="http://localhost:3000/customerdetails">Customer Details</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="http://localhost:3000/viewbooking">View Bookings</a>
  </li>
  <li className="nav-item">
    <a className="nav-link " href="http://localhost:3000/display_parkings">View Parking</a>
  </li>
  <li className="nav-item">
    <a className="nav-link " href="http://localhost:3000/addparking">Add Parking</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="http://localhost:3000/reports" >Reports</a>
  </li>
</ul>
</div>
</Nav>
</div>

<Footer/>

</body>

  )
  
}
export default adminCommon