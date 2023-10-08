import {useState} from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './index.css'

const PriceRangeSlider = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]) // Initial price range values

  const handlePriceChange = value => {
    setPriceRange(value)
  }

  return (
    <div>
      <Slider
        min={0}
        max={1000}
        step={10}
        range
        value={priceRange}
        onChange={handlePriceChange}
      />
      <p className="price-range-slider-text">
        Price Range: ${priceRange[0]} - ${priceRange[1]}
      </p>
    </div>
  )
}

export default PriceRangeSlider
