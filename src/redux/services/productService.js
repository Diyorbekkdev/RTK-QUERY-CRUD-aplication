import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { LIMIT } from "../../const";

const productServices = createApi({
  reducerPath: "Product",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://64ca47f5700d50e3c704a232.mockapi.io/products/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ search }) => {
        return `products?title=${search}`;
      },
      // transformResponse: (res) => res.sort((a, b) => b.id - a.id),
    }),
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: `products`,
        method: "POST",
        body: newProduct,
      }),
    }),
    updateProduct: builder.mutation({
      query: (body, productId) => ({
        url: `products/${productId}`,
        method: "PUT",
        body,
      }),
    }),
    deleteProduct: builder.mutation({
        query: (productId) => ({
          url: `products/${productId}`,
          method: "DELETE",
        }),
        // invalidatesTags: ["Category"],
      }),
  }),
});

export const { useGetProductsQuery, useCreateProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productServices;
export default productServices;
