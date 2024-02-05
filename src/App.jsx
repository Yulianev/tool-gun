import './App.css'
import Header from './components/header'
import arrowImg from './assets/arrow-right.png'
import { useState } from 'react'
import { useGesture } from 'react-use-gesture'
import soundTool from './assets/toolSound.wav'

function App() {

  const [title, setTitle] = useState('Weld')

  const changeTitle = () => {
    const uc = window.prompt("Напиши название")
    setTitle(uc)
  }

  const bindTitle = useGesture({
    onTap: () => {
      changeTitle();
    }
  });

  const bindSound = useGesture({
    onTap: () => {
      setTimeout(() => {
        new Audio(soundTool).play();
      }, 1000); 
    }
  })

  const playMusic = () => {
    setTimeout(() => {new Audio(soundTool).play()}, 1000)
  }

  return (
    <>
      <Header></Header>
      <main>
        <div className='bg-img'></div>
        <div className='main-window' style={{zIndex: '5'}}>
          <div className='main-nav'>
            <div className='nav-item'>
            <img style={{transform: 'scaleX(-1)'}} src={arrowImg} alt="" />
              Back to Counter-Strike
              </div>
            <div className='nav-item'>
              Team Fortress 2
              <img src={arrowImg} alt="" />
            </div>
          </div>
          <div style={{zIndex: '10'}} className='infinity-stroke' >
            <marquee  className="marquee-1" scrollamount='45' truespeed="0">{title}</marquee>
          </div>
          <div className='info-section'>
            <div className='crash-stroke'>
              You have not crashed! <span {...bindTitle()} onClick={changeTitle}>Click Here</span> to crash!
            </div>
            <div className='info-section-details'>
              <div>
                <p>512.4 (12.4 om)</p>
                <p>16 {"=>"} 512.0000</p>
                <p>%i - %s..[]L[][][][]This program</p>
              </div>
              <div>
                <p>TTL:</p>
                <p>512.4/18.2 (4h)</p>
                <p>(pm/h 480 04) in DOS</p>
              </div>
              
            </div>
          </div>
          <div className='button-shoot'>
            <button {...bindSound} onClick={playMusic} ></button>
          </div>
        </div>
      </main>
      <footer>
        <div>File Open Quit</div>
      </footer>
    </>
  )
}
export default App
