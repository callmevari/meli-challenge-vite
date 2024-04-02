import { Link, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Items from './components/Items/Items';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Home from './components/Home/Home';

import './app.scss';

const App = ({ data }) => {
  return (
    <div className="grid-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:id" element={<ItemDetail current={data.item} />} />
      </Routes>
    </div>
  )
};
 
export default App