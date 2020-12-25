import React from 'react';
import { Link } from 'react-router-dom';
import style from './ProductCard.module.css';

const ProductCard = (props) => {

  return (
    <li className={style.wrap}>
      <Link to={`/catalog/${props.id}`}>
        <span>{props.id}</span>
        <h3>{props.title}</h3>
        <span>{props.vendor}</span>
        <span>{props.pack} шт.</span>
        <div className={style.price}>{props.price} ₽</div>
      </Link>      
    </li>
  )
}

export default ProductCard;