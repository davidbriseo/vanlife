import { Link } from 'react-router'
import aboutBanner from '../assets/about-banner.png'

export default function About(){
    return(
      <section className="about main-container">
        <div className="banner"><img src={aboutBanner}/></div>
        <div className="about-container">
            <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
            <p>
                Our mission is to enliven your road trip with the perfect travel van rental. 
                Our vans are recertified before each trip to ensure your travel plans can go 
                off without a hitch.
            </p>
            <p>(Hitch costs extra 😉)</p>
            <br/>
            <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            <div className="accent">
                <p>Your destination is waiting.</p>
                <p>Your van is ready.</p>
                <Link to='/vans'>Explore our vans</Link>
            </div>
            
        </div>
      </section>
    )
  }