import windowsLogo from '../assets/windows.jpg'
import soundImg from '../assets/sound.jpg'

export default function Header() {
  const headerStyle = {
    zIndex: '1',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#002b9e',
    color: 'white',
    borderBottom: '3px solid black'
  }

  const headerDivOne = {
    maxHeight: '100px',
    display: 'flex',
    alignItems: 'center'
  }

  const imgStyle = {
    borderRight: '3px solid white', height: '100%'
  }
  return (
    <>
      <header style={headerStyle}>
        <div style={headerDivOne}>
          <img src={windowsLogo} alt="" style={imgStyle}/>
          <h1 style={{paddingLeft: '8px'}}>Garrys Mod Hello</h1>
        </div>
        <div style={{display: 'flex',
          alignItems: 'center', padding: '0 10px'}}>
          <img src={soundImg} alt="" />3:48
        </div>
      </header>
    </>
  )
}
  