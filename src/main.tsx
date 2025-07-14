import ReactDOM from 'react-dom/client'
import './styles/global.less';
import './i18n';
import App from './App.tsx'
import {Provider} from "react-redux";
import {store} from "./store";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
);
