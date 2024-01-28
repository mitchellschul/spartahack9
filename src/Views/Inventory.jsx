import React, { useState, useEffect } from 'react'
import "../Css/Inventory.css"
import { createClient } from '@supabase/supabase-js'
const Inventory = () => {
    // Initialize Supabase client with your Supabase URL and API key
    const supabaseUrl = 'https://unbgguntihzhmkjdmxnc.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuYmdndW50aWh6aG1ramRteG5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzODczOTIsImV4cCI6MjAyMTk2MzM5Mn0.uDHM_rRniPF1mf3Y8h_zv4ydgSFRpqKYppMbubHxmWk';
    const supabase = createClient(supabaseUrl, supabaseKey);

    // State to manage form input
    const [itemBrand, setItemBrand] = useState('');
    const [type, setType] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Use the 'insert' method to add a new row to the "Inventory" table
            const { data, error } = await supabase
                .from('Inventory')
                .insert([
                    { Brand: itemBrand, Type: type }
                ]);


            if (error) {
                throw error;
            }

            console.log('New inventory item added:', data);

            // Clear form inputs after successful submission
            setItemBrand('');
            setType('');
        } catch (error) {
            console.error('Error adding inventory item:', error.message);
        }
        getInventory();
    };

    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        getInventory();
    }, []);

    async function getInventory() {
        const { data } = await supabase.from("Inventory").select();
        console.log(data);
        setInventory(data);
    }



    return (
        <div>
            <h2>Add New Inventory Item</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Item Name:
                    <input type="text" value={itemBrand} onChange={(e) => setItemBrand(e.target.value)} />
                </label>
                <br />
                <label>
                    Type:
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
                </label>
                <br />
                <button type="submit">Add Inventory Item</button>
            </form>


            <ul id="brands-list">
                {inventory.map((inv, index) => (
                    // <li key={index}>{`${drink.DrinkName} - ${drink.MainAlc}`}</li>
                    <li key={index}>{`${inv.Brand} - ${inv.Type}`}</li>
                ))}
            </ul>
        </div>
    )
}

export default Inventory