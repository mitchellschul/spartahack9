import React, { useState, useEffect } from 'react';
import "../CSS/Inventory.css";
import { createClient } from '@supabase/supabase-js';

const Inventory = () => {
    // Initialize Supabase client with your Supabase URL and API key
    const supabaseUrl = 'https://unbgguntihzhmkjdmxnc.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuYmdndW50aWh6aG1ramRteG5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzODczOTIsImV4cCI6MjAyMTk2MzM5Mn0.uDHM_rRniPF1mf3Y8h_zv4ydgSFRpqKYppMbubHxmWk';
    const supabase = createClient(supabaseUrl, supabaseKey);

    // State to manage form input
    const [itemBrand, setItemBrand] = useState('');
    const [type, setType] = useState('');

    // State for inventory
    const [inventory, setInventory] = useState([]);

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
            
            // Refresh the inventory list after adding a new item
            getInventory();
        } catch (error) {
            console.error('Error adding inventory item:', error.message);
        }
    };

    useEffect(() => {
        getInventory();
    }, []);

    async function getInventory() {
        try {
            const { data, error } = await supabase.from("Inventory").select();

            if (error) {
                throw error;
            }

            console.log('Fetched inventory data:', data);
            setInventory(data || []); // Set to empty array if data is null
        } catch (error) {
            console.error('Error fetching inventory:', error.message);
        }
    }

    const handleDelete = async (id) => {
        try {
            const { data, error } = await supabase
                .from('Inventory')
                .delete()
                .eq('id', id);

            if (error) {
                throw error;
            }

            console.log('Inventory item deleted:', data);

            // Refresh the inventory list after deleting an item
            getInventory();
        } catch (error) {
            console.error('Error deleting inventory item:', error.message);
        }
    };

    return (
        <div>
            <h2 className='inventory-title'>Add New Inventory Item</h2>
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

            <ul id="brands-list" class="brands-col">
                {inventory && inventory.map((inv) => (
                    <li key={inv.id}>
                        {`${inv.Brand} - ${inv.Type} `}
                        <button type='button' onClick={() => handleDelete(inv.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Inventory;




/*
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuYmdndW50aWh6aG1ramRteG5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzODczOTIsImV4cCI6MjAyMTk2MzM5Mn0.uDHM_rRniPF1mf3Y8h_zv4ydgSFRpqKYppMbubHxmWk';
*/
