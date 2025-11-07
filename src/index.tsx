import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './App.css';

// Import Font Awesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
// Prevent fontawesome from adding its CSS since we did it manually above
config.autoAddCss = false;

// Import React Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload, faPaperPlane, faHeart } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faGithub, faLinkedin, faTwitter, faFileDownload, faPaperPlane, faHeart);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
