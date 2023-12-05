import { LANGUAGES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const languagesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLanguages: builder.query({
      query: () => ({ url: LANGUAGES_URL }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetLanguagesQuery } = languagesApiSlice;
