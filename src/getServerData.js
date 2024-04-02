export const getServerData = async (id) => {
  if (id) {
    const response = await fetch('https://api.mercadolibre.com/items/' + id);
    const description = await fetch(`https://api.mercadolibre.com/items/${id}/description`);
    const item = await response.json();
    const desc = await description.json();
    return { item: { ...item, plain_text: desc.plain_text }};
  }
  const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone');
  const data = await response.json();
  return data;
};