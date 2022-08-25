import axios from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({ url: 'contacts', method: 'GET' }),
      keepUnusedDataFor: 3,
      providesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      query: data => ({
        url: 'contacts',
        method: 'POST',
        data,
      }),
      invalidatesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});
export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
