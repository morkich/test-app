import { productAPI } from "../api/api";

const SET_PRODUCT_LOOP_ITEMS = 'SET_PRODUCT_LOOP_ITEMS';
const SET_PRODUCT_LOOP_LOADING = 'SET_PRODUCT_LOOP_LOADING';

let initialState = {
  productLoopItems: [],
  productLoopLoading: false,  
}

const productLoopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_LOOP_ITEMS:
      return {
        ...state,
        productLoopItems: action.LoopItems
      };
    case SET_PRODUCT_LOOP_LOADING:
      return {
        ...state,
        productLoopLoading: action.LoopLoading
      };      
    default:
      return state;
  }
}

export const setProductLoopItems = (LoopItems) => {
  return {
    type: SET_PRODUCT_LOOP_ITEMS,
    LoopItems
  }
}

export const setProductLoopLoading = (LoopLoading) => {
  return {
    type: SET_PRODUCT_LOOP_LOADING,
    LoopLoading
  }
}

export const getAllProductThunk = () => {
  return (dispatch) => {
    dispatch(setProductLoopLoading(true));
    let allProduct = productAPI.getAllProduct();
    dispatch(setProductLoopItems(allProduct));   
    dispatch(setProductLoopLoading(false));
  }
}

export const getProductByVendorThunk = (vendorName) => {
  return (dispatch) => {
    dispatch(setProductLoopLoading(true));
    let products = productAPI.getProductByVendor(vendorName);
    dispatch(setProductLoopItems(products));   
    dispatch(setProductLoopLoading(false));
  }
}


export default productLoopReducer;