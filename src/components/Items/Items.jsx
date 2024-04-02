import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import './Items.scss';

const Items = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const fetchData = async () => {
    const { data } = await axios.get('/api/items?q=' + search);
    setCategories(data.categories);
    setResults(data.results);
  }

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  const itemHandler = (item) => {
    navigate(`${item.id}`, { state: { categories }});
  }

  return (
    <div className="items">
      <div className="breadcrumb">
        {categories && Breadcrumb(categories)}
      </div>
      <div className="list">
        {results.map((e, i) => (
          <div className="item" key={`${e.title}-${i}`} onClick={() => itemHandler(e)}>
            <div className="photo">
              <img src={e.thumbnail} alt="product img" />
            </div>
            <div className="detail">
              <div className="price">
                ${formatPrice(e.price)}
              </div>
              <div className="title">
                {e.title}
              </div>
            </div>
            <div className="location">
              {e.seller.nickname}
            </div>
          </div>))
        }
        {!results.length && <div>Cargando...</div>}
      </div>
    </div>
  );
};

export default Items;