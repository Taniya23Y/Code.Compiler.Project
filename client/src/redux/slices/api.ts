import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { compilerSliceStateType } from "./compilerSlice";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    saveCode: builder.mutation<
      { url: string; status: string },
      compilerSliceStateType["fullCode"]
    >({
      query: (fullCode) => {
        return {
          url: "/compiler/save",
          method: "POST",
          body: fullCode,
        };
      },
    }),
    loadCode: builder.mutation<
      { fullCode: compilerSliceStateType["fullCode"] },
      { urlId: string }
    >({
      query: (body) => ({
        url: "/compiler/load",
        method: "POST",
        body: body,
      }),
    }),
    login: builder.mutation<userInfoType, loginCredentialsType>({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body: body,
        credentials: "include",
      }),
    }),
    signup: builder.mutation<userInfoType,signupCredentialsType>({
      query:(body)=>({
        url:"/user/signup",
        method: "POST",
        body: body
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/user/logout",
        method: "POST",
      }),
    }),
    getUserDetails: builder.query<userInfoType, void>({
      query: () => ({ url: "/user/user-details", cache: "no-store" }),
    }),
  }),
});

export const {
  useSaveCodeMutation,
  useLoadCodeMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetUserDetailsQuery,
  useSignupMutation,
} = api;
