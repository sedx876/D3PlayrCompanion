import React from 'react'
import '../styles/home.css'
import {Link} from 'react-router-dom'

const Home = () => {
  
  return (
    <div>
      <h1>Welcome to the D3 Playr Companion</h1>
      <br />
      <h5 className="card text-white bg-dark"><span id="welcome">
      This app is designed for avid players of Diablo 3. Keep 
      track of your characters and their set builds. You can also 
      keep track of drops you may need with the Farming List.
      <br />
      <br /> 
      Diablo III is a hack-and-slash action role-playing game 
      developed and published by Blizzard Entertainment as the 
      third installment in the Diablo franchise. It was released 
      for Microsoft Windows and OS X in May 2012, the PlayStation 
      3 and Xbox 360 in September 2013, the PlayStation 4 and 
      Xbox One in August 2014, and the Nintendo Switch in 
      November 2018. Players choose to play as one of seven 
      character classes – Barbarian, Crusader, Demon Hunter, 
      Monk, Necromancer, Witch Doctor, or Wizard – and are tasked 
      with defeating the Lord of Terror, Diablo, as in previous 
      games in the series. 
      <br />
      <br />
      An expansion pack entitled Reaper of 
      Souls was released for PC in March 2014. It was released 
      for consoles as part of the Diablo III: Ultimate Evil 
      Edition version in August 2014. The Rise of the Necromancer 
      pack was released for the Windows, macOS, and PlayStation 4 
      and Xbox One in June 2017. Diablo III: Eternal Collection, 
      combining Reaper of Souls and Rise of the Necromancer, was 
      released for PlayStation 4 and Xbox One in June 2017, and 
      for the Nintendo Switch in November 2018. 
      <br />
      <br />
      The game received 
      critical acclaim, although its always-on DRM feature was 
      criticized. The game set a new record for 
      "fastest-selling PC game" by selling over 3.5 million 
      copies in the first 24 hours of its release, and became the 
      best-selling PC game of 2012 by selling over 12 million 
      copies. As of August 2015, the number of sales had grown to 
      over 30 million. A sequel, Diablo IV, was announced in 2019 
      and is currently in development.</span></h5>
      <h4 className="card text-white bg-dark">
      To Begin: <Link to="/signup">Sign Up</Link> 
      or 
      <Link to="/login">Log In</Link></h4>
    </div>
    )
  }


export default Home