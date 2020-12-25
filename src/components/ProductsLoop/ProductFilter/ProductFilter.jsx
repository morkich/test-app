import React from 'react';
import style from './ProductFilter.module.css';

const ProductFilter = (props) => {
  let options = props.filterVendorSelectData.map( (vendor, i) => <option key={i} value={vendor}>{vendor}</option>);
  return (
    <select className={style.select} onChange={props.onChangeSelect}>
      <option value="all">Все</option>
      {options}
    </select>
  )
}

export default ProductFilter;