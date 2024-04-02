import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import './ItemDetail.scss';

const ItemDetail = ({ current }) => {
  const [currentItem, setCurrentItem] = useState(false);
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const params = useParams();

  const fetchData = async () => {
    const { data } = await axios.get('/api/items/' + params.id);
    setCurrentItem({ ...data });
  }

  useEffect(() => {
    const productId = location.pathname.split('/')[2];
    const { categories = [] } = location.state || {};
    setCategories(categories);
    if (current && current.id === productId) {
      setCurrentItem(current)
    } else {
      fetchData();
    }
  }, []);

  return (
    <div className="item-detail">
      <div className="breadcrumb">
        {categories && Breadcrumb(categories)}
      </div>
      {!currentItem && (<div>Cargando producto...</div>)}
      {currentItem && (
        <div className="item">
          <div className="detail">
            <div className="photo">
              <img src={currentItem.pictures[0].secure_url} />
            </div>
            <div className="info">
              <div className="legend">
                {currentItem.warranty || 'Nuevo - 274 vendidos'}
              </div>
              <div className="title">
                {currentItem.title}
              </div>
              <div className="price">
                ${formatPrice(currentItem.base_price)}
              </div>
              <button>
                Comprar
              </button>
            </div>
          </div>
          <div className="description">
            <div className="title">
              Descripción del producto
            </div>
            <p>
              {currentItem.plain_text}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;