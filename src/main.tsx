import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './app/store'
import './styles/global.less';
import './i18n';
import App from './App.tsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      {/* Redux, React Query, Router, i18n 모두 앱 전체에 적용 */}
      <Provider store={store}>
          <QueryClientProvider client={queryClient}>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </QueryClientProvider>
      </Provider>
  </React.StrictMode>
);
