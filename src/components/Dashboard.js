import React, { useContext, useState } from "react";
import HeroContext from "../utils/HeroContext";

const Dashboard = () => {
  const { heroes } = useContext(HeroContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [heroesData, setHeroesData] = useState([]);

  const highlightMatch = (name) => {
    const index = name.toLowerCase().indexOf(searchQuery.toLowerCase());
    if (index !== -1) {
      return (
        <>
          {name.substring(0, index)}
          <span className="highlight">{name.substring(index, index + searchQuery.length)}</span>
          {name.substring(index + searchQuery.length)}
        </>
      );
    }
    return name;
  };

  return (
    <div>
      <h2> Hero Search</h2>
      <input
        type="text"
        onChange={(e) => {
          setSearchQuery(e.target.value);
          const searchedHeroes = heroes.filter((hero) =>
            hero.name.toLowerCase().includes(e.target.value.toLowerCase())
          );
          setHeroesData(searchedHeroes);
        }}
      />
      {console.log(heroesData)}
      <div className="dropdown">
        {heroesData.length > 0 ? (
          <ul>
            {heroesData.map((hero, index) => (
              <li key={hero.id}>{highlightMatch(hero.name)}</li>
            ))}
          </ul>
        ) : (
          <div>No results found</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
