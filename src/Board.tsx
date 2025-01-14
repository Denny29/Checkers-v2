import { useState } from "react";
import Tile from "./tile";

const Board = () => {
    let totalRows = 8
    let totalColumns = 8

    const [gameBoard, updateBoard]= useState<string[][]>(
        Array.from({ length: totalRows }, () => Array(totalColumns).fill(""))
    )
    console.log(gameBoard)
    console.log("hi")


    return <div className="game">
        {gameBoard.map((row, rowIndex) => {
            return <div key={`row-${rowIndex}`} className="rows">
                {row.map((item, columnIndex) => {
                return <Tile 
                key={`${rowIndex}-${columnIndex}`}
                />
                })}
            </div>
        })}
    </div>
}

export default Board