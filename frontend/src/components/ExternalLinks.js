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
import hires from '../images/hires.png'
import weapons from '../images/weapons.png'
import transmog from '../images/transmog.jpg'
import rifts from '../images/rifts.jpg'
import vault from '../images/vault.jpg'
import cube from '../images/cube.jpg'
import barbarian from '../images/barbarian.jpg'
import crusader from '../images/crusader.jpg'
import demonhunter from '../images/demonhunter.jpg'
import monk from '../images/monk.jpeg'
import necro from '../images/necro.jpg'
import witchdr from '../images/witchdr.jpg'
import wizard from '../images/wizard.jpg'


class ExternalLinks extends React.Component {

  render() {
    return (
      <div>


        <div className="card text-white bg-dark mb-2" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Barbarian_(Diablo_III)" target="_blank" rel="noopener noreferrer">Barbarian</a></h4>
          <img className='barbarian' alt="barbarian" src={barbarian}/>
        </div>

        <div className="card text-white bg-dark mb-2" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Crusader_(Diablo_III)" target="_blank" rel="noopener noreferrer">Crusader</a></h4>
          <img className='crusader' alt="crusader" src={crusader}/>
        </div>

        <div className="card text-white bg-dark mb-2" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Demon_Hunter_(Diablo_III)" target="_blank" rel="noopener noreferrer">Demon Hunter</a></h4>
          <img className='demonhunter' alt="demon hunter" src={demonhunter}/>
        </div>

        <div className="card text-white bg-dark mb-2" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Monk_(Diablo_III)" target="_blank" rel="noopener noreferrer">Monk</a></h4>
          <img className='monk' alt="monk" src={monk}/>
        </div>

        <div className="card text-white bg-dark mb-2" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Necromancer_(Diablo_III)" target="_blank" rel="noopener noreferrer">Necromancer</a></h4>
          <img className='necro' alt="necromancer" src={necro}/>
        </div>

        <div className="card text-white bg-dark mb-2" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Witch_Doctor" target="_blank" rel="noopener noreferrer">Witch Doctor</a></h4>
          <img className='witchdr' alt="witch doctor" src={witchdr}/>
        </div>

        <div className="card text-white bg-dark mb-2" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Wizard_(Diablo_III)" target="_blank" rel="noopener noreferrer">Wizard</a></h4>
          <img className='wizard' alt="wizard" src={wizard}/>
        </div>

        <div className="card text-white bg-dark mb-2" id="linkCard">
          <h4 className="card-title"><a href="https://us.diablo3.com/en/" target="_blank" rel="noopener noreferrer">Official Diablo Site</a></h4>
          <img className='offdia' alt="official diablo site" src={offdia}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://www.icy-veins.com/" target="_blank" rel="noopener noreferrer">Icy Veins</a></h4>
          <img className='icyveins' alt="icy veins site" src={icyveins}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://us.diablo3.com/en/game/" target="_blank" rel="noopener noreferrer">Game Guide</a></h4>
          <img className='gameguide' alt="gamer guide" src={gameguide}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://us.forums.blizzard.com/en/d3/" target="_blank" rel="noopener noreferrer">Diablo 3 Forums</a></h4>
          <img className='diaforum' alt="diablo forum" src={diaforum}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://downdetector.com/status/diablo/" target="_blank" rel="noopener noreferrer">Diablo Server Status</a></h4>
          <img className='serverstatus' alt="serverstatus" src={serverstatus}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://www.gameflare.com/retro-game/diablo-1/" target="_blank" rel="noopener noreferrer">Original Diablo Game</a></h4>
          <img className='diablo1' alt="diablo1" src={diablo1}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Whimsyshire" target="_blank" rel="noopener noreferrer">Whimsyshire</a></h4>
          <img className='whimsyshire' alt="whimsyshire" src={whimsyshire}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/The_Secret_Cow_Level" target="_blank" rel="noopener noreferrer">Secret Cow Level</a></h4>
          <img className='cowlevel' alt="cow level" src={cowlevel}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://www.gameskinny.com/u3dqq/the-complete-list-of-diablo-3-pets-and-their-locations" target="_blank" rel="noopener noreferrer">Pet List</a></h4>
          <img className='petlist' alt="pet list" src={petlist}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Ascendant_Pennants" target="_blank" rel="noopener noreferrer">Pennet List</a></h4>
          <img className='pennetlist' alt="pennet list" src={pennetlist}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Cosmic_Wings" target="_blank" rel="noopener noreferrer">Wings List</a></h4>
          <img className='wingslist' alt="wings list" src={wingslist}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo4.blizzard.com/en-us/" target="_blank" rel="noopener noreferrer">Diablo 4</a></h4>
          <img className='d4' alt="diablo 4" src={d4}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://www.icy-veins.com/d3/goblin-farming-guide" target="_blank" rel="noopener noreferrer">Goblin Hunting</a></h4>
          <img className='goblin' alt="goblin" src={goblin}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Season#:~:text=Seasons%20are%20a%20feature%20of,end%2Dgame%20of%20Diablo%20III." target="_blank" rel="noopener noreferrer">Seasons Guide</a></h4>
          <img className='seasons' alt="seasons" src={seasons}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Legendary_Gems" target="_blank" rel="noopener noreferrer">Legendary Gems</a></h4>
          <img className='leggems' alt="legendary gems" src={leggems}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Set_Dungeon" target="_blank" rel="noopener noreferrer">Set Dungeons</a></h4>
          <img className='setdungeon' alt="set dungeon" src={setdungeon}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/The_Darkening_of_Tristram" target="_blank" rel="noopener noreferrer">Darkening of Tristram</a></h4>
          <img className='tristram' alt="darkening of tristram" src={tristram}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Followers" target="_blank" rel="noopener noreferrer">Hires</a></h4>
          <img className='hires' alt="hires" src={hires}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Weapons" target="_blank" rel="noopener noreferrer">Weaponry</a></h4>
          <img className='weapons' alt="weapons" src={weapons}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Transmogrification" target="_blank" rel="noopener noreferrer">Transmogrification</a></h4>
          <img className='transmog' alt="transmog" src={transmog}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://blizzardwatch.com/2020/08/14/diablo-greater-rifts/" target="_blank" rel="noopener noreferrer">Rifts</a></h4>
          <img className='rifts' alt="rifts" src={rifts}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/The_Vault" target="_blank" rel="noopener noreferrer">The Vault</a></h4>
          <img className='vault' alt="vault" src={vault}/>
        </div>

        <div className="card text-white bg-dark" id="linkCard">
          <h4 className="card-title"><a href="https://diablo.fandom.com/wiki/Kanai%27s_Cube" target="_blank" rel="noopener noreferrer">Kanai's Cube</a></h4>
          <img className='cube' alt="cube" src={cube}/>
        </div>
      </div>
        
      
    )
  }
}

export default ExternalLinks