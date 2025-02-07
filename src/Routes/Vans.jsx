import {useEffect, useState} from 'react'
import {Link, useSearchParams, useLoaderData} from 'react-router'
import { getVans } from '../api'
import { clsx } from 'clsx'

export function loader(){
    return getVans()
}

export default function Vans(){

    const [searchParams, setSearchParams] = useSearchParams()
    const [error, setError] = useState(null)
    
    const vansData = useLoaderData()

    const typeFilter = searchParams.get("type")

    const vansElements = vansData
        .filter( van => typeFilter? van.type === typeFilter : van)
        .map(van => {
            return(
                <div className='van-element' id={van.id} key={van.id}>
                    <Link 
                        to={van.id}
                        state={{
                                search: searchParams.toString(),
                                type: typeFilter
                            }}
                    >
                        <div className='van-image-container'>
                            <img src={van.imageUrl} alt={van.name}></img>
                        </div>
                        <div className='van-info'>
                            <div className='van-text-container'>
                                <p className='van-name'>{van.name}</p>
                                <span className={`van-type ${van.type}`}>{van.type}</span>
                            </div>
                            <div className='van-price-container'>
                                <p className='van-price'>{`$${van.price}`}</p>
                                <p className='van-rate'>/day</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
    })


    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    const bgStyles = {
        backgroundColor: 
            typeFilter === "simple"? "#E17654" 
            : typeFilter === "rugged"? "#115E59"
            : typeFilter === "luxury"? "#161616"
            : "#FFEAD0",

        color: "#FFEAD0"
    }

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            console.log(prevParams)
            return prevParams
        })
    }
    
    return (
        <section className="vans main-container">
            <h3>Explore our vans options</h3>
            <div className='filters'>
                <div className='tags'>
                    <button 
                        onClick={() => handleFilterChange("type", "simple")} 
                        style={typeFilter === "simple"? bgStyles : {}}
                        >
                        Simple
                    </button>
                    <button 
                        onClick={() => handleFilterChange("type", "rugged")} 
                        style={typeFilter === "rugged"? bgStyles : {}}
                        >
                        Rugged
                    </button>
                    <button 
                        onClick={() => handleFilterChange("type", "luxury")} 
                        style={typeFilter === "luxury"? bgStyles : {}}
                    >
                        Luxury
                    </button>
                </div>
                {typeFilter && <p onClick={() => handleFilterChange("type", null)}>Clear filters</p>}
            </div>
            <div className='vans-list'>
                {vansElements}
            </div>
        </section>
    )
}