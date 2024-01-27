import React, { useEffect, useState } from 'react'
import DrinkCard from '../Components/DrinkCard'
import "../CSS/Drinks.css"
import Placeholder from '../Images/placeholder.jpg'
import { createClient } from '@supabase/supabase-js'



const Drinks = () => {



    const supabaseUrl = 'https://unbgguntihzhmkjdmxnc.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient("https://unbgguntihzhmkjdmxnc.supabase.co", eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuYmdndW50aWh6aG1ramRteG5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzODczOTIsImV4cCI6MjAyMTk2MzM5Mn0.uDHM_rRniPF1mf3Y8h_zv4ydgSFRpqKYppMbubHxmWk)


    let { data: Drinks, error } = await supabase
        .from('Drinks')
        .select('*')


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



            <div class="container">
                <DrinkCard img={Placeholder} rating="⭐⭐⭐⭐" name="Drink Name" />
                <DrinkCard img={Placeholder} rating="⭐⭐⭐⭐" name="Drink Name" />
                <DrinkCard img={Placeholder} rating="⭐⭐⭐⭐" name="Drink Name" />
                <DrinkCard img={Placeholder} rating="⭐⭐⭐⭐" name="Drink Name" />
                <DrinkCard img={Placeholder} rating="⭐⭐⭐⭐" name="Drink Name" />
            </div>

        </div>

    )
}

export default Drinks