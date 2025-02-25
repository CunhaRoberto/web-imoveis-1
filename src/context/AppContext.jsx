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
        console.log('teste')
        Api.post('https://user-api-p9ru.onrender.com/auth/login', {email, password})
        .then((response) => {
            if(!response.data.error === true){
                toast(response.data.message)
            }
            const email = response.data.email;
            const payload = { token: response.data.token,  email}
            setUser(payload);
            setLocalStorage(payload);
            window.location.href="/perfil"
            
        }).catch(() => {
            console.log('Erro: App Error')
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