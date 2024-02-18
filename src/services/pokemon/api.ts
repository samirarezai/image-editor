// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    tagTypes: ['Post'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (builder) => ({
        getAllPokemon: builder.query<[], string>({
            query: () => `posts/`,
            providesTags: ['Post'],
        }),
        getPokemonByName: builder.query({
            query: (name) => `posts/${name}`,
        }),
        addPost: builder.mutation<{}, Omit<{}, 'id'>>({
            query: (body) => ({
                url: 'posts',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Post'],
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetPokemonByNameQuery,
    useGetAllPokemonQuery,
    useAddPostMutation} = pokemonApi;