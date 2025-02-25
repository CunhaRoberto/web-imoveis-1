export function setLocalStorage (user){
    localStorage.setItem('user', JSON.stringify(user))
}

export function getLocalStorage () {
    const json = localStorage.getItem('user')
    if(!json){
       return null 

    }

    const user = JSON.parse(json)
    return user ?? null

}