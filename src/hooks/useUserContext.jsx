import { useContext } from "react";
import { UserContext } from "../providers/UserContext";
/* custom hook de acceso al contexto  */
export const useUserContext=()=>{ 
    return useContext(UserContext); 
}