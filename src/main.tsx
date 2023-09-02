import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import { router } from './modules/navigation/router.tsx';
import { ChatStateProvider } from './modules/common/context/chat.tsx';
import { StorageStateProvider } from './modules/common/context/storage.tsx';
import { store } from './store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <StorageStateProvider>
        <ChatStateProvider>
          <RouterProvider router={router} />
        </ChatStateProvider>
      </StorageStateProvider>
    </Provider>
  </React.StrictMode>,
);
