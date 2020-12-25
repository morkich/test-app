import { productAPI } from "../api/api";

const SET_FILTER_VENDOR_SELECT_DATA = 'SET_FILTER_VENDOR_SELECT_DATA';
const SET_PRODUCT_FILTER_LOADING = 'SET_PRODUCT_FILTER_LOADING';

let initialState = {
  filterVendorSelectData: [],
  productFilterLoading: false,  
}

const productFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_VENDOR_SELECT_DATA:
      return {
        ...state,
        filterVendorSelectData: action.VendorSelectData
      };
    case SET_PRODUCT_FILTER_LOADING:
      return {
        ...state,
        productFilterLoading: action.filterLoading
      };      
    default:
      return state;
  }
}

export const setFilterVendorSelectData = (VendorSelectData) => {
  return {
    type: SET_FILTER_VENDOR_SELECT_DATA,
    VendorSelectData
  }
}

export const setProductFilterLoading = (filterLoading) => {
  return {
    type: SET_PRODUCT_FILTER_LOADING,
    filterLoading
  }
}

export const getAllVendorsThunk = () => {
  return (dispatch) => {
    dispatch(setProductFilterLoading(true));
    let allVendors = productAPI.getAllUniqVendor();
    dispatch(setFilterVendorSelectData(allVendors));
    dispatch(setProductFilterLoading(false));
  }
}

export default productFilterReducer;