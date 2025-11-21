import React from 'react'
import Restaurant from './components/Basics/restaurant'
import OpeningPage from './components/Opening page/openingpage'
import OrderPage from './components/Order page/orderpage'

const App = () => {
  return (
    <div>
    <OpeningPage />
      <Restaurant />
      {/* <OrderPage /> */}
    </div>
  )
}

export default App

