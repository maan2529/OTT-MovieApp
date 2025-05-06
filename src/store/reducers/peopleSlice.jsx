import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    info: null,
}

export const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        loadPeople: (state, provider) => {
            state.info = provider.payload
        },
        removePeople: (state) => {
            state.info = null
        }
    },
})


export const { loadPeople, removePeople } = peopleSlice.actions

export default peopleSlice.reducer