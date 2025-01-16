type tileProps = {
    color: string
    piece: string
}

const tile = ({color, piece}: tileProps) => {
    return <div className={`tiles ${color}`}>
        {piece != ""?  <img className="pieces" alt={`${piece} piece`} src={`src/assets/${piece}.png`}></img> : ""}
    </div>
}

export default tile
