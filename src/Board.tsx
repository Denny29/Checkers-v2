import { useState } from "react";
import Tile from "./tile";
import { ColorField } from "./ColorField";

const Board = () => {
    let totalRows = 8
    let totalColumns = 8
    let starterBoard = Array.from({ length: totalRows }, () => Array(totalColumns).fill(""))

    for (let row = 0; row < totalRows; row++) {
        for (let column = 0; column < totalColumns; column++) {
            if(row < 3){
                if ((row + column) % 2 === 0) 
                    starterBoard[row][column] = "red"
            }
            else if(row > 4){
                if ((row + column) % 2 === 0) 
                    starterBoard[row][column] = "black"
            }
        }
    }
    const [gameBoard, updateBoard]= useState<string[][]>(starterBoard)
    const [tileColors, setTileColors] = useState<string[]>(["navy-blue" , "sky-blue", "tileClicked"])
    const [toggleClick, updateClick] = useState<boolean>(false)

    const onTileClick = (rowIndex: number, columnIndex: number) => {
        if(toggleClick == false){

        }

        updateClick(!toggleClick)
    }


    return <>
        <div>
            <h1>Choose a Color Palette:</h1>
            <ColorField tileColors={tileColors} setTileColors={setTileColors}/>
        </div>
        <div className="game">
            {gameBoard.map((row, rowIndex) => {
                return <div key={`row-${rowIndex}`} className="rows">
                    {row.map((piece, columnIndex) => {
                        return <Tile 
                            color = {tileColors[(columnIndex + rowIndex) % 2]}
                            piece={piece}
                            key={`${rowIndex},${columnIndex} tile`} 
                            rowIndex={rowIndex}
                            columnIndex={columnIndex}/>
                    })}
                </div>
            })}
        </div>
    </>
}

export default Board