import React from 'react'
import '../../styles/Header.css'
import pokemon from '../../assets/pokemon.png'
const Header = () => {
  return (
    <>
        <header className="header">
            <div className="logo">
            <img  className="pokemon-logo" src={pokemon} alt="Pokemon"/>
            </div>
        </header>
    
    </>
  )
}

export default Header