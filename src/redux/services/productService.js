import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { LIMIT } from "../../const";

const productServices = createApi({
  reducerPath: "Product",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://64ca47f5700d50e3c704a232.mockapi.io/products/",
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ search }) => {
        return `products?title=${search}`;
      },
    //   transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags:["Product"],
    }),
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: `products`,
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags:["Product"],
    }),

    updateProduct: builder.mutation({
      query: (body, productId) => ({
        url: `products/${productId}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Product"],
    }),

    deleteProduct: builder.mutation({
        query: (productId) => ({
          url: `products/${productId}`,
          method: "DELETE",
        }),
        invalidatesTags:["Product"],
      }),
  }),
});

export const { useGetProductsQuery, useCreateProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productServices;
export default productServices;
