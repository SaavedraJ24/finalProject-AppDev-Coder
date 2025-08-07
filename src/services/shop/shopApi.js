import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const base_URL_RTDB = process.env.EXPO_PUBLIC_BASE_RTDB_URL;

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({baseUrl: base_URL_RTDB}),
    endpoints: (builder) => ({
        getCategories: builder.query({query: () => 'categories.json'}),
        getProductsByCategoryId: builder.query({
            query: (categoryId) => `products.json?orderBy="categoryId"&equalTo=${categoryId}`,
            transformResponse: (response) => {
                return Object.values(response)
            }
        })
    })
})

export const { useGetCategoriesQuery, useGetProductsByCategoryIdQuery } = shopApi;