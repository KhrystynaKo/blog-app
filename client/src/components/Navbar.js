import React from "react"
import { Link } from "react-router-dom"

import Favorites from "../features/favorite/Favorites"

const Navbar = () => {
  return (
    <nav className="uk-navbar uk-navbar-container" data-uk-navbar>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <Link to="/" href="posts-grid.html">
              Posts
            </Link>
          </li>
          <li>
            <a href="albums.html">Albums</a>
          </li>
        </ul>
      </div>
      <div className="uk-navbar-right">
        <div className="uk-navbar-item">
          <Favorites />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
