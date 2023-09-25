import "./styles.css"
import playIcon from "../../assets/playIcon.svg"

let logoTeste = "https://fisiocarepet.com.br/wp-content/uploads/2021/12/pastor-1.jpg"

function Home() {
    return (
        <main className="container-home">
            <HeroImage />
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
                        <img src={playIcon}/>
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