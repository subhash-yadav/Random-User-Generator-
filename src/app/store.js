import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/Users";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
console.log(userApi,"userApi")
export const store = configureStore({
    reducer :{
        [userApi.reducerPath]:userApi.reducer
    },
    middleware: (getDefaultMid) =>{
       return getDefaultMid().concat(userApi.middleware);
    }
})
setupListeners(store.dispatch);