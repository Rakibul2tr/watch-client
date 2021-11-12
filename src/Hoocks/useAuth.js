import { useContext } from "react";
import { Mycontext } from "../ContextApi/Contextprovider";

const useAuth=()=>{
    return useContext(Mycontext);
    
}
export default useAuth;