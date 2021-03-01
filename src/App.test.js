import { render, screen } from '@testing-library/react';
import App from './App';

// this test the main component
test('This is a the app.js test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Media search engine/);
  expect(linkElement).toBeInTheDocument();
});
