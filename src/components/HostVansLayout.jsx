import { Outlet, useParams, NavLink, Link, useLoaderData } from "react-router"
import { useEffect, useState } from "react"
import { getHostVans } from "../api"

export function loader({params}){
    return getHostVans(params.id)
}

export default function HostVansLayout(){

    const hostVanDetail = useLoaderData()[0]

    return(
        <section className="van-host-info">
            <Link
                to=".."
                relative="path"
                className="back-button"
            >
                &larr; <span>Back to all vans</span>
            </Link>
            <div className="van-host-info-container">
                <div className="vhd-header">
                    <div className="vhd-img-container"><img src={hostVanDetail.imageUrl}/></div>
                    <div className="vhd-info">
                        <span className={`van-type  ${hostVanDetail.type}`}>{hostVanDetail.type}</span>
                        <h3>{hostVanDetail.name}</h3>
                        <p className="vhd-price"><span>{`$${hostVanDetail.price}`}</span>/day</p>
                    </div>
                </div>
                <nav>
                    <NavLink
                        to="."
                        end
                        className={({isActive})=> isActive? "active":""}
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        className={({isActive})=> isActive? "active":""}
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        className={({isActive})=> isActive? "active":""}
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{hostVanDetail}}/>
            </div>
        </section>
    )
}