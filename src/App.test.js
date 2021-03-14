import { render } from '@testing-library/react';
import App from './App';
import Main from './Screens/Main/';

test('renders main screen', () => {
  const { getByText } = render(<App />);
  
  expect(getByText('Main')).toBeInTheDocument();
});

test('main screen renders all components properly', () => {
  const { getByText } = render(<Main />);

  expect(getByText('Header')).toBeInTheDocument();
  expect(getByText('Sidebar')).toBeInTheDocument();
  expect(getByText('ContainerWrapper')).toBeInTheDocument();
  expect(getByText('ControlBar')).toBeInTheDocument();
});
