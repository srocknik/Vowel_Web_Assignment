/* eslint-disable react/no-unescaped-entities */
import PriceRangeSlider from '../PriceRangeSlider'
import VerticalColorPicker from '../VerticleColorPickerSlider'
import VerticalCarousel from '../VerticalCarousal'
import './index.css'

const ProductDetails = () => (
  <div className="detail-bg-container">
    <div className="details-first-section">
      <p>
        <span className="detail-highlighted-text">New</span>Shoes Collection
      </p>
      <h1 className="home-heading">Live In Trend</h1>
      <p className="detail-home-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting //
        eslint-disable-next-line react/no-unescaped-entities industry. Lorem //
        eslint-disable-next-line react/no-unescaped-entities Ipsum has been the
        industry's standard dummy text ever since the 1500s
      </p>
      <button type="button" className="shop-now-btn">
        Shop Now
      </button>
    </div>
    <div className="vertical-carousal-container">
      <VerticalCarousel />
    </div>
    <div className="vertical-slider-container">
      <VerticalColorPicker />
    </div>
    <div className="main-product-detail-container">
      <img
        className="nike-shoe"
        alt="nike shoe"
        src="https://live.staticflickr.com/65535/53242747271_a04dff2ec6_m.jpg"
      />
      <ul className="size-container">
        <li className="size-list-container">
          <p className="dot">.</p>
          <p className="size-value">36</p>
        </li>
        <li className="size-list-container">
          <p className="dot">.</p>
          <p className="size-value">37</p>
        </li>
        <li className="size-list-container">
          <p className="dot">.</p>
          <p className="size-value">38</p>
        </li>
        <li className="size-list-container" id="selected">
          <p className="dot">.</p>
          <p className="size-value">39</p>
        </li>
        <li className="size-list-container">
          <p className="dot">.</p>
          <p className="size-value">40</p>
        </li>
        <li className="size-list-container">
          <p className="dot">.</p>
          <p className="size-value">41</p>
        </li>
        <li className="size-list-container">
          <p className="dot">.</p>
          <p className="size-value">42</p>
        </li>
      </ul>
      <div className="main-product-price-slider">
        <PriceRangeSlider />
      </div>
    </div>
  </div>
)

export default ProductDetails
