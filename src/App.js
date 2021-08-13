import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import NateLeslie from './components/pages/NateLeslie';
import Asha from './components/pages/Asha';
import Trident from './components/pages/Trident';
import LegalExperts from './components/pages/LegalExperts';
import FreaksAndGeeks from './components/pages/FreaksAndGeeks';
import Amp from './components/pages/Amp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/projects/nate-leslie' component={NateLeslie} />
          <Route path='/projects/legal-experts' component={LegalExperts} />
          <Route path='/projects/asha' component={Asha} />
          <Route path='/projects/amp' component={Amp} />
          <Route path='/projects/trident' component={Trident} />
          <Route path='/projects/freaks-and-geeks' component={FreaksAndGeeks} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;