"use client";
import { useState} from "react";
import { ReactFitty } from "react-fitty";


const Cell = ({ content, onClick, id }) => {
    const [selected, setSelected] = useState(false);
    const baseClasses = `m-1 w-32 h-32 p-2 border rounded text-center flex justify-center items-center cursor-pointer `;

    const clickHandler = () => {
        const cellInfo = {
            id,
            selected: !selected
        }
        if(onClick) {
            onClick(cellInfo);
        }
        setSelected(!selected);
    }

    return (
        <div className={baseClasses + (selected ? "bg-red-600" : "hover:bg-red-800 transition-colors duration-50")} onClick={() => clickHandler()}>
            <ReactFitty wrapText={true}>{content}</ReactFitty>
        </div>
    );
}

export default Cell;