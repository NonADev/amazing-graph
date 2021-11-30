import './LandPage.css';

import imagenReuniao from '../../assets/team.jpg';
import burguerMenu from '../../assets/burguer-menu.svg';

function LandPage() {
    return (
        <>
            <nav className="escopo-flex flex-navbar">
                <a tabIndex="-1" id="home" href="#home" className="primary-color link titulo-pagina">DevChallenge</a>
                <img className="burguer-menu" src={burguerMenu} alt="Menu de amburguer" />
                <ul className="lista-menu">
                    <li>Home</li>
                    <li>Features</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="escopo-flex flex-center">
                <img src={imagenReuniao} alt="Reunião mostrando gráficos" className="imagem-reuniao" />
            </div>
            <div className="escopo-flex-principal">
                <h1 className="secondary-color titulo-principal">Create amazing graphics</h1>
                <p className="secondary-color texto-secundario">Colaborate and create beautiful graphics with your team</p>
                <button className="button button-primary">Start now</button>
            </div>
        </>
    )
}

export default LandPage;