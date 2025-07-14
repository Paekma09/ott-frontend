import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.less';
import './i18n';
import App from './App.tsx'
import {AuthProvider} from "./contexts/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      {/* Redux, React Query, Router, i18n 모두 앱 전체에 적용 */}
      <AuthProvider>
          <App />
      </AuthProvider>
  </React.StrictMode>
);
