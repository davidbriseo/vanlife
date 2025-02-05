import { useOutletContext } from "react-router"

export default function HostVansPricing(){
    const context = useOutletContext()
    return (
        <p className="van-host-pricing"><span>{`$${context.hostVanDetail.price}`}</span>/day</p>
    )
}