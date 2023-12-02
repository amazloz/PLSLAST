import { INTERESTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const interestsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInterests: builder.query({
      query: () => ({ url: INTERESTS_URL }),
    }),
    keepUnusedDataFor: 5,
  }),
});

export const { useGetInterestsQuery } = interestsApiSlice;
