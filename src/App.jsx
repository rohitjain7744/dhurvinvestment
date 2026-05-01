import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import AboutUs from "./Component/AboutUs/AboutUs";
import OurService from './Component/OurService/OurService';
import Testimonials from './Component/Testimonials/Testimonials';
import ContactComp from './Component/Contact/Contact'
import Navbar from './Component/Nav/Nav';
import Hero from './Component/Hero/Hero';
import Services from './Page/Service/Service';
import About from './Page/About/About';
import Mutul from './Page/Service/MutualFund/MutulFund';
import TermInsurance from './Page/Service/TermInsurance/TermInsurance';
import Retirement from './Page/Service/Retirement/Retirement';
import Contact from './Page/ContactUs/ContactUs';
import MediClaim from './Page/Service/MediClaim/MediClam';
import  RealEstate from "./Page/Service/RealEstate/RealEsate";
import ChildPlan from "./Page/Service/ChildPlan/ChildPlan";
import PortfolioReview from './Page/Service/PortfolioReview/PortfolioReview';
import SocialFloating from './Component/SocialFloating/SocialFloating';
import Footer from './Component/Footer/Footer';
import ScrollToTop from './Component/ScrollTop/ScrollTop';
import Sip from './Page/Service/Sip/Sip';

const App = () => {
  return (
    <Router>
      {/* Navbar stays outside Routes so it shows on every page */}
      <Navbar />
      <SocialFloating />
      <ScrollToTop/>
     
      {/* Routes define which component shows for which URL */}
      <Routes>
        {/* Combine Hero, Services, and About to create a full Home Page */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <OurService/>
              <Testimonials/>
              <AboutUs/>
              <ContactComp/>
            </>
          } 
        />
        
        {/* Dedicated Pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/mutual-funds" element={<Mutul />} />
        <Route path="/services/term-insurance" element={<TermInsurance />} />
        <Route path="/services/retirement" element={<Retirement />} />
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/services/mediclaim' element={<MediClaim/>}/>
        <Route path='/services/real-estate' element={<RealEstate/>}/>
        <Route path='/services/child-plan' element={<ChildPlan/>}/>
        <Route path="/services/portfolio-review" element={<PortfolioReview/>}/>
        <Route path="/services/sip" element={<Sip/>}/>
        {/* Add more routes as needed */} 

      </Routes>
       <Footer/>
      
    </Router>
  );
};

export default App;