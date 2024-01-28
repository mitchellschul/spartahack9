import React, { useEffect, useState } from 'react'
import DrinkCard from '../Components/DrinkCard'


import "../CSS/Drinks.css"


import { createClient } from '@supabase/supabase-js'

import { Routes, Route, Link, useParams } from 'react-router-dom';


// Create a single supabase client for interacting with your database




const Drinks = () => {


    const supabaseUrl = 'https://unbgguntihzhmkjdmxnc.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuYmdndW50aWh6aG1ramRteG5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzODczOTIsImV4cCI6MjAyMTk2MzM5Mn0.uDHM_rRniPF1mf3Y8h_zv4ydgSFRpqKYppMbubHxmWk';
    const supabase = createClient(supabaseUrl, supabaseKey);


    const [drinks, setDrinks] = useState([]);
    const [inventory, setInventory] = useState([]);
    const [makeDrinks, setMakeDrinks] = useState([]);

    useEffect(() => {
        getDrinks();
        getInventory();
        getMakeDrinks();

    }, []);

    async function getDrinks() {
        const { data } = await supabase.from("Drinks").select();
        setDrinks(data);
    }

    async function getInventory() {
        const { data } = await supabase.from("Inventory").select();
        let temp = [];
        data.forEach(element => {
            temp.push(element.Type);
        });
        setInventory(temp);
        // console.log(inventory);
    }

    async function getMakeDrinks() {
        let temp = [];
        drinks.forEach(element => {
            // console.log("drinks ", element.MainAlc, inventory);
            if (inventory.includes(element.MainAlc)) {

                temp.push(element)
            }
        });
        setMakeDrinks(temp);
        console.log(temp)
        console.log(temp);
    }

    return (
        <div>

            <header>
                <h1>Your Drink Recomendations</h1>
            </header>


            {/* <button onClick={test}>Drinks</button> */}

            <div class="container">
                {makeDrinks.map((drink, index) => (

                    <Link to={`recipes/${drink.DrinkName}`}><DrinkCard img={`${drink.Img}`} rating={`${drink.Rating}`} name={`${drink.DrinkName}`} /></Link>
                ))}
                {/* <Routes>
                    <Route path="/recipes/:postId" component={RecipePost} />
                </Routes> */}

            </div>

        </div>

    )
}

export default Drinks