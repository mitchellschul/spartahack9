import React from 'react'
import "../CSS/home.css"
const Home = () => {
    return (

            
            <div class="fade-in">
                <div className='welcome-div'>
                    <h3 className='welcome-text'>Welcome</h3>
                    <h3 className='welcome-text'>To</h3>
                    <h3 className='welcome-text'>Layman's Mixology</h3>
                    <div className='scroll-button'>
                        <a href="#about-section">
                            <button className='scroll-btn'>Scroll Down ⬇️</button>
                        </a>
                    </div>
                    
                </div>
                
                <section id='about-section'>
                    <h2>About</h2>
                    <h1 className='about-text'>As most amateur bartenders know, </h1>
                    <a href='./Inventory'><button className='inventory-button'>Click Me To Start!</button></a>
                </section>
            </div>

    )
}

export default Home