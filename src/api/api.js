import { apiDataProduct } from "./apiData";

export const productAPI = {
  getAllProduct() {
    return apiDataProduct().rows;
  },
  getProductItem(itemId) {
    let productItem = apiDataProduct().rows.filter( item => item.id === itemId);
    return productItem;
  },
  getProductByVendor(vendorName) {
    let productByVendor = apiDataProduct().rows.filter( item => item.vendor === vendorName);
    return productByVendor;
  },
  getAllUniqVendor() {
    let allVendors = apiDataProduct().rows.map( item => item.vendor);
    return Array.from(new Set(allVendors));
  }  
}



