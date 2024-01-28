import React from 'react'
import "../../src/CSS/home.css"
import logo from "../Images/site_logo.png"
const Home = () => {
    return (
        <div className='background'>
            
            <div class="fade-in">
                <h3 className='welcome-text'>Welcome</h3>
                <h3 className='welcome-text'>To</h3>
                <h3 className='welcome-text'>Layman's Mixology</h3>
                
                <h2>About</h2>
                <h1 className='about-section'>As most amateur bartenders know, the art of bartending can, to put it bluntly, suck at times. Often times drinks can be made horribly wrong, and even if done right, can taste completely different than expected due to snobby, complex vocabulary. Layman's Mixology fixes all that by removing the prospect of human error, given users not only an apt description of their drink, but also a personalised chart showing what flavor profiles the user tends to enjoy more.</h1>
            </div>

        </div>
    )
}

export default Home