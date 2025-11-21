import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Restaurant from './components/Basics/restaurant'
import OpeningPage from './components/Openingpage/openingpage'
import OrderPage from './components/Orderpage/orderpage'
import Footer from './components/Footer/footer'

const App = () => {
  return (
    <div>
    <OpeningPage />
      <Restaurant />
      {/* <OrderPage /> */}
      <Footer />
    </div>

  )
}

export default App

