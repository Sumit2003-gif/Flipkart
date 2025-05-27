import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const LoginButton = createSlice(
    {
        name : "Login",
        initialState : {
            isLogin : false,
            username : null
        },
        reducers : {
            login : (state,action) => {
    //   state.isAuthenticated = true;
                state.isLogin = true;
                state.username = action.payload
            },
            logout : (state,action) => {
                    //   state.isAuthenticated = false;

                state.isLogin = false;
                state.username = null
            }
        }
    }
)
export const {login,logout} = LoginButton.actions
export default LoginButton.reducer