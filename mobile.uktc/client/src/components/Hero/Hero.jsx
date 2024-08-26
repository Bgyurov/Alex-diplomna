import { useContext } from 'react'
import heroPhoto from '../../assets/sold-label-sign-concept-on-transparent-background-free-png.webp'
import { HeroItem } from './HeroItem/HeroItem.jsx'
import './welcome.css'
import AdsContext from '../../contexts/AdsContext.jsx'

export const Hero = ({

}) => {
    let { heroAds } = useContext(AdsContext)

    if (heroAds.length > 3) {
        heroAds = heroAds.slice(-3)
    }
    return (
        <section id="welcome-world">


            <div className="welcome-message">
                <h2>Rev Up Your Dreams at </h2>
                <h3>CarAvenue!</h3>
            </div>
            <img src={heroPhoto} alt="hero" />
            <br />

            <div id="home-page">
                <h1>Latest Ad</h1>


                {heroAds.map(x =>
                    <HeroItem key={x._id} {...x} />
                )}



                {heroAds.length === 0 && (

                    <p className="no-articles">No ads yet</p>

                )}
            </div>
        </section>
    )
}