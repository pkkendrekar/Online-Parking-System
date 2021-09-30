// // import React from "react";
// import {Nav} from "react-bootstrap";
// import { withRouter } from "react-router";
// import Navigation from '../components/Navigation'

// const Side = props => {
   

//     return (
//         <>
//             <Navigation className="col-md-12 d-none d-md-block bg-light sidebar"
//             activeKey="/home"
//             onSelect={selectedKey => alert(`selected ${selectedKey}`)}
//             >
//                 <div className="sidebar-sticky"></div>
//             <Nav.Item>
//                 <Nav.Link href="http://localhost:3000/customerdetails">Customer Details</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link href="http://localhost:3000/viewbooking">View Bookings</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link href="http://localhost:3000/addparking">Add Parking</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link href="http://localhost:3000/reports" > Reports </Nav.Link>
//             </Nav.Item>
          
//         </>
//         );
//   };
//   const Sidebar = withRouter(Side);
//   export default Sidebar