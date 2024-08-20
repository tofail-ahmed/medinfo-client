import { baseApi } from "../baseApi";

const medicinesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allMedicines: builder.query({
      query: () => ({
        url: "/medicines",
        method: "GET",
      }),
      providesTags: ["medicines"],
    }),
    singleMedicine: builder.query({
      query: (id) => ({
        url: `/singleMedicine/${id}`,
        method: "GET",
      }),
    }),
    searchMedicine: builder.query({
      query: (term) => ({
        url: `/medicines/search/${term}`,
        method: "GET",
      }),
      // providesTags: (result, error, term) => [{ type: 'Medicines', id: term }],
    }),
    createMedicine: builder.mutation({
      query: (body) => ({
        url: "/medicines",
        method: "POST",
        body,
      }),
      invalidatesTags: ["medicines"],
    }),
    sellAvailabity:builder.mutation({
      query:({id,body})=>({
        url:`/medicine/sell/${id}`,
        method:"PUT",
        body
      }),
      invalidatesTags:["medicines"]
    })
  }),
});

export const {
  useAllMedicinesQuery,
  useSearchMedicineQuery,
  useSingleMedicineQuery,
  useCreateMedicineMutation,
  useSellAvailabityMutation
} = medicinesApi;