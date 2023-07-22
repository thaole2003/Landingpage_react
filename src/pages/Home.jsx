import React from 'react'
import Banner from '../components/Banner';
import Bring from '../components/Bring';
import DropShip from '../components/DropShip';
import Pdo from '../components/Pdo';
import Review from '../components/Review';
import StartPOD from '../components/StartPOD';
const Home = () => {
  return (
    <div>
      <Banner/>
      <Pdo/>
      <Bring/>
      <DropShip/>
      <Review/>
      <StartPOD/>
    </div>
  )
}

export default Home