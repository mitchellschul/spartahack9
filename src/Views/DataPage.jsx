import React from 'react'
import "../../src/Css/DataPage.css"
// import "../CSS"
const DataPage = () => {
    return (
        <div style={{
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh' // This makes sure your div takes up the full height of the view
        }}>
            <div class="fade-in"><div>Data</div></div>

            <div>Drink's</div>
            <div>Chart</div>
        </div>
    )
}

export default DataPage;