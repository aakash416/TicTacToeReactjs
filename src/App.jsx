import { useState } from 'react';
import React from 'react'
import Box from './Box';


const App = () => {
    const [data, setData] = useState(Array(9).fill(null))
    const [marker, setMarker] = useState(true);

    const handleClick = (boxAddress) => {
        if (data[boxAddress] !== null)
            return;
        const updatedData = [...data];
        updatedData[boxAddress] = marker ? "X" : "O";
        setData(updatedData);
        setMarker(!marker);
    };

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (data !== null && data[a] === data[b] && data[b] === data[c])
                return data[a];
        }
        return false;
    }

    const winner = checkWinner();

    const handaleReset = () => {
        setData(Array(9).fill(null));
    }

    return (
        <div>
            {
                winner ? (<>
                    <h1>{winner} Won A game</h1>
                    <button onClick={handaleReset}>Click Here to Play Again</button></>) :
                    (<>
                        <h1> {marker ? "X" : "O"} is your Turn</h1>
                        <div className="container">
                            <div className="row">
                                <div className="col" onClick={() => handleClick(0)}><Box data={data[0]} /></div>
                                <div className="col" onClick={() => handleClick(1)}><Box data={data[1]} /></div>
                                <div className="col" onClick={() => handleClick(2)}><Box data={data[2]} /></div>
                            </div>
                            <div className="row">
                                <div className="col" onClick={() => handleClick(3)}><Box data={data[3]} /></div>
                                <div className="col" onClick={() => handleClick(4)}><Box data={data[4]} /></div>
                                <div className="col" onClick={() => handleClick(5)}><Box data={data[5]} /></div>
                            </div>
                            <div className="row">
                                <div className="col" onClick={() => handleClick(6)}><Box data={data[6]} /></div>
                                <div className="col" onClick={() => handleClick(7)}><Box data={data[7]} /></div>
                                <div className="col" onClick={() => handleClick(8)}><Box data={data[8]} /></div>
                            </div>

                        </div>
                    </>)
            }
        </div >
    )
}

export default App;