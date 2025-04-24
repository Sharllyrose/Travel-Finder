<<<<<<< HEAD
import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
=======
import React from "react";
import Header from "./components/Header";
import DestinationGrid from "./components/DestinationGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <DestinationGrid />
      <Footer />
    </>
  );
}

export default App;
>>>>>>> 6ef2086 (adding files)
