import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
 
import App from './app';

let data;
 
if (typeof window !== 'undefined') {
  data = window.__data__;
}
 
hydrateRoot(document.getElementById('app'), 
  <BrowserRouter>
    <App data={data} />
  </BrowserRouter>
);