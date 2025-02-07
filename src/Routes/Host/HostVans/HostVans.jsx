import { Link, useLoaderData } from "react-router"
import { useEffect, useState } from "react"
import { getHostVans } from "../../../api"

export function loader(){
    return getHostVans()
}

export default function HostVans(){

    const hostVans = useLoaderData()

    const hostDetailEl = hostVans.map(van => (
        
        <Link to={van.id} key={van.id}>
            <div  className="host-van-el">
                <div className="host-van-img"><img src={van.imageUrl} /></div>
                <h3>{van.name}</h3>
                <p>{`$${van.price}/day`}</p>
            </div>
        </Link>

    )) 

    return (
        <section className="host-vans">
            <h2>Your listed vans</h2>
            {hostDetailEl}
        </section>
    )
}