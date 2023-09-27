import "./styles.css"
import playIcon from "../../assets/playIcon.svg"
import { useEffect, useState } from "react"

let logoTeste = "https://fisiocarepet.com.br/wp-content/uploads/2021/12/pastor-1.jpg"

function Home() {

    const [videos, setVideos] = useState(null)

    useEffect(() => {
        chamarApi()
    }, [])

    async function chamarApi() {
        const res = await fetch("http://localhost:3000/videos/listar-videos")
        const data = await res.json()

        setVideos(data)
    }
    return (
        <main className="container-home">
            <HeroImage />
            <video width="320" height="240" controls>
                <source src='https://drive.google.com/file/d/1bC40e-8nWruNllenYoVDiJ7TUXZ9ioxY/view?usp=sharing' type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        </main>
    )
}

function HeroImage() {
    return (
        <section className="hero-container">
            <img className="img-home" src={logoTeste} />
            <article className="hero-article">
                <p className="hero-image-info">DOGTV Stimulation </p>
                <h2 className="hero-image-title">Zoomies</h2>
                <section>
                    <button className="hero-botao">
                        <img src={playIcon} />
                        <label className="hero-botao-label">Assistir</label>
                    </button>
                </section>
            </article>
            <div className="fade-horizontal"></div>
            <div className="fade-vertical"></div>
        </section>
    )
}

export default Home