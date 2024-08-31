import { baseApi } from "../baseApi";

const usersApi=baseApi.injectEndpoints({
      endpoints:(builder)=>({
            userRegister:builder.mutation({
                  query:(body)=>({
                        url:"/register",
                        method:"POST",
                        body
                  }),
                  invalidatesTags: ["users"],
            }),
            userLogin:builder.mutation({
                  query:(body)=>({
                        url:"/login",
                        method:"POST",
                        body
                  })
            }),
            allUser:builder.query({
                  query:()=>({
                        url:"/alluser",
                        method:"GET"
                  }),
                  providesTags: ["users"],
            })
      })
})

export const {useUserRegisterMutation,useUserLoginMutation,useAllUserQuery}=usersApi;