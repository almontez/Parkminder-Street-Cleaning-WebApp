import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';

// Webpage Sections
import NavigationBar from './components/navbar';
import HomePage from './webpage_sections/home';
import AboutPage from './webpage_sections/about';
import Spacer from './webpage_sections/spacer';
import GetStartedPage from './webpage_sections/getstarted';
import FAQsPage from './webpage_sections/faqs';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <HomePage></HomePage>
      <AboutPage></AboutPage>
      <Spacer></Spacer>
      <GetStartedPage></GetStartedPage>
      <FAQsPage></FAQsPage>
    </div>
  );
}

export default App;
