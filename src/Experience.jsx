import { Perf } from "r3f-perf"
import { OrbitControls } from '@react-three/drei'
import BoxSound from "./BoxSound"
 
export default function Experience() {

    return <>
        <Perf position={'bottom-left'}/>
        <OrbitControls />
        <BoxSound position={[-1.2,0,0]} audioFile={'/bmo.mp3'} spotifyId={'spotify:episode:7makk4oTQel546B0PZlDM5'}/>
        <BoxSound position={[0,0,0]} audioFile={'/procreateTest.mp3'} spotifyId={'spotify:episode:43cbJh4ccRD7lzM2730YK3'}/>
        <BoxSound position={[1.2,0,0]} audioFile={'/squidward.mp3'} spotifyId={'spotify:episode:6I3ZzCxRhRkNqnQNo8AZPV'}/>
    </> 
}