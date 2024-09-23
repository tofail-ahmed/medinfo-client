import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi=createApi({
      reducerPath:"baseApi",
      baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000/api/v1"}),
      // baseQuery:fetchBaseQuery({baseUrl:"https://medinfo-server.vercel.app/api/v1"}),
      endpoints:()=>({}),
      tagTypes:["medicines","users"]
})