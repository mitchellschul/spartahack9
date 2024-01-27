import React, {useState} from 'react'
import {createClient} from '@supabase/supabase-js'
import "../Css/Inventory.css"
const Inventory = () => {
    // const [list, setList] = useState([]);
    // const handleChange = () => {
    //     const newItem = {
    //         itemBrand: inputData
    //     }
    // }

    const AddInventoryItem = () => {
        // Initialize Supabase client with your Supabase URL and API key
        const supabaseUrl = 'https://unbgguntihzhmkjdmxnc.supabase.co';
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuYmdndW50aWh6aG1ramRteG5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzODczOTIsImV4cCI6MjAyMTk2MzM5Mn0.uDHM_rRniPF1mf3Y8h_zv4ydgSFRpqKYppMbubHxmWk';
        const supabase = createClient(supabaseUrl, supabaseKey);
      
        // State to manage form input
        const [itemName, setItemName] = useState('');
        const [quantity, setQuantity] = useState(0);
      
        // Function to handle form submission
        const handleSubmit = async (e) => {
          e.preventDefault();
      
          try {
            // Use the 'insert' method to add a new row to the "Inventory" table
            const { data, error } = await supabase
              .from('Inventory')
              .insert([
                { item_name: itemName, quantity }
              ]);
      
            if (error) {
              throw error;
            }
      
            console.log('New inventory item added:', data);
      
            // Clear form inputs after successful submission
            setItemName('');
            setQuantity(0);
          } catch (error) {
            console.error('Error adding inventory item:', error.message);
          }
        };
      
    }



    return (
        // <div>
        //      <form className='inventory'>
        //         <input type='text' className='item-brand' onChange={handleChange}></input>
        //         <input type='text' className='item-type' onChange={handleChange}></input>
        //         <button type='submit' className='submit-button'>Add Item</button>
        //      </form>
        // </div>
        <div>
      <h2>Add New Inventory Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Item Name:
          <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
        </label>
        <br />
        <button type="submit">Add Inventory Item</button>
      </form>
    </div>
    )

    }
export default Inventory