import React from 'react';
import reactDOMServer from 'react-dom/server';

import App from './App.jsx';

const fs = require('fs');

const indexHTML = fs.readFileSync('src/index.html', 'utf-8')
  .replace(
    '<div id="app-shell"></div>',
    reactDOMServer.renderToString(<App />)
  )
  .replace(/\n\s*/g, '');
fs.writeFileSync('dist/index.html', indexHTML);
