import { useRouteError } from "react-router"

export default function Error(){
    
    const error = useRouteError()
    return(
        <>
        <h1>Error: {error.message}</h1>
        <p>{error.status} - {error.statusText}</p>
        </>

    )
}