import { useOutletContext } from "react-router"

export default function HostVansDetail(){

    const context = useOutletContext()

    return (
        <div className="van-host-detail">
            <p><strong>Name:</strong> {context.hostVanDetail.name}</p>
            <p><strong>Category:</strong> {context.hostVanDetail.type}</p>
            <p><strong>Description:</strong> {context.hostVanDetail.description}</p>
            <p><strong>Visibility:</strong> Public</p>
        </div>

    )
}