import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    info: null,
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        loadMovie: (state, provider) => {
            state.info = provider.payload
        },
        removeMovie: (state) => {
            state.info = null
        }
    },
})


export const { loadMovie, removeMovie } = movieSlice.actions

export default movieSlice.reducer