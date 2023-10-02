import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import "./styles.css"
import playIcon from "../../assets/playIcon.svg"
import pauseIcon from "../../assets/pauseIcon.svg"

function VideoPlayer() {

    const [video, setVideo] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        chamarApi()
    }, [])

    async function chamarApi() {
        const res = await fetch(`https://api-petflix.onrender.com/videos/mostar-video/${id}`)
        const data = await res.json()

        setVideo(data)
    }


    return (
        <main className="container-player">
            <section className="video-container">
                <section className="controls-container">
                    <img src={playIcon}/>
                </section>
                {video !== null ?
                <video className="video-player">
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