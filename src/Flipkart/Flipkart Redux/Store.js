import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./LoginReducer"
import CartReducer from "./CreateSlice";
const Store = configureStore(
    {
        reducer : {
            Login : LoginReducer ,
            cart : CartReducer,
        }
    }
)
export default Store