import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Webpage Sections
import NavigationBar from './webpage_sections/navbar';
import HomePage from './webpage_sections/home';
import AboutPage from './webpage_sections/about';
import GetStartedPage from './webpage_sections/getstarted';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <HomePage></HomePage>
      <AboutPage></AboutPage>
      <GetStartedPage></GetStartedPage>
    </div>
  );
}

export default App;
