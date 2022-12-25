import React, { useState } from 'react'

function SS5() {
    const [color, setColor] = useState('red')
    const handleChangeColor = () => {
        if (color === 'red') {
            setColor('yellow')
        } else if (color === 'yellow') {
            setColor('green')
        } else {
            setColor('red')
        }
    }

    console.log(color)
    return (
        <div style={{ marginTop: 55, textAlign: 'center' }}>
            <button onClick={handleChangeColor} >Next</button>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="red" style={{ backgroundColor: color === 'red' ? color : 'white' }}></div>
                <div className="yellow" style={{ backgroundColor: color === 'yellow' ? color : 'white' }}></div>
                <div className="green" style={{ backgroundColor: color === 'green' ? color : 'white' }}></div>
            </div>

        </div>
    )
}

export default SS5
