import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import { Chat } from '../chat';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/session/:sessionSecret',
    element: <Chat />,
  },
]);
