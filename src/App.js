import React from 'react';
import './index.css';
import Hero from './component/Hero';
import Footer from './component/Footer';
import Features from './component/Features';
import Navbar from './component/Navbar';
import NXWaveCard from './component/NX.js';
import NXWaveContent from './component/NXWaveContent.js';
import Features2 from './component/Features2.js';
import CommitmentSection from './component/CommitmentSection.js';
import DownloadSection from './component/DownloadSection.js';
import FooterBanner from './component/FooterBanner.js';

function App() {
  return (
    <div className="App">
     
       <NXWaveCard/>
       <NXWaveContent/>
          <Features/>
          <Features2/>
          <CommitmentSection/>
          <DownloadSection/>
          <Footer/>
          <FooterBanner/>
    </div>
  );
}

export default App;



 {/* <Navbar/>
   <Hero/>
   <Features/>
   <Footer/> */}