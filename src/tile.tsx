type tileProps = {
    color: string
}

const tile = ({color}: tileProps) => {
    return <div className={`tiles ${color}`}>

    </div>
}

export default tile