import "./type.css";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import IType from "../../interfaces/IType";
import fetchData from "../../utils/fetchData";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Type = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IType>();

  const { type } = useParams();

  useEffect(() => {
    fetchData({
      endpoint: "/v2/type/" + type,
      setData: setData,
      setIsLoading: setIsLoading,
    });
  }, [type]);

  const navigate = useNavigate();

  return (
    <main className="type">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h2>{"Type: " + type}</h2>
          <div>
            {data?.pokemon.map((_pokemon) => {
              return (
                <div
                  className="pokemon-display"
                  key={_pokemon.pokemon.name}
                  onClick={() => {
                    navigate("/pokemon/" + _pokemon.pokemon.name);
                  }}
                >
                  <p>{_pokemon.pokemon.name}</p>
                  <img
                    src={
                      import.meta.env.VITE_BASE_IMG_URL +
                      _pokemon.pokemon.url
                        .split("pokemon/")[1]
                        .replace("/", "") +
                      ".png"
                    }
                    alt={_pokemon.pokemon.name}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </main>
  );
};

export default Type;
