import { Link } from "react-router"

export default function PageNotFound(){
    return(
        <section className="page-not-found">
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link to="..">Return to Home</Link>
        </section>
    )
}