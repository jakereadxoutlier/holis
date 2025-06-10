import { render } from '@testing-library/react-native';
import HomeScreen from '../app/index';

test('renders welcome message', () => {
  const { getByText } = render(<HomeScreen />);
  expect(getByText('Welcome to Holis AI')).toBeTruthy();
});
