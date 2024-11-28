

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Customer Service</h3>
        <ul>
          <li><a href="/help-center">Help Center</a></li>
          <li><a href="/terms">Terms and Conditions</a></li>
          <li><a href="/feedback">Take our feedback survey</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Shopping with Us</h3>
        <ul>
          <li><a href="/payments">Making Payments</a></li>
          <li><a href="/delivery">Delivery Options</a></li>
          <li><a href="/buyer-protection">Buyer Protection</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Collaborate with Us</h3>
        <ul>
          <li><a href="/partnerships">Partnerships</a></li>
          <li><a href="/affiliates">Affiliate Program</a></li>
          <li><a href="/seller-login">Seller Log In</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>PAYMENT METHODS</h3>
        <div className="payment-icons flex">
          <img src="/visa.png" alt="Visa" />
          <img src="/mastercard.png" alt="MasterCard" />
          <img src="/paypal.png" alt="PayPal" />
          <img src="/apple_pay.png" alt="Apple Pay" />
          <img src="/airtel_momo.png" alt="Airtel Pay" />
          <img src="/mtn_momo.png" alt="MTN Pay" />
        </div>

        <div>
          <h3 style={{ color: '#fbceb1' }}>Stay Connected</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <a href="https://facebook.com">
              <img src="/facebook.jpg" alt="Facebook" style={iconStyle} />
            </a>
            <a href="https://twitter.com">
              <img src="/x space.png" alt="Twitter" style={iconStyle} />
            </a>
            <a href="https://instagram.com">
              <img src="/instagram.jpg" alt="Instagram" style={iconStyle} />
            </a>
            <a href="https://pinterest.com">
              <img src="/pinterest.png" alt="Pinterest" style={iconStyle} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// const linkStyle = {
//   color: '#f8a879',
//   textDecoration: 'none',
//   margin: '5px 0',
//   fontWeight: 'bold',
//   display: 'block',
// };

const iconStyle = {
  width: '40px',
  height: 'auto',
};

export default Footer;
