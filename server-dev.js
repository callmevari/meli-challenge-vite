import fs from 'fs';
import express from 'express';
import { createServer } from 'vite';
 
const app = express();
 
const vite = await createServer({
  server: {
    middlewareMode: true,
  },
  appType: 'custom',
});
 
app.use(vite.middlewares);

app.get('/api/items', async (req, res) => {
  const getFilters = (filters) => {
    return filters.map(f => f.values[0].name)
  }
  try {
    const search = req.query.q || '';
    const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + search);
    const data = await response.json();
    const firstFourElements = data.results.slice(0, 4);
    const categories = getFilters(data.filters);
    res.status(200).json({ results: firstFourElements, categories })
  } catch (error) {
    res.status(500).end(error);
  }
})

app.get('/api/items/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const itemResponse = await fetch('https://api.mercadolibre.com/items/' + id);
    const itemData = await itemResponse.json();
    const descResponse = await fetch(`https://api.mercadolibre.com/items/${id}/description`);
    const descData = await descResponse.json();
    res.status(200).json({ ...itemData, plain_text: descData.plain_text  })
  } catch (error) {
    res.status(500).end(error);
  }
})
 
app.use('*', async (req, res) => {
  const url = req.originalUrl;
  const id = req.params.id || null;
  try {
    const template = await vite.transformIndexHtml(url, fs.readFileSync('index.html', 'utf-8'));
    const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
 
    const { getServerData } = await vite.ssrLoadModule('/src/getServerData.js');
    const data = id ? await getServerData(id) : getServerData();
    const script = `<script>window.__data__=${JSON.stringify(data)}</script>`;
 
    const html = template.replace(`<!--outlet-->`, `${render(data, url)} ${script}`);
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (error) {
    res.status(500).end(error);
  }
});
 
app.listen(4173, () => {
  console.log('http://localhost:4173.');
});