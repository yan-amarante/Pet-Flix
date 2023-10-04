import { useParams } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import "./styles.css"
import playIcon from "../../assets/playIcon.svg"
import pauseIcon from "../../assets/pauseIcon.svg"
import volumeIcon from "../../assets/volumeIcon.svg"
import volumeNivel from "../../assets/volumeNivel.svg"

function VideoPlayer() {

    const [video, setVideo] = useState(null)

    const [controls, setControls] = useState({
        paused: true,
        volume: 0.5
    })

    const { id } = useParams()

    const videoRef = useRef(null)

    useEffect(() => {
        chamarApi()
    }, [])

    async function chamarApi() {
        const res = await fetch(`https://api-petflix.onrender.com/videos/mostar-video/${id}`)
        const data = await res.json()

        setVideo(data)
    }

    function videoEstado() {

        if (videoRef.current.paused) {

            videoRef.current.play()
            setControls({ ...controls, paused: false })

        }
        else if (!videoRef.current.paused) {

            videoRef.current.pause()
            setControls({ ...controls, paused: true })

        }

    }

    function mudarVolume(evento) {
        videoRef.current.volume = evento.target.valueAsNumber
        setControls({ ...controls, volume: evento.target.valueAsNumber })
    }

    function mutarVolume() {
        if (videoRef.current.volume !== 0) {
            videoRef.current.volume = 0
            setControls({ ...controls, volume: 0 })
        }
        else if(videoRef.current.volume === 0){
            videoRef.current.volume = 0.5
            setControls({ ...controls, volume: 0.5 })
        }
    }

    return (
        <main className="container-player">
            <section className="video-container">
                <section className="controls-container">
                    {controls.paused ?
                        <img className="pause-icon" onClick={videoEstado} src={playIcon} />
                        :
                        <img className="pause-icon" onClick={videoEstado} src={pauseIcon} />
                    }
                    <section className="volume-slider">
                        <section onClick={mutarVolume} className="volume-icons">
                            <img className="volume-icon" src={volumeIcon} />
                            {controls.volume == 0 ?
                                <>
                                    <div className="diagonal-line"></div>
                                    <div className="half-circle"></div>
                                    < img className="volume-2" src={volumeNivel} />
                                </>
                                : null
                            }
                            {controls.volume < 0.5 ?
                                <div className="half-circle"></div>
                                :
                                (
                                    <>
                                        <div className="half-circle"></div>
                                        < img className="volume-2" src={volumeNivel} />
                                    </>
                                )
                            }
                        </section>
                        <input
                            type="range"
                            min={0}
                            max={1}
                            step={0.1}
                            value={controls.volume}
                            onChange={(evento) => mudarVolume(evento)}
                        />
                    </section>
                </section>
                {video !== null ?
                    <video ref={videoRef} className="video-player">
                        <source src={video[0].link} type="video/mp4" />
                        Seu navegador não suporta a reprodução de vídeo.
                    </video>
                    : null
                }
            </section>

        </main>
    )
}

export default VideoPlayer