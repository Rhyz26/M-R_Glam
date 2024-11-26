// import { Link } from 'react-router-dom'
// import "../src/index.css";
 
function Footer(){
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
          <img src="/public/visa.png" alt="Visa" />
          <img src="/mastercard.png" alt="MasterCard" />
          <img src="/public/paypal.png" alt="PayPal" />
          <img src="/apple_pay.png" alt="Apple Pay" />
          <img src="/airtel_momo.png" alt="Airtel Pay" />
          <img src="/mtn_momo.png" alt="MTN Pay" />
        </div>
      </div>
      <div className="footer-section">
        <h3 className="mr-0">Stay Connected</h3>
        <div className="social-icons flex">
          <a href="https://facebook.com"><i className="fab fa-facebook"></i><img src="/public/facebook.jpg" alt="facebook" /></a>
          <a href="https://twitter.com"><i className="fab fa-twitter"></i><img src="/public/x space.png" alt="twitter" /></a>
          <a href="https://instagram.com"><i className="fab fa-instagram"><img src="/public/instagram.jpg" alt="instagram" /></i></a>
          <a href="https://pinterest.com"><i className="fab fa-instagram"><img src="/public/pinterest.png" alt="pinterest" /></i></a>
          
        </div>
      </div>
    </footer>
  );
};
export default Footer

//     <div className='footer'>
//          <ul>
//          <li>

//          <Link to="/">Home</Link>
//          </li>
         
         
//          <li>
//          <Link to="/about">About us</Link>

//          </li>
         
//          <li>
//                 <Link to="/contact">Contact</Link>
//             </li>

//             <li>
//                 <Link to="/search">Search</Link>
//             </li>

//             <li>
//                 <Link to="/account">My Account</Link>
//             </li>

//             <li>
//                 <Link to="/deal">Deals</Link>
//             </li>

//             <li>
//                 <Link to="/categories">Categories</Link>
//             </li>

//         </ul>


//     </div>
  

// export default Footer
