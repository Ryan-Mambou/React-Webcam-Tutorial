import { useState } from 'react'
import './App.css'
import WebcamComponent from './components/WebcamComponent'

function App() {
  const [showCamera, setShowCamera] = useState(false)
  const [imageUrl, setImageUrl] = useState<null | string>(null)

  return (
    <div>
      <button onClick={() => setShowCamera(true)}>Show Camera</button>
      <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '2rem'
    }}>
        {showCamera && 
        <WebcamComponent 
        setShowCamera={setShowCamera}
        setImageUrl={setImageUrl}/>
        }
        {imageUrl && 
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              alignItems: 'center'
            }}>
            <img src={imageUrl} 
            alt="caputured Image" 
            style={{
              borderRadius: "100%",
              height: '300px',
              width: '300px',
              objectFit: 'cover'
            }}/>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '5px'
            }}>
              <button onClick={() => {
                setShowCamera(true)
                setImageUrl(null)
              }}>Retake</button>
            </div>
          </div>}
      </div>
    </div>
  )
}

export default App
