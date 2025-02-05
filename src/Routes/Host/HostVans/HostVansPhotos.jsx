import { useOutletContext } from "react-router"

export default function HostVansPhotos(){

    const context = useOutletContext()
    return(
        <div className="van-host-photos"><img src={context.hostVanDetail.imageUrl}/></div>
    )
}