// // components/DestinationForm.js
// import React, { useState } from 'react';
// import './DestinationForm.css';

// function DestinationForm({ onFilter }) {
//   const [filters, setFilters] = useState({
//     budget: '',
//     temperature: '',
//     continent: '',
//     activity: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFilters(prevFilters => ({
//       ...prevFilters,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onFilter(filters);
//   };

//   const handleReset = () => {
//     setFilters({
//       budget: '',
//       temperature: '',
//       continent: '',
//       activity: ''
//     });
//     onFilter({});
//   };

//   return (
//     <div className="filter-container">
//       <h2>Find Your Destination</h2>
//       <form id="filter-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="budget">Budget:</label>
//           <select 
//             id="budget" 
//             name="budget" 
//             value={filters.budget}
//             onChange={handleChange}
//           >
//             <option value="">Any</option>
//             <option value="Low">Low ($)</option>
//             <option value="Medium">Medium ($$)</option>
//             <option value="High">High ($$$)</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="temperature">Temperature:</label>
//           <select 
//             id="temperature" 
//             name="temperature" 
//             value={filters.temperature}
//             onChange={handleChange}
//           >
//             <option value="">Any</option>
//             <option value="Cold">Cold</option>
//             <option value="Moderate">Moderate</option>
//             <option value="Hot">Hot</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="continent">Continent:</label>
//           <select 
//             id="continent" 
//             name="continent" 
//             value={filters.continent}
//             onChange={handleChange}
//           >
//             <option value="">Any</option>
//             <option value="Africa">Africa</option>
//             <option value="Asia">Asia</option>
//             <option value="Europe">Europe</option>
//             <option value="North America">North America</option>
//             <option value="South America">South America</option>
//             <option value="Oceania">Oceania</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="activity">Main Activity:</label>
//           <select 
//             id="activity" 
//             name="activity" 
//             value={filters.activity}
//             onChange={handleChange}
//           >
//             <option value="">Any</option>
//             <option value="Beach">Beach</option>
//             <option value="Hiking">Hiking</option>
//             <option value="City Exploration">City Exploration</option>
//             <option value="Cultural Experience">Cultural Experience</option>
//             <option value="Wildlife">Wildlife</option>
//             <option value="Winter Sports">Winter Sports</option>
//           </select>
//         </div>

//         <div className="form-buttons">
//           <button type="submit" className="btn btn-primary">Find Destinations</button>
//           <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset Filters</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default DestinationForm;