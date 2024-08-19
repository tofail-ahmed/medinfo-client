import { baseApi } from "../baseApi";

const medicinesApi=baseApi.injectEndpoints({
      endpoints:(builder)=>({
            allMedicines:builder.query({
                  query:()=>({
                        url:"/medicines",
                        method:"GET"
                  }),
                  providesTags:["medicines"]
            })
      })
})
export const {useAllMedicinesQuery}=medicinesApi