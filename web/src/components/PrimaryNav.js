import React, { Fragment } from "react"
import { Link } from "react-router-dom"

function PrimaryNav({ signedIn }) {
  return (
    <nav className="primary">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/admin/products">Admin</Link>
        </li>
        {signedIn ? (
          <Fragment>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/signout">Sign Out</Link>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  )
}

export default PrimaryNav
