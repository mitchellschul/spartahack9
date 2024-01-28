import { useEffect, useState } from 'react';
import { Chart } from 'chart.js/auto';
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import "../../src/CSS/DataPage.css";
import { createClient } from '@supabase/supabase-js';

const DataPage = () => {

    const supabaseUrl = 'https://unbgguntihzhmkjdmxnc.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuYmdndW50aWh6aG1ramRteG5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzODczOTIsImV4cCI6MjAyMTk2MzM5Mn0.uDHM_rRniPF1mf3Y8h_zv4ydgSFRpqKYppMbubHxmWk';
    const supabase = createClient(supabaseUrl, supabaseKey);


    const [drinks, setDrinks] = useState([]);
    const [count, setCount] = useState(0);
    const [flavor, setFlavor] = useState([]);
    const [flavorData, setFlavorData] = useState([]);

    useEffect(() => {
        getDrinks();
        getCount();
        getFlavor();
        countEverything();

    }, []);

    async function getDrinks() {
        const { data } = await supabase.from("Drinks").select();
        setDrinks(data);
        console.log(data)
    }

    async function getCount() {
        let temp = []
        drinks.forEach(element => {
            temp.push(element.Count)
        });
        setCount(temp)
    }
    async function getFlavor() {
        let temp = []
        drinks.forEach(element => {
            temp.push(element.FlavorProfile) 
        });
        setFlavor(temp)
    }
    async function countEverything() {
        console.log('Canvas Element:', document.getElementById('pieChart'));
        let Spicy = 1
        let Sweet = 1
        let Tangy = 1
        let Salty = 1
        let Smokey = 1
        let Bitter = 1
        let Tart = 0 
        let Smooth = 0 
        let Fruity = 0 
        
        flavor.forEach(element => {
            let objects = element.split(', ');
            objects.forEach(fla => {
                console.log(fla)
                if(fla == 'Spicy'){
                    Spicy++;
                }
                if(fla == 'Sweet'){
                    Sweet++;
                }
                if(fla == 'Tangy'){
                    Tangy++;
                } 
                if(fla == 'Salty'){
                    Salty++;
                }
                if(fla == 'Smokey'){
                    Smokey++;
                }
                if(fla == 'Bitter'){
                    Bitter++;
                }
                if(fla == 'Tart'){
                    Tart++;
                }
                if(fla == 'Smooth'){
                    Smooth++;
                }
                if(fla == 'Fruity'){
                    Fruity++;
                }

            });
           
            
                
        });

        // console.log(Smooth);
        
        let temp = [Spicy, Sweet, Tangy, Salty, Smokey, Bitter, Tart, Smooth, Fruity]
        setFlavorData(temp)
         
    }

    const data = [
        { value: flavorData[0], label: 'Spicy' },
        { value: flavorData[1], label: 'Sweet' },
        { value: flavorData[2], label: 'Tangy' },
        { value: flavorData[3], label: 'Salty' },
        { value: flavorData[4], label: 'Smokey' },
        { value: flavorData[5], label: 'Bitter' },
        { value: flavorData[6], label: 'Tart' },
        { value: flavorData[7], label: 'Smooth' },
        { value: flavorData[8], label: 'Fruity' }
      ];
      
      const size = {
        width: 600,
        height: 200,
      };
      
      const StyledText = styled('text')(({ theme }) => ({
        fill: theme.palette.text.primary,
        textAnchor: 'middle',
        dominantBaseline: 'central',
        fontSize: 20,
        fill: '#eee',
      }));
      
      function PieCenterLabel({ children }) {
        const { width, height, left, top } = useDrawingArea();
        return (
          <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
          </StyledText>
        );
      }
      

        
    return (
        <div className="fade-in">
            <div className="data">Data</div>
            <PieChart series={[{ data, innerRadius: 80, color: '#eee' }]}  {...size}>
                <PieCenterLabel className = 'css-1qkz8p7' style={{color: '#fff'}} >Your Spread</PieCenterLabel>
            </PieChart>
        </div>
    );
};

export default DataPage;

