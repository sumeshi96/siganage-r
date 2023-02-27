import { container } from 'react-dom';

export function createRoot(container: Container): {
  render(children: JSX.Element): void;
  unmount(): void;
};