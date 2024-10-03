import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { links } from './data/links';

const loadPages = (pageName) => {
  return React.lazy(() => import(`./pages/${pageName.toLowerCase()}`));
};

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <React.Suspense>
            <Switch>
              {links.map((link, index) => {
                const Page = loadPages(link.name);
                return (
                  <Route key={index} path={link.url} exact={link.exact} 
                  render={(props) => <Page {...props} />}
                  />
                   
                )
              })}
              
            </Switch>
        </React.Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
