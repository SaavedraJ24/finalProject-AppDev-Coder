import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const base_URL_RTDB = process.env.EXPO_PUBLIC_BASE_RTDB_URL;

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: base_URL_RTDB }),
    endpoints: (builder) => ({
        getProfilePicture: builder.query({
            query: (localId) => `profilePictures/${localId}.json`
        }),
        putProfilePicture: builder.mutation({
            query: (data) => ({
                url: `profilePictures/${data.localId}.json`,
                method: "PUT", 
                body: {
                    image: data.image
                }
            })
        })
    })
});

export const { useGetProfilePictureQuery, usePutProfilePictureMutation } = userApi;