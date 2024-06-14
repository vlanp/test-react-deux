import "./typeList.css";
import { useEffect, useState } from "react";
import fetchData from "../../utils/fetchData";
import ITypeList from "../../interfaces/ITypeList";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";

const TypeList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ITypeList>();

  useEffect(() => {
    fetchData({
      endpoint: "/v2/type",
      setData: setData,
      setIsLoading: setIsLoading,
    });
  }, []);

  return (
    <main className="type-list">
      <h2>Types</h2>
      <section>
        {isLoading ? (
          <Loading />
        ) : (
          data?.results.map((result) => {
            return (
              <Link
                className="link"
                key={result.name}
                to={"/type/" + result.name}
              >
                {result.name}
              </Link>
            );
          })
        )}
      </section>
    </main>
  );
};

export default TypeList;
