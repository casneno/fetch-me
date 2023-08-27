import { Link } from 'react-router-dom';

export default function HomePage(){

  return(
    <>
      <h1>Home Page</h1>
      <Link to="/profile">PROFILE PAGE ICON</Link>
      <Link to="/orders">CARTS PAGE ICON</Link>
      <Link to="/friends">FRIENDS PAGE ICON</Link>
      <Link to="/order/history">ORDER HISTORY PAGE ICON</Link>
    </>
  )
}