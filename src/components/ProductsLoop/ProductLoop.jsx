import React from 'react';
import style from './ProductLoop.module.css';
import ProductCart from './ProductCard/ProductCard';
import ProductFilterContainer from './ProductFilter/ProductFilterContainer';
import Preloader from '../common/Preloader/Preloader';

const ProductLoop = (props) => {

  let itemsPack = Object.keys(props.productLoopItems).map(item => {
    return <ProductCart 
      key={props.productLoopItems[item].id}
      id={props.productLoopItems[item].id}
      title={props.productLoopItems[item].title}
      vendor={props.productLoopItems[item].vendor}
      pack={props.productLoopItems[item].pack}
      price={props.productLoopItems[item].price}
    />;    
  })

  return (
    <div className={style.wrap}>  
      {props.productLoopLoading ? <Preloader /> : null}    
      <ul className={style.loop}>
        <ProductFilterContainer />
        <li className={style.headProduct}>
          <span>Артикул</span>
          <span>Наименование</span>
          <span>Производитель</span>
          <span>Кол-во в Упаковке</span>
          <span>Цена</span>          
        </li>
        {itemsPack}
      </ul>
    </div>
  )
}

export default ProductLoop;