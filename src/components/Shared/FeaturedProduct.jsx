import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturedProduct.styles.scss';

const FeaturedProduct = (props) => {
  const { id, title, imageUrl, price } = props;
  const navigate = useNavigate();

  return (
    <div className='featured-product'>
      <div
        className='featured-image'
        onClick={() => navigate(`/product/${id}`)}
      >
        <img src={imageUrl} alt='product' />
      </div>
      <div className='name-price'>
        <h3>{title}</h3>
        <p>$ {price}</p>

        <button className='button is-black nomad-btn'>ADD TO CART</button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
