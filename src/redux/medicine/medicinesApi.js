import { baseApi } from "../baseApi";

const medicinesApi=baseApi.injectEndpoints({
      endpoints:(builder)=>({
            allMedicines:builder.query({
                  query:()=>({
                        url:"/medicines",
                        method:"GET"
                  }),
                  providesTags:["medicines"]
            }),
            searchMedicine: builder.query({
                  query: (term) => ({
                    url: `/medicines/search/${term}`,
                    method: "GET",
                  }),
                  // providesTags: (result, error, term) => [{ type: 'Medicines', id: term }],
                }),
      }),
    
      
      })

export const {useAllMedicinesQuery,useSearchMedicineQuery}=medicinesApi