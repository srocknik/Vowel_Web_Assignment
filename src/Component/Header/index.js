import {BsSearch} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <header className="header-container">
    <img
      className="logo-image"
      alt="logo"
      src="https://live.staticflickr.com/65535/53240768740_5effff53f0_m.jpg"
    />
    <div className="header-button-container">
      <button className="header-btn" type="button">
        HOME
      </button>
      <button className="header-btn" type="button">
        MAN
      </button>
      <button className="header-btn" type="button">
        WOMAN
      </button>
      <button className="header-btn" type="button">
        KIDS
      </button>
      <select className="header-select-container">
        <option>SHOP</option>
        <option>CART</option>
      </select>
      <button className="header-btn" type="button">
        BLOG
      </button>
    </div>
    <div className="input-container">
      <input type="text" className="input-el" placeholder="Search here" />
      <div className="search-icon-container">
        <BsSearch className="search-icon" />
      </div>
    </div>
    <div className="person-text-container">
      <img
        className="person-image"
        alt="person"
        src="https://live.staticflickr.com/65535/53240307376_7f0193f7f6_m.jpg"
      />
      <div>
        <p className="sign-in-text">Hello sign in</p>
        <h1 className="header-heading">Account & Lists</h1>
      </div>
    </div>
  </header>
)

export default Header
