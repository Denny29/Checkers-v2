type tileProps = {
    color: string
    piece: string
}

const tile = ({color, piece}: tileProps) => {
    return <div className={`tiles ${color}`}>
        {piece}
    </div>
}

export default tile