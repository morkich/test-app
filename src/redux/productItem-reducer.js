import { productAPI } from "../api/api";

const SET_PRODUCT_ITEM = 'SET_PRODUCT_ITEM';
const SET_PRODUCT_ITEM_LOADING = 'SET_PRODUCT_ITEM_LOADING';

let initialState = {
  productItem: [],
  productItemLoading: false,  
}

const productItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_ITEM:
      return {
        ...state,
        productItem: action.productItem
      };
    case SET_PRODUCT_ITEM_LOADING:
      return {
        ...state,
        productItemLoading: action.productItemLoading
      };      
    default:
      return state;
  }
}

export const setProductItem = (productItem) => {
  return {
    type: SET_PRODUCT_ITEM,
    productItem
  }
}

export const setProductItemLoading = (productItemLoading) => {
  return {
    type: SET_PRODUCT_ITEM_LOADING,
    productItemLoading
  }
}

export const getProductItemThunk = (itemId) => {
  return (dispatch) => {
    dispatch(setProductItemLoading(true));
    let productItem = productAPI.getProductItem(itemId);
    dispatch(setProductItem(productItem[0]));
    dispatch(setProductItemLoading(false));
  }
}


export default productItemReducer;