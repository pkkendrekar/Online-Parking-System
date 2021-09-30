// import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'


const HelpScreen = (props) => {
  return (
    <div>
      <Navigation/>
         <div className="main1">
        <h3>FAQs : </h3>
        <p>
        Kindly check the FAQ below if you are not very familiar with the functioning of this website. If your query is of urgent nature and is different from the set of questions then do write to us at customerservice@carparking.in or call us on 9065237534 between 10 am & 5 pm on all days including Sunday to get our immediate help.
        </p>
        <h5>Registration : </h5>
        <h5>How do I register?</h5>
        <p>
        You can register by clicking on the “Sign Up” link at the top right corner of the homepage. Please provide the information in the form that appears. You can review the terms and conditions, provide your payment mode details and submit the registration information.            </p>
       <h5> What's the cancellation policy?</h5>
        <p>All parking passes are eligible for a full refund prior to the start time on the pass, except where noted otherwise.

            To cancel, simply log in to your account on web or in the app, view your passes, and click "cancel".
            You can also do this using the "cancel " link at the bottom of the pass itself.
            Alternatively, just click the "cancel" link from your confirmation email.
            Please keep in mind, once the arrival time has passed, all bookings are non-refundable. Parking purchased on a partner website or as part of a parking package are non-refundable. Other restrictions apply to hangtag validation.</p>
        <h5></h5>
    </div>
    <Footer/>
    </div>
);
}

export default HelpScreen
