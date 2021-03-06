import { render } from 'utils/testing';
import HelloWorld from './index';

test('HelloWorld renders correctly', () => {
  const component = render(<HelloWorld />);
  const element = component.getByText('Hello World');

  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
});
