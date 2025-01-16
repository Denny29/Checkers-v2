import React, {useState} from "react";
import ColorButton from "./ColorButton";

type fieldProps = {
    tileColors: string[],
    setTileColors: React.Dispatch<React.SetStateAction<string[]>>
}


export const ColorField = ({tileColors, setTileColors}: fieldProps) => {

    const moreColors = [["navy-blue", "sky-blue"], ["dark-grey", "light-grey"]]

    return <div>
            {moreColors.map((colorSet, index) => {
            return <ColorButton
                colors={colorSet} 
                setTileColors={setTileColors}
                index={index}
                key={`colorSet-${index}`}
            />
            })}
        </div>
}