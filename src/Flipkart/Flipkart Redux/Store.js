import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./LoginReducer"
import CartReducer from "./CreateSlice";
import  setSearchTerm  from "./CreateSearch";
import { Search } from "lucide-react";
const Store = configureStore(
    {
        reducer : {
            Login : LoginReducer ,
            cart : CartReducer,
            search : setSearchTerm,
        }
    }
)
export default Store