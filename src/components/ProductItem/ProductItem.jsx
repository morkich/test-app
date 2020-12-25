import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import style from './ProductItem.module.css';

const ProductItem = (props) => {

  return (
    <div className={style.wrap}>
      {props.productItemLoading ? <Preloader /> : null}
      <button onClick={() => window.history.back()} className={style.link}>Назад</button>
      <div className={style.image}>
        <img src={`/img/${props.productItem.id}.jpg`} alt={props.productItem.title}/>
      </div>
      <div className={style.description}>
        <h1>{props.productItem.title}</h1>
        <div className={style.information}>
          <span className={style.label}>Артикул</span>
          <span className={style.stringInfo}>{props.productItem.id}</span>
          <span className={style.label}>Производитель</span>
          <span className={style.stringInfo}>{props.productItem.vendor}</span>
          <span className={style.label}>Кол-во в упаковке</span>
          <span className={style.stringInfo}>{props.productItem.pack}</span>
          <span className={style.label}>Цена</span>
          <span className={style.stringInfo}>{props.productItem.price}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem;