import "./App.css";


function App () {

  return (
    <>
    <div className="container">
    
    <header>
      <div className="header-name" > 
      Portfolio
      </div>
      <div className="header-icons">
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="javascript" />
        <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" alt="css" />
        <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="html" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" alt="react" />

      </div>
    </header>

    <div className="menu">
          <ul>
            <li id="menu-home"><a href="#home"><img src="https://cdn-icons-png.flaticon.com/256/25/25694.png" alt="" /><p>Home</p></a></li>
            <li id="menu-projects"><a href="#projects"><img src="https://cdn-icons-png.flaticon.com/512/104/104068.png" alt="" /><p>Projects</p></a></li>
            <li id="menu-contacts"><a href="#contact"><img src="https://svgsilh.com/svg/304080.svg" alt="" /><p>Contact</p></a></li>
          </ul>
      </div>
      <div id="home"></div>
      <div className="about-me"  >
        <div className="infos-about">
        <img src="eric-dev.jpeg" alt="" />
        <div className="infos-title"><h1>Olá! Eu sou o </h1> <p id="Eric"> Eric</p></div>
        
        <h3>Aqui é onde compartilho meu desenvolvimento na programação</h3>
        </div>
      </div>
      
      <div className="projects" id="projects">
      <h1>Meus Projetos</h1>
        <ul>
          <li>
            <a href="https://vite-petflix.vercel.app/"><img src="https://cdn.mindminers.com/blog/uploads/2022/11/pets.png" className="img-projects" /></a>
          </li>
          <li>
            <a href="https://app-rick-erics-projects-714eef46.vercel.app/"><img src="https://m.media-amazon.com/images/S/pv-target-images/5fb48c45e9ef92942d6ba6c84b6dd2d314b39a4833adabb18c110f95f6bdfa45.jpg" className="img-projects"/></a>
          </li>
        </ul>
      </div>
    </div>  
    </>
  )
}

export default App;