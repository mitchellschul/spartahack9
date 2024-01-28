import React from 'react';
import "../../src/CSS/DataPage.css";

const DataPage = () => {
    return (
        <div className="fade-in">
            <div className ="h1">Data</div>
            <div>
                <p>Drinks</p>
                <div className='drink-chart'>
                    <p>Chart</p>
                </div>
                <div className="text">
                    <div className='h2'>Words</div>
                </div>
            </div>
        </div>
    );
}

export default DataPage;
