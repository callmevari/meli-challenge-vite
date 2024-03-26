import { Link, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Items from './components/Items/Items';
import ItemDetail from './components/ItemDetail/ItemDetail';

import './app.scss';
 
const App = ({ data }) => {

  const firstFourElements = data.results.slice(0, 4);

  return (
    <div className="grid-container">
      <Header />
      <Routes>
        <Route path="/" element={<div><Link to="/items">Go!</Link></div>} />
        <Route path="/items" element={<Items list={firstFourElements} />} />
        <Route path="/items/:id" element={<ItemDetail />} />
      </Routes>
    </div>
  )
};
 
export default App