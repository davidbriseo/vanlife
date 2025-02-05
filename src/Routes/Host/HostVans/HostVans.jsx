import { Link } from "react-router"
import { useEffect, useState } from "react"
export default function HostVans(){
//aqui solo vamos a pasar el id que luego va  reconocer mi funcion useParams

    const [hostVans, setHostVans] = useState([])

    useEffect(()=>{
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setHostVans(data.vans))
    }, [])

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