import React, { useState } from 'react';
import countries from '../data/countries';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
    if (query) {
      const results = countries.filter(
        (country) =>
          country.country.toLowerCase().includes(query) ||
          country.capital.toLowerCase().includes(query)
      );
      setFilteredCountries(results);
    } else {
      setFilteredCountries([]);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by country or capital"
        className="search-input"
      />
      {filteredCountries.length > 0 && (
        <ul className="search-results">
          {filteredCountries.map((country, index) => (
            <li key={index}>
              <strong>{country.country}</strong> - {country.capital}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
