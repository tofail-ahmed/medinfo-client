import { baseApi } from "../baseApi";

const usersApi=baseApi.injectEndpoints({
      endpoints:(builder)=>({
            userRegister:builder.mutation({
                  query:(body)=>({
                        url:"/register",
                        method:"POST",
                        body
                  })
            })
      })
})

export const {useUserRegisterMutation}=usersApi;