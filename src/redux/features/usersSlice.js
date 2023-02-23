import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const BASE_URL_USERS = "https://jsonplaceholder.typicode.com/users"
const initialState = {
    entities : []
}

export const fetchUsers = createAsyncThunk("users/fetchUsers",async()=>{
    const response = await axios.get(BASE_URL_USERS)
    console.log("response: ", response)
    return response.data
})

const usersSlice = createSlice({
    name : "users",
    initialState,
    extraReducers(builder){
        builder.addCase(fetchUsers.fulfilled, (state,action)=>{
            state.entities = [
                ...state.entities,
            ]
            // state.entities.push(...action.payload)
        })
    }
})

export default usersSlice.reducer