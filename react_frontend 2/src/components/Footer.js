import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <table width="90%" style={{ marginLeft: "16px" }}>
          <br></br>
          <tr>
            <td>
              <tr>
                <a href="/termsnconditions" className="nav-link1">
                  <h6 className="nameColor">Terms & Conditions</h6>
                </a>
              </tr>

              <tr>
                <a href="/privacypolicy" className="nav-link1">
                  <h6 className="nameColor">Privacy Policy</h6>
                </a>
              </tr>
            </td>

            <td className="float-end">
              <div className="nameColor">
                {" "}
                <h2>Contact Us</h2> {" "}
                <span
                  style={{ display: "inline-block;", marginBottom: "1rem;" }}
                >
                  <a>9065237534</a>
                </span>
                <br />
                {/* <br /> <h2>Download App</h2> <br /> */}
                {/* <a style={{ marginRight: "16px" }}>
                  <img
                    src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png"
                    alt="Download GreenMart App for Android from Play Store"
                  />
                </a>
                <a>
                  <img
                    src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png"
                    alt="Download GreenMart App for iOs from App Store"
                  />
                </a> */}
              </div>{" "}
            </td>
          </tr>
        </table>

        <div class="copyright">
          <div>
             Online parking System CDAC Project 2021, INDIA
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
