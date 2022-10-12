import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Webpage Sections
import NavigationBar from './webpage_sections/navbar';
import HomePage from './webpage_sections/home';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
