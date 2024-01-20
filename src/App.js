import React from 'react'
import Header from './1-header/Header'
import Main from "./2-main/Main"
import Projects from './3-projects/Projects'
import Footer from './6-footer/Footer'
import Photos from './4-photos/Photos'
import Cities from './5-citys/Cities'
const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Projects />
      <Photos />
      <Cities />
      <Footer />
    </>
  )
}

export default App