import { Outlet, Navigate } from "react-router"

export default function AuthLayout(){
    const authenticated = true

    if(!authenticated){
        return <Navigate to="/login" state={{message: "You must be logged on"}}/>
    }

    return <Outlet/>
}