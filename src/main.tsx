import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './Store/store'
import './index.css'
import App from './App'
import inject from '@stylexjs/dev-runtime';

inject({
  classNamePrefix: 'x',
  dev: true,
  test: false,
  useRemForFontSize: false,
  runtimeInjection: false,
  styleResolution: 'application-order'
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
