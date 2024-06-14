import "./pokemonList.css";
import { useEffect, useState } from "react";
import fetchData from "../../utils/fetchData";
import Loading from "../../components/Loading";
import IPokemonList from "../../interfaces/IPokemonList";
import { Link } from "react-router-dom";

const PokemonList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IPokemonList>();

  useEffect(() => {
    fetchData({
      endpoint: "/v2/pokemon",
      setData: setData,
      setIsLoading: setIsLoading,
    });
  }, []);

  return (
    <main className="pokemon-list">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <h2>Pokemon</h2>
          <div>
            {data?.results.map((result) => {
              return (
                <div key={result.name} className="pokemon-display">
                  <Link className="link" to={"/pokemon/" + result.name}>
                    <p>{result.name}</p>
                    <img
                      src={
                        import.meta.env.VITE_BASE_IMG_URL +
                        result.url.split("pokemon/")[1].replace("/", "") +
                        ".png"
                      }
                      alt={result.name}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </>
      )}
    </main>
  );
};

export default PokemonList;
