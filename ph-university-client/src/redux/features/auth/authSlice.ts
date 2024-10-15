import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";

export type TUser = {
    role:  string
    userId: string
    exp: number
    iat: number
    
}


type TIAuthState = {
    user : null | TUser,
    token : null | string
}


const initialState : TIAuthState = {
    user : null,
    token : null
}

 const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setUser : (state, action) => {
            const {user, token} = action.payload
            // console.log(user, token);
            
            state.user = user
            state.token = token
            console.log(token);
            
        },
        logout : (state) => {
            state.user = null,
            state.token = null
        }
    }
})

export const {setUser, logout} = authSlice.actions

export default authSlice.reducer

