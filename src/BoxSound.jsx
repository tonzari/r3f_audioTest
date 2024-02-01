import useSound from "use-sound"
import { useStore } from './store.js'

export default function BoxSound({audioFile, spotifyId, ...props}) {

    if(!audioFile) console.error("You must pass an audio file as a prop.")

    const [play] = useSound(audioFile, {loop: false, interrupt: true})
    

    return <>
        <mesh 
            onClick={()=>{
                const spotify = useStore.getState().embeddedController
                spotify.loadUri(spotifyId)
                play()
            }}
            {...props}
        >
            <meshNormalMaterial />
            <boxGeometry />
        </mesh>
    </>
}