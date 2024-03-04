import { commonapi } from "./commonAPI";
import { baseURL } from "./baseURL";

export const adminLoginApi=async(admin)=>{
    return await commonapi('POST',`${baseURL}/adminLogin`,admin,"")
}

export const getUserDataApi=async()=>{
    return await commonapi('GET',`${baseURL}/getuserdata`)
}