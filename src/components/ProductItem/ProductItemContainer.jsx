import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getProductItemLoadingState, getProductItemState } from '../../redux/productItem-selectors';
import { getProductItemThunk } from '../../redux/productItem-reducer';
import ProductItem from './ProductItem';

const ProductItemContainer = (props) => {

  let getProductItemThunk = props.getProductItemThunk,
  itemId = props.match.params.prodictId;

  useEffect(() => {
    getProductItemThunk(itemId)
  }, [getProductItemThunk, itemId])

  return (
    <ProductItem
      productItem={props.productItem}
      productItemLoading={props.productItemLoading}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    productItem: getProductItemState(state),
    productItemLoading: getProductItemLoadingState(state)
  }
}

export default compose(connect(mapStateToProps, {getProductItemThunk}),
  withRouter,
)(ProductItemContainer);