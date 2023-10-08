/* eslint-disable react/self-closing-comp */
import {useState} from 'react'
import './index.css'

const VerticalColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('#0db81b')

  const handleColorChange = e => {
    setSelectedColor(e.target.value)
  }

  return (
    <div className="color-picker">
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
        className="color-input"
      />
      <div
        className="color-slider"
        style={{
          background: `linear-gradient(to bottom, #0db81b,#14de79,#14deda, ${selectedColor},#2514de,#deca14,#de2f14,#149bde #d10dc4)`,
        }}
      ></div>
    </div>
  )
}

export default VerticalColorPicker
