// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { request } from "../../server";
// import { LIMIT } from "../../const";



// const initialState = {
//   products: [],
//   loading: false,
//   totalProducts: 0,
//   cart: [],
// };

// export const getProducts = createAsyncThunk(
//   "products/getProducts",
//   async (page) => {
//     const skip = (page - 1) * LIMIT;
//     const { data } = await request.get(`products?limit=${LIMIT}&skip=${skip}`);
//     return data;
//   }
// );

// export const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     addProductToCart: (state, { payload }) => {
//       let product = state.products.find((pr) => pr.id === payload);
//       let check = state.cart.find((pr) => pr.id === payload);
//       if (check) {
//         state.cart = state.cart.map((pr) => {
//           pr.id === check.id && pr.quantity++;
//           return pr;
//         });
//       } else {
//         product.quantity = 1;
//         state.cart.push(product);
//       }
//     },
//   },
  
//   extraReducers: {
//     [getProducts.pending]: (state) => {
//       state.loading = true;
//     },
//     [getProducts.fulfilled]: (state, { payload }) => {
//       state.loading = false;
//       const { products, total } = payload;
//       state.products = products;
//       state.totalProducts = total;
//     },
//     [getProducts.rejected]: (state) => {
//       state.loading = false;
//     },
//   },
// });

// export const { name: productsName } = productsSlice;

// export const { addProductToCart } = productsSlice.actions;

// export default productsSlice.reducer;
