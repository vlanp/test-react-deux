import "./header.css";
import { Link } from "react-router-dom";
import logoPokemon from "../../assets/img/logo-pokemon.png";

const Header = () => {
  return (
    <header>
      <Link className="header-image-link link" to={"/home"}>
        <img src={logoPokemon} alt="pokémon" />
      </Link>
      <div>
        <Link className="link" to={"/pokemon-list"}>
          Pokemons
        </Link>
        <Link className="link" to={"/type-list"}>
          Types
        </Link>
      </div>
    </header>
  );
};

export default Header;
