import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
 
import App from './app';
 
export const render = (data, path) => {
  return renderToString(
    <StaticRouter location={path}>
      <App data={data} />
    </StaticRouter>
  );
};