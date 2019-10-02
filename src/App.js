import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron'
import Produkter from './components/Produkter/Produkter'
import Rejser from './components/Rejser/Rejser';
import Certifikat from './components/Certifikat/Certifikat';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="ScubaLiving">
        <Header />
        <Switch>
          <Route exact path="/" render={props =>
            <main>
              <Jumbotron />
              <div className="container-fluid p-3">
                <Produkter antal={4} />
                <Rejser />
                <Certifikat />
              </div>
            </main>
          } />
          <Route exact path="/dykkerudstyr" component={Produkter} />
          <Route exact path="/dykkerrejser" component={Rejser} />
          <Route exact path="/dykkerkurser" component={Certifikat} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
