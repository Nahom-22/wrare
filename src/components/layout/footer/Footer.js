import React from "react";
import Navbar from "../header/navbar/Navbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon  from "@mui/icons-material/Instagram";
import TwitterIcon  from "@mui/icons-material/Twitter";
import "./footer.css";
import Button from "../../UI/button/Button";

function Footer() {
  return (
    <div className="footer-container">
      <div className="section left">
        <h2>WRARE</h2>
        <p>Copyright &copy;</p>
      </div>
      <div className="section center">
        <Navbar />
      </div>
      <div className="section right">
        <ul className="contact-lists">
          <li>
            <a href="facebook.com/WRARE">
              <Button className='btn-outline'>
                <FacebookIcon />
              </Button>
            </a>
          </li>
          <li>
            <a href="facebook.com/WRARE">
            <Button className='btn-outline'>
                <InstagramIcon />
              </Button>
            </a>
          </li>
          <li>
            <a href="facebook.com/WRARE">
            <Button className='btn-outline'>
                <TwitterIcon />
              </Button>
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Footer;
