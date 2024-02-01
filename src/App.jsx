import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import Modal from "./Modal"
import audioAmbience from '/ambience.mp3'
import useSound from "use-sound"
import { useEffect, useState } from "react"
import useToggle from "./use-toggle"
import SpotifyEmbed from './SpotifyEmbed'

function App() {

  const [playAmbience, { sound }] = useSound(audioAmbience, {loop: true, interrupt: false})
  const [userAcceptsAudio, setUserAcceptsAudio] = useState(false)
  const [isModalOpen, toggleIsModalOpen] = useToggle(true);

  useEffect(()=>{
    if(userAcceptsAudio) {
      playAmbience()
      sound.fade(0,1,3000)
    }
  },[isModalOpen])

  return <>

    <Canvas
      camera={{near:0.01, far:10}}
      shadows
      gl={{ preserveDrawingBuffer: true }}
      eventSource={document.getElementById('root')}
      eventPrefix="client"
    >
      <Experience />
    </Canvas>

    {isModalOpen && (
        <Modal
            title="Welcome! Allow sound?"
            handleDismiss={toggleIsModalOpen}
        >
          Allow sound?
          {' '}
            <button onClick={()=>{
              setUserAcceptsAudio(true)
              toggleIsModalOpen()
            }}>Yes</button>
            <button onClick={()=>{
              setUserAcceptsAudio(false)
              toggleIsModalOpen()
            }}>No</button>
        </Modal>
      )}

      <SpotifyEmbed />
    
  </>
}

export default App