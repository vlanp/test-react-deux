import "./pokemon.css";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import fetchData from "../../utils/fetchData";
import { useParams } from "react-router-dom";
import IPokemon from "../../interfaces/IPokemon";
import { useNavigate } from "react-router-dom";

const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IPokemon>();

  const { nomdupokemon } = useParams();

  useEffect(() => {
    fetchData({
      endpoint: "/v2/pokemon/" + nomdupokemon,
      setData: setData,
      setIsLoading: setIsLoading,
    });
  }, [nomdupokemon]);

  const navigate = useNavigate();

  return (
    <main className="pokemon">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h2>Pokemon</h2>
          <div>
            <div className="pokemon-display">
              <p>{data?.forms[0].name}</p>
              <img
                src={
                  import.meta.env.VITE_BASE_IMG_URL +
                  data?.forms[0].url
                    .split("pokemon-form/")[1]
                    .replace("/", "") +
                  ".png"
                }
                alt={data?.forms[0].name}
              />
            </div>
            <div>
              {data?.types.map((type) => {
                return (
                  <p
                    key={type.type.name}
                    onClick={() => {
                      navigate("/type/" + type.type.name);
                    }}
                  >
                    {type.type.name}
                  </p>
                );
              })}
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Pokemon;
