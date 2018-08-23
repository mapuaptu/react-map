import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import 'normalize.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Add this import:
import { AppContainer } from 'react-hot-loader';

// Wrap the rendering in a function:
const render = Component => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root'),
  );
};

WebFont.load({
  google: {
    families: ['Roboto:400', 'sans-serif'],
  },
});

// Do this once
registerServiceWorker();

// Render once
render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
