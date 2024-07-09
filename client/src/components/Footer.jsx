import "../styles/Footer.scss";
import {  LocalPhone, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/"><img src="/assets/landhand.png" alt="logo" /></a>
        <div className="copyright">
          &copy; 2024 landinhand. All rights reserved.
        </div>
      </div>

      <div className="footer_center">
        <h3>Useful Links</h3>
        <ul>
          <li>
            <a href="about.html">About Us</a>
          </li>
          <li>
            <a href="terms.html">Terms and Conditions</a>
          </li>
          
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>7806837361</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>landinhand@support.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
