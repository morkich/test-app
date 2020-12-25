import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFilterVendorSelectDataState, getProductFilterLoadingState } from '../../../redux/productFilter-selectors';
import { getAllVendorsThunk } from '../../../redux/productFilter-reducer';
import { getAllProductThunk, getProductByVendorThunk } from '../../../redux/productLoop-reducer';
import ProductFilter from './ProductFilter';

const ProductFilterContainer = (props) => {
  let getAllVendorsThunk = props.getAllVendorsThunk,
  getProductByVendorThunk = props.getProductByVendorThunk,
  getAllProductThunk = props.getAllProductThunk;

  useEffect(() => {
    getAllVendorsThunk();
  }, [getAllVendorsThunk])

  const onChangeSelect = (event) => {
    event.target.value === 'all' ? getAllProductThunk() : getProductByVendorThunk(event.target.value); 
  }

  return (
    <ProductFilter
      optionsSelect={props.filterVendorSelectData}
      filterVendorSelectData={props.filterVendorSelectData}
      productFilterLoading={props.productFilterLoading}
      onChangeSelect={onChangeSelect}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    filterVendorSelectData: getFilterVendorSelectDataState(state),
    productFilterLoading: getProductFilterLoadingState(state)
  }
}

export default connect(mapStateToProps, {getAllVendorsThunk, getAllProductThunk, getProductByVendorThunk})(ProductFilterContainer);