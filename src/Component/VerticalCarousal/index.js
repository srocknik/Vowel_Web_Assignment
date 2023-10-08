import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
import {useState} from 'react'
import './index.css'

const items = [
  'https://live.staticflickr.com/65535/53243199463_68a2b3c3d5_m.jpg',
  'https://live.staticflickr.com/65535/53243400215_b93ac3129b_m.jpg',
  'https://live.staticflickr.com/65535/53242909096_eb3d9f8758_m.jpg',
  'https://live.staticflickr.com/65535/53243199463_68a2b3c3d5_m.jpg',
  'https://live.staticflickr.com/65535/53243400215_b93ac3129b_m.jpg',
  'https://live.staticflickr.com/65535/53242909096_eb3d9f8758_m.jpg',
  'https://live.staticflickr.com/65535/53243199463_68a2b3c3d5_m.jpg',
  'https://live.staticflickr.com/65535/53243400215_b93ac3129b_m.jpg',
]

const VerticalCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 3) % items.length)
  }

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 3 + items.length) % items.length)
  }

  return (
    <div className="vertical-carousel">
      <button id="up" className="arrow-btn" type="button" onClick={handlePrev}>
        <MdKeyboardArrowUp />
      </button>
      <div className="carousel-content">
        {items.map((item, index) => (
          <div
            key={item}
            className={`carousel-item ${
              index !== currentIndex ? 'active' : ''
            }`}
          >
            <img className="carousal-img" alt="carousal shoe" src={item} />
          </div>
        ))}
      </div>
      <button
        id="down"
        className="arrow-btn"
        type="button"
        onClick={handleNext}
      >
        <MdKeyboardArrowDown />
      </button>
    </div>
  )
}

export default VerticalCarousel
