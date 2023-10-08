import {MdKeyboardArrowDown} from 'react-icons/md'
import ListOfProducts from '../ListOfProducts'
import PriceRangeSlider from '../PriceRangeSlider'
import './index.css'

const categoriesList = [
  {
    title: 'Canvas Sneakers',
    price: '1101',
    id: '1',
  },
  {
    title: 'Plimsoll Sneaker',
    price: '813',
    id: '2',
  },
  {
    title: 'Slip On Sneakers',
    price: '284',
    id: '3',
  },
  {
    title: 'Velcro Sneakers',
    price: '592',
    id: '4',
  },
  {
    title: 'Velcro Sneakers',
    price: '181',
    id: '5',
  },
]

const productList = [
  {
    title: 'Nike Kyrie 7 TB Midnight',
    url: 'https://live.staticflickr.com/65535/53240485667_f6d50e81bd_m.jpg',
    id: '1',
  },
  {
    title: 'Preventing Sneaker Bots',
    url: 'https://live.staticflickr.com/65535/53241656963_6fc5965f14_m.jpg',
    id: '2',
  },
  {
    title: 'RS-X CNV Sneakers For Men',
    url: 'https://live.staticflickr.com/65535/53241729529_3203a220a2_m.jpg',
    id: '3',
  },
  {
    title: 'Cali KARL Sneakers',
    url: 'https://live.staticflickr.com/65535/53241730099_a0f179fa1b_m.jpg',
    id: '4',
  },
]

const AllProducts = () => (
  <div className="all-product-bg-container">
    <div className="top-section">
      <h1 className="top-section-heading">FILTERS</h1>
      <select className="all-product-select-el">
        <option className="all-product-option-el">Recommended</option>
        <hr />
        <option className="all-product-option-el">Popular Choice</option>
        <option className="all-product-option-el">Price High to Low</option>
        <option className="all-product-option-el">Price Low to High</option>
        <option className="all-product-option-el">Newest First</option>
      </select>
    </div>
    <div className="bottom-section-container">
      <div className="filter-container">
        <div className="category-heading-icon-container">
          <h1 className="category-heading">CATEGORIES</h1>
          <MdKeyboardArrowDown className="category-icon" />
        </div>
        <ul className="category-unorder-list-container">
          {categoriesList.map(each => (
            <li key={each.id} className="category-list-container">
              <button type="button" className="category-list-button-container">
                <p className="category-list-item">{each.title}</p>
                <p className="category-list-item">{each.price}</p>
              </button>
            </li>
          ))}
          <button type="button" className="more-text">
            More
          </button>
          <div className="slider-container">
            <div className="slider-heading-container">
              <h1 className="slider-price-heading">PRICE</h1>
              <MdKeyboardArrowDown className="category-icon" />
            </div>
            <PriceRangeSlider />
          </div>
        </ul>
      </div>
      <div className="all-product-section-lg-device">
        <ul className="all-product-un-order-list-container">
          {productList.map(each => (
            <ListOfProducts key={each.id} productList={each} />
          ))}
        </ul>
        <ul className="all-product-un-order-list-container">
          {productList.map(each => (
            <ListOfProducts key={each.id} productList={each} />
          ))}
        </ul>
        <ul className="all-product-un-order-list-container">
          {productList.map(each => (
            <ListOfProducts key={each.id} productList={each} />
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export default AllProducts
