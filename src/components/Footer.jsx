import { Link } from 'react-router-dom'

function Footer(){
  return (
    <div className='footer'>
         <ul>
         <li>

         <Link to="/">Home</Link>
         </li>
         
         
         <li>
         <Link to="/about">About us</Link>

         </li>
         
         <li>
                <Link to="/contact">Contact</Link>
            </li>

            <li>
                <Link to="/search">Search</Link>
            </li>

            <li>
                <Link to="/account">My Account</Link>
            </li>

            <li>
                <Link to="/deal">Deals</Link>
            </li>

            <li>
                <Link to="/categories">Categories</Link>
            </li>

        </ul>


    </div>
  )
}

export default Footer
