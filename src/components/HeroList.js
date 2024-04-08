import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import HeroContext from "../utils/HeroContext";

const HeroList = () => {
  const { heroes: heroesData, setHeroes } = useContext(HeroContext);
  const handleDeleteHero = (id, e) => {
    console.log("clicked");
    const filteredHeroes = heroesData.filter(
      (hero) => hero.id.toString() !== id.toString()
    );
    console.log(filteredHeroes);
    setHeroes(filteredHeroes);
  };
  return (
    <div>
      <h2>My Heroes!!</h2>
      <div className="hero-buttons">
        {heroesData.map((hero) => (
          <div className="hero-wrapper" key={hero.id}>
            <Link className="link-button-id" to={`/detail/${hero.id}`}>{hero.id}</Link>
            <Link className="link-button" to={`/detail/${hero.id}`}>{hero.name}</Link>
            <button className="deleteBtn" onClick={(e) => handleDeleteHero(hero.id, e)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroList;
