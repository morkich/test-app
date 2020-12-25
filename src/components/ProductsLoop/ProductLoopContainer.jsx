import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllProductThunk } from '../../redux/productLoop-reducer';
import { getProductLoopItemsState, getProductLoopLoadingState } from '../../redux/productLoop-selectors';
import ProductLoop from './ProductLoop';

const ProductLoopContainer = (props) => {

  let getAllProductThunk = props.getAllProductThunk;

  useEffect(() => {
    getAllProductThunk();
  }, [getAllProductThunk])

  return (
    <ProductLoop
      productLoopItems={props.productLoopItems}
      productLoopLoading={props.productLoopLoading}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    productLoopItems: getProductLoopItemsState(state),
    productLoopLoading: getProductLoopLoadingState(state)
  }
}

export default connect(mapStateToProps, {getAllProductThunk})(ProductLoopContainer);