import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { links } from './data/links';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders Header component', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
});

test('renders Footer component', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const footerElement = screen.getByRole('contentinfo');
  expect(footerElement).toBeInTheDocument();
});

test('renders all routes', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  links.forEach(link => {
    const routeElement = screen.getByText(new RegExp(link.name, 'i'));
    expect(routeElement).toBeInTheDocument();
  });
});

