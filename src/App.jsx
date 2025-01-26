import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <div id="wrapper">
        <Header name="Home"/>
        <Header name="About"/>
        <Header name="Contact"/>
        <Header name="Menu"/>
        <Body>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, adipisci sint dolore iste animi optio laborum libero provident. Quibusdam eum voluptatem inventore ipsa numquam quaerat provident cumque, explicabo totam odit.</p>
        </Body>
        <Footer/>
      </div>
    </>
  )
}

export default App