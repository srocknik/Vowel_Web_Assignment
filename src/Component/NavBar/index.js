import {BiHeart} from 'react-icons/bi'
import {FiShoppingBag} from 'react-icons/fi'

import './index.css'

const NavBar = () => (
  <nav className="nav-bar">
    <div className="lang-select-container">
      <select className="select-container">
        <option className="option-el">English</option>
        <option className="option-el">Hindi</option>
        <option className="option-el">Marathi</option>
      </select>
      <select className="select-container">
        <option className="option-el">USD</option>
        <option className="option-el">INR</option>
        <option className="option-el">DIRAM</option>
      </select>
      <button className="contact-button" type="button">
        Contact
      </button>
    </div>
    <p className="nav-text">100% secure delivery</p>
    <div className="like-bag-container">
      <BiHeart className="like-img" />
      <FiShoppingBag className="like-img" />
    </div>
  </nav>
)

export default NavBar
