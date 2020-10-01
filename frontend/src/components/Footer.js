import React from 'react'
import '../styles/footer.css'
import logo from  '../images/github-alt-brands.svg'
import mature from '../images/mature.png'


const Footer = () => {

  return(
    <footer className="footer text-white">
      <p>&copy;2020   
      <span role="img" aria-label="devil">👹</span>D3PlayrCompanion<span role="img" aria-label="devil">👹</span> 
      --Sharon Watkins React/Redux Project For Flatiron School.</p>
      <p>This app has no affiliation with Diablo 3 or Blizzard Entertainment, INC.</p>
      <p><span><img className='mature' alt="mature rating" src={mature}/></span>Rated Mature 17+ by the ESRB for Blood, Gore and Violence</p>
      <a href="https://github.com/sedx876/D3PlayrCompanion" target="_blank" rel="noopener noreferrer"><img className='gH' alt="github link" src={logo}/></a>
    </footer>
  )
}

export default Footer