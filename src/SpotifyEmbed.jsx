import { useEffect } from "react"
import { useStore } from "./store"

export default function SpotifyEmbed() {
    // https://open.spotify.com/playlist/6d5ZdiFguIGD78lOmlh11f
    console.log(SpotifyEmbed)
    const setEmbeddedController = useStore((state) => state.setEmbeddedController)

    useEffect(()=>{
        window.onSpotifyIframeApiReady = (IFrameAPI) => {
            const element = document.getElementById('embed-iframe')
            const options = {
                uri: 'spotify:playlist:6d5ZdiFguIGD78lOmlh11f'
              }
            const callback = (EmbedController) => {
                setEmbeddedController(EmbedController)
            }
            IFrameAPI.createController(element, options, callback)
        }
    },[])

    return <div className="container">
        <div className={'spotify'} id="embed-iframe"></div>
    </div>
}
