import React,{useState,useEffect} from 'react'
import pokebola from '../../assets/pokebola.png';
import '../../styles/Body.css'
import '../../styles/Button.scss';
import Loader from '../common/Loader';

function Pokemon({avatar,name}){
    return(
        
    <figure className="pokemon">
        <figcaption>{name}</figcaption>
        <img src={avatar} alt={name}/>
        <button class="poke-button">Skills <img src={pokebola} alt="Pokebola"/></button>
    </figure>
    
    );
}

const Body = () => {
   const [pokemons,setPokemons] = useState([]);

   useEffect(() => {
    const getPokemons = async(url) => {
        let res = await fetch(url),
        json = await res.json();

        json.results.forEach(async(el)=>{
            let res = await fetch(el.url),
            json = await res.json();

            let pokemon = {
                id:json.id,
                name:json.name,
                avatar:json.sprites.front_default,
            };
            setPokemons((pokemons) => [...pokemons, pokemon]);
        });
    };
        getPokemons("https://pokeapi.co/api/v2/pokemon/");
   },[]);

  return (
    <>
           {pokemons.length === 0 ? (
         <Loader />
      ) : (
        pokemons.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
    
    </>
  );
}

export default Body