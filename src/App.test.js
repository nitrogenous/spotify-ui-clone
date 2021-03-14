import { render } from '@testing-library/react';
import App from './App';
import Main from './Screens/Main/';

test('renders all components properly', () => {
  const { getByText } = render(<App />);

  expect(getByText('Header')).toBeInTheDocument();
  expect(getByText('Sidebar')).toBeInTheDocument();
  expect(getByText('Container')).toBeInTheDocument();
  expect(getByText('ControlBar')).toBeInTheDocument();
});
