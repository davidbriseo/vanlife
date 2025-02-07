import { useParams, Link, useLocation, useLoaderData } from "react-router"
import { useEffect, useState } from "react"
import { FaArrowLeftLong } from "react-icons/fa6";
import { getVans } from "../api";


export function loader({params}){
    return getVans(params.id)
}

export default function VanDetail(){

    const location = useLocation()

    const vanDetail = useLoaderData()

    const search = location.state?.search || ""


    const type = location.state?.type || "all"

    return(
        <section className="van-detail main-container">
            <Link 
                className="return-link" 
                to={`..?${search}`}
                relative="path"
            >
                <FaArrowLeftLong className="arrow-icon"/>
                <span>Back to {type} vans</span>
            </Link>
            
            <>
                <div className="detail-img-container">
                    <img src={vanDetail.imageUrl}/>
                </div>
                <div className={`van-type  ${vanDetail.type}`} >{vanDetail.type}</div>
                <h2 className="detail-name">{vanDetail.name}</h2>
                <p className="detail-price"><span>${vanDetail.price}</span>/day</p>
                <p className="detail-description">{vanDetail.description}</p>
            </>
        
            <button>Rent this Van</button>
        </section>
    )
}