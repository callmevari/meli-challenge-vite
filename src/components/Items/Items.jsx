import React from 'react';
import './Items.scss';

const Items = ({ list }) => {
  console.log(list);
  return (
    <section className="items">
      <div className="breadcrumb">
        Electrónica, Audio y Video - iPod - Reproductores - iPod Touch - <b>32 GB</b>
      </div>
      <div className="list">
        {list.map(e => (
          <div className="item" key={e.title}>
            <div className="photo">
              <img src={e.thumbnail} alt="product img" />
            </div>
            <div className="detail">
              <div className="price">
                ${e.price.toString()}
              </div>
              <div className="title">
                {e.title}
              </div>
            </div>
            <div className="location">
              {e.seller.nickname}
            </div>
          </div>
        )
      )}
      </div>
    </section>
  );
};

export default Items;