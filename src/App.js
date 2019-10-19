import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import About from './components/About'
import Blog from './components/Blog'
import Career from './components/Career'
// import NavigationBar2 from './components/NavigationBar2'
import NavigationBar from './components/NavigationBar'
// import Jumbotron from './components/Jumbotron'
// import Layout from './components/Layout'
import Carousel from './components/Carousel'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import UploadResumeModal from './components/UploadResumeModal'
import EnquiryModal from './components/EnquiryModal'
import JobApplicationModal from './components/JobApplicationModal'

// Scripts
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>
      <NavigationBar />
      <Carousel />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about/enquiry" component={EnquiryModal} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/career" component={Career} />
          <Route exact path="/career/upload-resume" component={UploadResumeModal} />
          <Route exact path="/career/:position" component={JobApplicationModal} />
          <Route exact component={NotFound} />
        </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
