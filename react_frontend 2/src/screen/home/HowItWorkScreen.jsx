import Header from '../../components/Header'
import Footer from '../../components/Footer'
import search from '../../img/search.jpg'
import book from '../../img/book.png'
import nav from '../../img/nav.png'
import pay from '../../img/pay.png'
import Navigation from '../../components/Navigation'

 
const HowItWorkScreen = (props) => {
    return (
      <div>
        <Navigation/>
      <div className="main">
       <Header title="Register Parking space in India"/>
      </div>
      <div>
      <div class=" flex-nowrap bd-highlight how">
        <div class="">

          <div class="boxs" > 
          <img src={search} class="img-fluid" alt="Logo" width="200px" height="100px"  margin-left="-82px"/>
          </div>
          </div>
        <div class="boxs" >
          {/* <div class="p-3 border bg-light">Book Pre-Purchase the perfect spot and hassle free guranteed space.</div> */}
          <img src={book} class="img-fluid" alt="Logo" width="200px" height="100px"  margin-left="-82px"/>
        </div>
        <div class="boxs">
        <img src={nav} class="img-fluid" alt="Logo" width="200px" height="100px" margin-left="-82px" />
          {/* <div class="p-3 border bg-light">Pay for selected hours by using convenient payment options. </div> */}
        </div>
        <div class="boxs" >
        <img src={pay} class="img-fluid" alt="Logo" width="200px" height="100px"  margin-left="-82px"/>
          {/* <div class="p-3 border bg-light">Navigate Stress free journeys and save your valuable time.</div> */}
        </div>
       
        
      </div>
    </div>
    <Footer/>
    </div>
    )
  }
  
  export default HowItWorkScreen