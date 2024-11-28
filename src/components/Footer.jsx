import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#fde8d7',
        color: '#bb2c13',
        padding: '20px 0',
        position: 'absolute',
        bottom: '0',
        width: '100%',
        textAlign: 'center',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h3 style={{ color: '#bb2c13' }}>CUSTOMER SERVICE</h3>
          <Link to="/help-center" style={linkStyle}>
            Help Center
          </Link>
          <Link to="/terms" style={linkStyle}>
            Terms and Conditions
          </Link>
          <Link to="/feedback" style={linkStyle}>
            Take our Feedback Survey
          </Link>
        </div>

        <div>
          <h3 style={{ color: '#bb2c13' }}>SHOP WITH US</h3>
          <Link to="/payments" style={linkStyle}>
            Making Payments
          </Link>
          <Link to="/delivery" style={linkStyle}>
            Delivery Options
          </Link>
          <Link to="/buyer-protection" style={linkStyle}>
            Buyer Protection
          </Link>
        </div>

        <div>
          <h3 style={{ color: '#bb2c13' }}>COLLABORATE WITH US</h3>
          <Link to="/partnerships" style={linkStyle}>
            Partnerships
          </Link>
          <Link to="/affiliates" style={linkStyle}>
            Affiliate Program
          </Link>
          <Link to="/seller-login" style={linkStyle}>
            Seller Log In
          </Link>
        </div>

        <div>
          <h3 style={{ color: '#bb2c13' }}>PAYMENT METHODS</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <img src="/visa.png" alt="Visa" style={iconStyle} />
            <img src="/mastercard.png" alt="MasterCard" style={iconStyle} />
            <img src="/paypal.png" alt="PayPal" style={iconStyle} />
            <img src="/apple_pay.png" alt="Apple Pay" style={iconStyle} />
            <img src="/airtel_momo.png" alt="Airtel Pay" style={iconStyle} />
            <img src="/mtn_momo.png" alt="MTN Pay" style={iconStyle} />
          </div>
        </div>

        <div>
          <h3 style={{ color: '#bb2c13' }}>STAY CONNECTED</h3>
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

const linkStyle = {
  color: '#f8a879',
  textDecoration: 'none',
  margin: '5px 0',
  fontWeight: 'bold',
  display: 'block',
};

const iconStyle = {
  width: '40px',
  height: 'auto',
};

export default Footer;
