import { baseApi } from "../baseApi";

const usersApi=baseApi.injectEndpoints({
      endpoints:(builder)=>({
            userRegister:builder.mutation({
                  query:(body)=>({
                        url:"/register",
                        method:"POST",
                        body
                  })
            }),
            userLogin:builder.mutation({
                  query:(body)=>({
                        url:"/login",
                        method:"POST",
                        body
                  })
            })
      })
})

export const {useUserRegisterMutation,useUserLoginMutation}=usersApi;