export const getServerData = async () => {
  const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone');
  const data = await response.json();
 
  return data;
};