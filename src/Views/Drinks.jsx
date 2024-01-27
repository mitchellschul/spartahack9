import React, { useEffect, useState } from 'react'
import DrinkCard from '../Components/DrinkCard'
import "../CSS/Drinks.css"
import Placeholder from '../Images/placeholder.jpg'

// In a React Native application
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';


//Initializing the SDK. 
Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
Parse.initialize('YOUR_APPLICATION_ID_HERE', 'YOUR_JAVASCRIPT_KEY_HERE');
Parse.serverURL = 'https://parseapi.back4app.com/';

const Drinks = () => {

    const [person, setPerson] = useState(new Parse.Object('Person'));
    //This function will retrieve a Person which the name is John
    async function fetchPerson() {
        //create your Parse Query using the Person Class you've created
        let query = new Parse.Query('Drinks');
        //run the query to retrieve all objects on Person class, optionally you can add your filters
        let queryResult = await query.findAll();
        //pick the first result 
        const currentPerson = queryResult;
        //access the Parse Object attributes
        console.log(currentPerson);
        setPerson(currentPerson);
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

            <button onClick={fetchPerson}>Get Drinks</button>

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