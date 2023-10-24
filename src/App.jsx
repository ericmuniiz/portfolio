import "./App.css";

function App () {

  return (
    <>
    <header>
      <div className="header-name"> 
      Portifolio
      </div>
      <div className="header-icons">
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="javascript" />
        <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" alt="css" />
        <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="html" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" alt="react" />

      </div>
    </header>
      <div className="about-me">
        <div className="infos-about">
        <img src="eric-dev.jpeg" alt="" />
        <h1>Olá Mundo!</h1>
        <h3>Eu sou o Eric e este é meu portifolio onde compartilho como tem sido minha evolução no mundo da programação</h3>
        </div>
      </div>

      <div className="projects">
        <h1> Meus Projetos</h1>
          <ul >
            <li></li>
            <li><img src="https://sites.ufpe.br/peteconomia/wp-content/uploads/sites/12/2020/10/PetFlix.jpg" alt="petflix" /></li>
            <li><img src="https://pm1.narvii.com/6617/6b4b1f80ce28a54ce3f8b8db79548067d3dc62d8_00.jpg" alt="rick&morty" /></li>
            <li></li>
          </ul>
        </div>
    </>
  )
}

export default App;