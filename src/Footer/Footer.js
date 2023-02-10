import "./Footer.css";
import FooterItem from "./FooterItem";
import InstagramLogo from './InstagramLogo.png'
import LinkedLogo from './LinkedinLogo.png'
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="flex-items">
          <FooterItem text="Prompt Generator"></FooterItem>
          <FooterItem text="Dweep Daily"></FooterItem>
          <FooterItem text="All Contributions"></FooterItem>
          <FooterItem text="Your data on Dweep.io"></FooterItem>
          <FooterItem text="Contribute to Dweep"></FooterItem>
        </div>
        <div className="flex-items right-align">
          <FooterItem text="Dweep.io"></FooterItem>
          <FooterItem text="Made with love in India"></FooterItem>
          <img src={LinkedLogo} alt="" />
          <span>  </span>
          <img src={InstagramLogo} alt="" />
          <FooterItem text="hello@dweep.io"></FooterItem>
        </div>
      </div>
    </div>
  );
};

export default Footer;
