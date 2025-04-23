import React from 'react';

const categories = ['all', 'beach', 'mountain', 'city', 'historical'];

const FilterButtons = ({ onFilter, activeFilter }) => {
  return (
    <div className="filter-buttons">
      {categories.map(category => (
        <button
          key={category}
          className={category === activeFilter ? 'active' : ''}
          onClick={() => onFilter(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;