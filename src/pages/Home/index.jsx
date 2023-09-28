import "./styles.css"
import playIcon from "../../assets/playIcon.svg"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

let logoTeste = "https://fisiocarepet.com.br/wp-content/uploads/2021/12/pastor-1.jpg"

function Home() {

    const [videos, setVideos] = useState(null)

    useEffect(() => {
        chamarApi()
    }, [])

    async function chamarApi() {
        const res = await fetch("https://api-petflix.onrender.com/videos/listar-videos")
        const data = await res.json()

        setVideos(data)
    }

    return (
        <main className="container-home">
            {videos !== null ?
                <HeroImage id={videos[0].id} titulo={videos[0].titulo} thumbnail={videos[0].thumbnail} />
                : null}
            {videos !== null ?
                <ul className="lista-videos">
                    {videos.map((video) => {
                        return <li key={video.id}>
                            <Link to={`/videoPlayer/${video.id}`}>
                                <img className="thumbnail" src={video.thumbnail} />
                                <h2 className="titulo-video">{video.titulo}</h2>
                            </Link>
                        </li>
                    })}
                </ul>
                : null
            }
        </main>
    )
}

function HeroImage({ id, titulo, thumbnail }) {
    return (
        <section className="hero-container">
            <img className="img-home" src={thumbnail} />
            <article className="hero-article">
                <h2 className="hero-image-title">{titulo}</h2>
                <section>
                    <Link className="hero-botao" to={`/videoPlayer/${id}`}>
                        <img src={playIcon} />
                        <label className="hero-botao-label">Assistir</label>
                    </Link>
                </section>
            </article>
            <div className="fade-horizontal"></div>
            <div className="fade-vertical"></div>
        </section>
    )
}

export default Home