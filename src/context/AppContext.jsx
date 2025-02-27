import { useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import Api from "../services/Api";
import { getLocalStorage, setLocalStorage } from "./utils";


export const AppContext = createContext({});

export const AppContextProvider = ({children}) => {
    const [user, setUser] = useState();

    useEffect(()=> {
        const user = getLocalStorage('user')
        if(user){
            setUser(user)
        }
    console.log('usuário logado', user)
    }, [])
    
    
    async function authenticate(email, password) {
        console.log('chegando em authenticate')
        Api.post('https://user-api-p9ru.onrender.com/auth/login/', {email, password})
        .then((response) => {
            if(!response.data.error === true){
                toast.success(response)                
            }
            const email = response.data.email;
            const payload = { token: response.data.token,  email}
            setUser(payload);
            setLocalStorage(payload);
            //window.location.href="/perfil"
            toast.success("Login realizado com sucesso!")
        }).catch((response) => {
            if(response.status == 400){
                toast.error('Erro ao autenticar. Verifique suas credenciais.')
            }else{
                toast.error('Erro inesperado. Tente novamente mais tarde.')
            }
            
        })
    }

    function logout(){
        setUser(null)
        setLocalStorage(null)
        

    }

    return(
        <AppContext.Provider value={{ ...user, authenticate, logout}}>
            {children}
        </AppContext.Provider>
    )
}