import "../styles/Banner.css"
import logo from "../assets/logo.svg"
import searchLogo from "../assets/searchLogo.png"

function Banner() {
  return (
    <>
      <h1 className="top-banner">Votre menu de la semaine en un clic !</h1>
      <div className="div-logo">
        <img src={logo} alt="mealify"></img>
        <div className="div-search-input">
          <img src={searchLogo} alt="search logo" width="30px" height="30px" className="search-logo"></img>
          <input type="text" placeholder="Rechercher..." className="search-input"></input>
        </div>
      </div>
    </>
  )
}

export default Banner