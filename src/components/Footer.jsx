// src/components/Footer.jsx
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* About Section */}
        <div className="footer__section">
          <h3 className="footer__title">MarketKit</h3>
          <p className="footer__text">
            MarketKit is your one-stop online store for electronics, fashion, and
            lifestyle products. We deliver quality items at affordable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer__section">
          <h3 className="footer__title">Quick Links</h3>
          <ul className="footer__links">
            <li><a href="/" className="footer__link">Home</a></li>
            <li><a href="/shop" className="footer__link">Shop</a></li>
            <li><a href="/cart" className="footer__link">Cart</a></li>
            <li><a href="/contact" className="footer__link">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer__section">
          <h3 className="footer__title">Contact</h3>
          <p className="footer__text">Email: support@marketkit.com</p>
          <p className="footer__text">Phone: +91 98765 43210</p>
          <p className="footer__text">Address: Ahmedabad, Gujarat, India</p>
        </div>

        {/* Social Media */}
        <div className="footer__section">
          <h3 className="footer__title">Follow Us</h3>
          <div className="footer__socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer__link">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer__link">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer__link">Instagram</a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer__bottom">
        <p>© 2025 MarketKit. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
