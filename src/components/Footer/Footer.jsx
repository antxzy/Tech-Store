import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            dignissimos consectetur delectus ea illum debitis eos earum
            deserunt, ad commodi veniam provident error ipsam optio molestiae
            ducimus necessitatibus nam officia!
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">123 Business St. Dallas, Texas 75051</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: (214)482-4725</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: mybusiness@email.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theater</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                &copy; YOURSTORE 2024 CREATED BY AJ. PREMIUM ECOMMERCE SOLUTIONS
            </div>
            <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
