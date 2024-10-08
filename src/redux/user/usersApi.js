import { baseApi } from "../baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["users"],
    }),
    userLogin: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    allUser: builder.query({
      query: () => ({
        url: "/alluser",
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/deleteUser/${id}`,
        method: "DELETE",
        id,
      }),
      invalidatesTags: ["users"],
    }),
    updateRole: builder.mutation({
      query: ({ id, role }) => ({
        url: `/userRole/${id}`,
        method: "PUT",
        body: { role }, // Send the role in the body
      }),
      invalidatesTags: ["users"],
    }),
    purchaseMedicine: builder.mutation({
      query: ({ id, medicineDetails }) => ({
        url: `/userPurchaseList/${id}`,
        method: "PUT",
        body: medicineDetails,
      }),
      invalidatesTags: ["users"],
    }),
    singleUser: builder.query({
      query: (id) => ({
        url: `/singleUser/${id}`,  // Send the id directly
        method: "GET"
      }),
      providesTags: ["users"],
    }),
  }),
});

export const {useUserRegisterMutation,useUserLoginMutation,useAllUserQuery,useDeleteUserMutation,useUpdateRoleMutation,usePurchaseMedicineMutation,useSingleUserQuery}=usersApi;