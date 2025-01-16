import { useState } from "react";
import Tile from "./tile";
import { ColorField } from "./ColorField";

const Board = () => {
    let totalRows = 8
    let totalColumns = 8

    const [gameBoard, updateBoard]= useState<string[][]>(
        Array.from({ length: totalRows }, () => Array(totalColumns).fill(""))
    )
    const [tileColors, setTileColors] = useState<string[]>(["navy-blue" , "sky-blue"])
    
    //Add additional color options below

    return <>
        <div>
            <h1>Choose a Color Palette:</h1>
            <ColorField tileColors={tileColors} setTileColors={setTileColors}/>
        </div>
        <div className="game">
            {gameBoard.map((row, rowIndex) => {
                return <div key={`row-${rowIndex}`} className="rows">
                    {row.map((item, columnIndex) => {
                        return <Tile 
                            color = {tileColors[(columnIndex + rowIndex) % 2]}
                            piece={item}
                            key={`${rowIndex}-${columnIndex}`} />
                    })}
                </div>
            })}
        </div>
    </>
}

export default Board