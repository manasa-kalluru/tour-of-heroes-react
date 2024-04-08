import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { useContext } from 'react';
import HeroContext from '../utils/HeroContext';

const HeroDetails = () => {
    const heroId = useParams();
    const {heroes: heroesData } = useContext(HeroContext);
    const selectedHero = heroesData.filter(hero => hero.id.toString() === heroId.id);
    const [heroName, setHeroName] = useState(selectedHero[0].name);
    const handleNameChange = (newHeroName) => {
      setHeroName(newHeroName);
    };
  return (
    <div>
      <h2>{heroName.toUpperCase()} Details</h2>
      <div>
        <span>id: </span>{selectedHero[0].id}
      </div>
      <div>
        <label>Hero name
          <input type="text" value={heroName} onChange={(e) => handleNameChange(e.target.value) } />
        </label>
      </div>
      <Link to="/heroes">Back</Link>
    </div>
  );
};

// HeroDetails.propTypes = {
//     hero: PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired
//     }).isRequired
//   };

export default HeroDetails;
