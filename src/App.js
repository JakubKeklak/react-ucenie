import React from 'react';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import OrderBlock from './components/OrderBlock';
import { links } from './data/links';

const loadPages = (pageName) => {
  return React.lazy(() => import(`./pages/${pageName.toLowerCase()}`));
};

function App() {

  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Header />
        <React.Suspense>
            <Switch>
              {links.map((link, index) => {
                const Page = loadPages(link.page);
                return (
                  <Route key={index} path={link.url} exact={link.exact} 
                  render={(props) => <Page {...props} />}
                  />
                   
                )
              })}
              
            </Switch>
            <div className='app__order-block'>
              <OrderBlock />
            </div>
        </React.Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
