type ColorSwapProps = {
    colors: string[]
    setTileColors: React.Dispatch<React.SetStateAction<string[]>>
    index: number
}

const ColorButtons = ({colors, setTileColors, index}: ColorSwapProps) => {
    colors.push("tileClicked")
    return <span>
        Palette {index + 1}
        <input onClick={() => setTileColors(colors)} name="colorSwap" type="radio"></input>
        <br></br>
    </span>
}

export default ColorButtons