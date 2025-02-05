import { useParams, Link, useLocation } from "react-router"
import { useEffect, useState } from "react"
import { FaArrowLeftLong } from "react-icons/fa6";


export default function VanDetail(){

    const params = useParams()
    const [vanDetail, setVanDetail] = useState(null)
    const location = useLocation()

    console.log(location)

    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVanDetail(data.vans))
    },[params.id])

    const search = location.state?.search || ""

    return(
        <section className="van-detail main-container">
            <Link 
                className="return-link" 
                to={`..?${search}`}
                relative="path"
            >
                <FaArrowLeftLong className="arrow-icon"/>
                <span>Back to all vans</span>
            </Link>
            {vanDetail? (
                <>
                    <div className="detail-img-container">
                        <img src={vanDetail.imageUrl}/>
                    </div>
                    <div className={`van-type  ${vanDetail.type}`} >{vanDetail.type}</div>
                    <h2 className="detail-name">{vanDetail.name}</h2>
                    <p className="detail-price"><span>${vanDetail.price}</span>/day</p>
                    <p className="detail-description">{vanDetail.description}</p>
                </>
            )
            :<h2>loading...</h2>}
            <button>Rent this Van</button>
        </section>
    )
}