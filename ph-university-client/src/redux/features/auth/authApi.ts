import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        login : builder.mutation({
            query : (userInfo) => {
                console.log("Inside data", userInfo);
                
                return {
                    
                        url : "/auth/login",
                        method : "POST",
                        body : userInfo
                    
                }
            }
        })
    })
})

export const {useLoginMutation} = authApi