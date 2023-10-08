import {AiFillStar} from 'react-icons/ai'

import './index.css'

const ListOfProducts = props => {
  const {productList} = props
  const {title, url} = productList

  return (
    <li className="all-product-list-container">
      <img className="all-product-img" alt={title} src={url} />
      <p className="all-product-title">{title}</p>
      <div>
        <AiFillStar className="star-icon" />
        <AiFillStar className="star-icon" />
        <AiFillStar className="star-icon" />
        <AiFillStar className="star-icon" />
        <AiFillStar className="star-icon" />
      </div>
      <div className="all-product-btn-price-container">
        <button className="all-product-btn" type="button">
          ADD TO CART
        </button>
        <p className="all-product-price">$216.23</p>
      </div>
    </li>
  )
}

export default ListOfProducts
