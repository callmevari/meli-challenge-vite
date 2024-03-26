import './ItemDetail.scss';

const ItemDetail = () => {
  return (
    <section className="item-detail">
      <div className="breadcrumb">
        Electrónica, Audio y Video - iPod - Reproductores - iPod Touch - <b>32 GB</b>
      </div>
      <div className="item">
        <div className="detail">
          <div className="photo">
            <img src="https://http2.mlstatic.com/D_842272-MLA52993977355_122022-O.jpg" />
          </div>
          <div className="info">
            <div className="legend">
              Nuevo - 234 vendidos
            </div>
            <div className="title">
              Deco Reverse Sombrero Oxford
            </div>
            <div className="price">
              $1.980
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
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;