import React from 'react'
import '../styles/externalLinks.css'
import offdia from '../images/offdia.jpg'
import icyveins from '../images/icyveins.png'
import gameguide from '../images/gameguide.jpg'
import diaforum from '../images/diaforum.png'
import serverstatus from '../images/serverstatus.jpg'
import diablo1 from '../images/diablo1.jpg'
import whimsyshire from '../images/whimsyshire.jpeg'
import cowlevel from '../images/cowlevel.png'
import petlist from '../images/petlist.png'
import pennetlist from '../images/pennetlist.jpg'
import wingslist from '../images/wingslist.png'
import d4 from '../images/d4.jpg'
import goblin from '../images/goblin.png'
import seasons from '../images/seasons.jpg'
import leggems from '../images/leggems.jpg'
import setdungeon from '../images/setdungeon.png'
import tristram from '../images/tristram.jpg'

class ExternalLinks extends React.Component {

  render() {
    return (
      <div>

        <div className="card text-white bg-dark mb-2" id="linkCard">
          <h4 className="card-title"><a href="https://us.diablo3.com/en/" target="_blank" rel="noopener noreferrer">Official Diablo Site</a></h4>
          <img className='offdia' alt="official diablo site" src={offdia}/>
          <p className="card-text">Official Diablo 3 source</p>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://www.icy-veins.com/" target="_blank" rel="noopener noreferrer">Icy Veins</a></h4>
          <img className='icyveins' alt="icy veins site" src={icyveins}/>
          <p className="card-text">Find pre-tested Builds</p>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://us.diablo3.com/en/game/" target="_blank" rel="noopener noreferrer">Game Guide</a></h4>
          <img className='gameguide' alt="gamer guide" src={gameguide}/>
          <p className="card-text">In-depth Gamer Guide</p>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://us.forums.blizzard.com/en/d3/" target="_blank" rel="noopener noreferrer">Diablo 3 Forums</a></h4>
          <img className='diaforum' alt="diablo forum" src={diaforum}/>
          <p className="card-text">Connect with other Diablo players</p>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://downdetector.com/status/diablo/" target="_blank" rel="noopener noreferrer">Diablo Server Status</a></h4>
          <img className='serverstatus' alt="serverstatus" src={serverstatus}/>
          <p className="card-text">Check current server status </p>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://www.gameflare.com/retro-game/diablo-1/" target="_blank" rel="noopener noreferrer">Original Diablo Game</a></h4>
          <img className='diablo1' alt="diablo1" src={diablo1}/>
          <p className="card-text">Retro Game Goodness</p>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Whimsyshire" target="_blank" rel="noopener noreferrer">Whimsyshire</a></h4>
          <img className='whimsyshire' alt="whimsyshire" src={whimsyshire}/>
          <p className="card-text">Whimsyshire Guide</p>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/The_Secret_Cow_Level" target="_blank" rel="noopener noreferrer">Secret Cow Level</a></h4>
          <img className='cowlevel' alt="cow level" src={cowlevel}/>
          <p className="card-text">Cow Level Guide</p>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://www.gameskinny.com/u3dqq/the-complete-list-of-diablo-3-pets-and-their-locations" target="_blank" rel="noopener noreferrer">Pet List</a></h4>
          <img className='petlist' alt="pet list" src={petlist}/>
          <p className="card-text">List of all Diablo 3 Pets</p>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Ascendant_Pennants" target="_blank" rel="noopener noreferrer">Pennet List</a></h4>
          <img className='pennetlist' alt="pennet list" src={pennetlist}/>
          <p className="card-text">List of all Diablo 3 Pennets</p>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Cosmic_Wings" target="_blank" rel="noopener noreferrer">Wings List</a></h4>
          <img className='wingslist' alt="wings list" src={wingslist}/>
          <p className="card-text">List of all Diablo 3 Wings</p>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo4.blizzard.com/en-us/" target="_blank" rel="noopener noreferrer">Diablo 4</a></h4>
          <img className='d4' alt="diablo 4" src={d4}/>
          <p className="card-text">The future of the Diablo Franchise</p>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://www.icy-veins.com/d3/goblin-farming-guide" target="_blank" rel="noopener noreferrer">Goblin Hunting Guide</a></h4>
          <img className='goblin' alt="goblin" src={goblin}/>
          <p className="card-text">Discover the best places to find them</p>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Season#:~:text=Seasons%20are%20a%20feature%20of,end%2Dgame%20of%20Diablo%20III." target="_blank" rel="noopener noreferrer">Seasons Guide</a></h4>
          <img className='seasons' alt="seasons" src={seasons}/>
          <p className="card-text">Learn more about Seasons</p>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Legendary_Gems" target="_blank" rel="noopener noreferrer">Legendary Gems</a></h4>
          <img className='leggems' alt="legendary gems" src={leggems}/>
          <p className="card-text">List of all Legendary Gems</p>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Set_Dungeon" target="_blank" rel="noopener noreferrer">Set Dungeons</a></h4>
          <img className='setdungeon' alt="set dungeon" src={setdungeon}/>
          <p className="card-text">Learn about Set Dungeons</p>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/The_Darkening_of_Tristram" target="_blank" rel="noopener noreferrer">Darkening of Tristram</a></h4>
          <img className='tristram' alt="darkening of tristram" src={tristram}/>
          <p className="card-text">The Secret Annual Event</p>
        </div>
      </div>
        
      
    )
  }
}

export default ExternalLinks