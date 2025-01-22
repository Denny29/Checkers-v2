type tileProps = {
    color: string
    piece: string
    rowIndex: number
    columnIndex: number
}



const tile = ({color, piece, rowIndex, columnIndex}: tileProps) => {
    
    return <div onClick={() => {
        console.log(rowIndex, columnIndex)
        }
    } className={`tiles ${color}`}>
        {piece != ""?  <img className="pieces" alt={`${piece} piece`} src={`src/assets/${piece}.png`}></img> : ""}
    </div>
}

export default tile
