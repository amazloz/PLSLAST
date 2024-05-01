import { NOTES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const notesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => ({ url: NOTES_URL }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetNotesQuery } = notesApiSlice;
