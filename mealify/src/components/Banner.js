import "../styles/Banner.css"
import logo from "../assets/logo.svg"
import searchLogo from "../assets/searchLogo.png"
import cuterly from "../assets/icons/cuterly.svg"

function Banner({ searchValue, setSearchValue }) {
  
  return (
    <>
      <h1 className="top-banner">Votre menu de la semaine en un clic !</h1>
      <div className="div-logo">
        <img src={logo} alt="mealify"></img>
        <div className="div-search-input">
          <img src={searchLogo} alt="search logo"  className="search-logo"></img>
          <input
            type="text"
            placeholder="Rechercher..."
            className="search-input"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          >
          </input>
        </div>
        <img src={cuterly} alt="cuterly" className="cuterly" />
      </div>
      <div className="line"></div>
    </>
  )
}

export default Banner