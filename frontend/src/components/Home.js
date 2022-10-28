import { useEffect, useState } from "react";
import searchAPI from "./api/searchAPI";
import { useSearchParams } from "react-router-dom";

const Home = (props) => {
  const [searches, setSearches] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const loadSearches = async (searchData) => {
    const data = await searchAPI.getSearches(searchData);
    setSearches(data ? data : []);
  };

  useEffect(() => {
    loadSearches();
  }, []);

  const renderSearches = () => {
    return (
      <div>
        <nav>
          <input
            placeholder="Search"
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          {searches
            .filter((search) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let searchTerm = search.name.toLowerCase();
              return searchTerm.startsWith(filter.toLowerCase());
            })
            .map((search) => (
              <div key={search.id}>{search.name}</div>
            ))}
        </nav>
      </div>
    );
  };
  return <div>{renderSearches()}</div>;
};

export default Home;
