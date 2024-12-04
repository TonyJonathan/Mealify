import "../styles/Banner.css"
import logo from "../assets/logo.svg"

function Banner() {
  return (
    <>
      <h1 className="top-banner">Votre menu de la semaine en un clic !</h1>
      <div className="div-logo">
        <img src={logo} alt="mealify"></img>
      </div>
    </>
  )
}

export default Banner