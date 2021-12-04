import React from "react";
interface QuantityDropDownProps {
    maxItems: number
}

const QuantityDropDown: React.FC<QuantityDropDownProps> = ({maxItems}) => {
    function makeOptionTags(){
        for (let i = 0; i < maxItems; i++) {
            <option value={i}>{i}</option>
        }
    }
    return (
        <select>
            {makeOptionTags}
        </select>
    )
}

export default QuantityDropDown;