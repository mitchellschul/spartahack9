import React, { useEffect, useState } from 'react'
import DrinkCard from '../Components/DrinkCard'
import "../CSS/Drinks.css"
import Placeholder from '../Images/placeholder.jpg'

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database




const Drinks = () => {



    const supabaseUrl = 'https://unbgguntihzhmkjdmxnc.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuYmdndW50aWh6aG1ramRteG5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzODczOTIsImV4cCI6MjAyMTk2MzM5Mn0.uDHM_rRniPF1mf3Y8h_zv4ydgSFRpqKYppMbubHxmWk';
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch all data from the "Drinks" table
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        getDrinks();
    }, []);

    async function getDrinks() {
        const { data } = await supabase.from("Drinks").select();
        console.log(data);
        setDrinks(data);
    }
    // async function getAllDrinks() {
    //     // try {
    //     //     // Use the 'select' method to get all rows from the "Drinks" table
    //     //     const { data, error } = await supabase
    //     //         .from('Drinks')
    //     //         .select('*'); // '*' means all columns; you can specify specific columns if needed

    //     //     if (error) {
    //     //         throw error;
    //     //     }

    //     //     console.log('All drinks:', data);
    //     //     return data;
    //     // } catch (error) {
    //     //     console.error('Error fetching drinks:', error.message);
    //     // }
    // }







    return (
        <div>

            
            <h1 className='recommendations-title'>Your Recommended Drinks</h1>
            

            <div class="filter-bar">

                Filter: <select>
                    <option value="all">All</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                </select>
            </div>

            {/* <button onClick={getAllDrinks}>Drinks</button> */}

            <div class="container">
                {drinks.map((drink, index) => (
                    // <li key={index}>{`${drink.DrinkName} - ${drink.MainAlc}`}</li>
                    <DrinkCard img={`${drink.Img}`} rating={`${drink.Rating}`} name={`${drink.DrinkName}`} />
                ))}

            </div>

        </div>

    )
}

export default Drinks