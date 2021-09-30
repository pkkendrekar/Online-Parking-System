import Footer from "../../components/Footer"
import Navigation from "../../components/Navigation"


const ContactScreen = () => {
    return (

    <div> <Navigation/>
    <div className="main">
    <div class="mb-4" >
     <label for="exampleFormControlInput1" class="form-label"><h3>Contact Us</h3></label>
     <div>Email Address
     <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
     </div>
     <div>Name
     <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="User name"></input>
     </div>
     <div>Phone no.
     <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="91+"></input>
     </div> 
      </div>
     <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Massage</label>
             <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
             <button type="button" class="btn btn-success mt-3" >Submit</button>
            </div>
            <h6 >Email : carpark@gmail.com</h6>
                <h6>Contact No :+91 9065237534</h6>
      </div> <Footer/>
 
      </div>
  
    );
}
export default ContactScreen