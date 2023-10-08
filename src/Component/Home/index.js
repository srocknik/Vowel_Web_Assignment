/* eslint-disable react/no-unescaped-entities */
import ReactPlayer from 'react-player'

import './index.css'

const Home = () => {
  const videoUrl = 'https://youtu.be/O-JXUhhIRHU'
  return (
    <div className="video-player-container">
      <ReactPlayer url={videoUrl} width="100%" height="100vh" />
      <div className="overlay-element">
        <p>
          <span className="highlighted-text">New</span>Shoes Collection
        </p>
        <h1 className="home-heading">Live In Trend</h1>
        <p className="home-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting //
          eslint-disable-next-line react/no-unescaped-entities industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
        <button type="button" className="shop-now-btn">
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default Home
