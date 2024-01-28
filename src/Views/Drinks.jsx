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




    // Fetch all data from the "Drinks" table
    const [drinks, setDrinks] = useState([]);

    const [InventoryData, setInventoryData] = useState([]);

    useEffect(() => {
        getDrinks();
    });

    async function getDrinks() {
        const { data } = await supabase.from("Drinks").select();
        // console.log("1", data);
        setDrinks(data);

        getInventory();
    }
    async function getInventory() {
        const { data } = await supabase.from("Inventory").select();
        // console.log("2", data);
        setInventoryData(data);
        compareTables();
    }

    const [drinkList, setDrinkList] = useState([]);

    const compareTables = () => {
        let temp = [];
        // Your comparison logic goes here
        // For simplicity, let's just check if the lengths are equal
        let ingredList = [];

        InventoryData.forEach(element => {
            ingredList.push(element.Type);
        });


        drinks.forEach(element => {
            if (!ingredList.includes(element.MainAlc)) {
                console.log(ingredList)
                console.log("passed", element.MainAlc)
            } else {
                console.log("temp", temp)
                temp.push(element)
            }

        });

        console.log("Final", temp)
        setDrinkList(temp)

        console.log("Drinks", drinkList)

    };

    function RecipePost() {
        let { postId } = useParams();
        return <div>Post ID: {postId}</div>;
    }

    return (
        <div>

            <header>
                <h1>Your Recommended Drinks</h1>
            </header>

            <div class="filter-bar">

                Filter: <select>
                    <option value="all">All</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                </select>
            </div>

            {/* <button onClick={test}>Drinks</button> */}

            <div class="container">
                {drinkList.map((drink, index) => (

                    <Link to={`recipes/${drink.DrinkName}`}><DrinkCard img={`${drink.Img}`} rating={`${drink.Rating}`} name={`${drink.DrinkName}`} /></Link>
                ))}
                <Routes>
                    <Route path="/recipes/:postId" component={RecipePost} />
                </Routes>

            </div>

        </div>

    )
}

export default Drinks