import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
 
import App from './app';
 
export const render = (data) => {
  return renderToString(
    <StaticRouter>
      <App data={data} />
    </StaticRouter>
  );
};