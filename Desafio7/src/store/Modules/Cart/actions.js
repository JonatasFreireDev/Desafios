export function addToCartSuccess(product) {
   return {
      type: '@cart/ADD_SUCCESS',
      product,
   };
}
