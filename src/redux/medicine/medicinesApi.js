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
    medCategory: builder.query({
      query: ({ category, type }) => {
        const params = {};
        if (category) params.category = category;
        if (type) params.type = type;
    
        return {
          url: `/medByValueField`,
          method: "GET",
          params,  // Passes both category and type when available
        };
      },
      providesTags: ["medicines"],
    }),
    
    
    singleMedicine: builder.query({
      query: (id) => ({
        url: `/singleMedicine/${id}`,
        method: "GET",
      }),
      providesTags: ["medicines"],

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
    }),
    updateMed:builder.mutation({
      query:({id,updatedMed})=>({
        url:`/medicine/${id}`,
        method:"PUT",
        body:updatedMed,
      }),
      invalidatesTags:["medicines"]
    }),
    suggestMedicine:builder.mutation({
      query:(body)=>({
        url:"/suggestMedicine",
        method:"POST",
        body
      }),
      invalidatesTags: ["medicines"],
    })
  }),
});

export const {
  useAllMedicinesQuery,
  useSearchMedicineQuery,
  useSingleMedicineQuery,
  useCreateMedicineMutation,
  useSellAvailabityMutation,
  useUpdateMedMutation,
  useMedCategoryQuery,
  useSuggestMedicineMutation
} = medicinesApi;