import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath:"users",
    baseQuery : fetchBaseQuery({
        baseUrl:"https://randomuser.me/",
    }),
    endpoints: (builder) => ({
        getUsers : builder.query({
            query: () => "api",
        })
    })
})

export const {useGetUsersQuery} = userApi