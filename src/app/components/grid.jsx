"use client";

import {useState, useEffect } from "react";
import Cell from "./cell";
import checkBingo  from "../utils/bingo-checker";

const Grid = ({n, words}) => {
  const [wordList, setWordList] = useState([]);
  const [clickedCells, setClickedCells] = useState({});
  const [isBingo, setIsBingo] = useState(false);
  
  if(words && words.length < n*n) {
    throw new Error("Not enough words");
  }
 
  useEffect(() => {
    const availableWords = words ? [...words] : [];
    const pickWord = () => {
      if(availableWords.length === 0) {
        return "";
      }
      const index = Math.floor(Math.random() * availableWords.length);
      const word = availableWords.splice(index, 1)[0];
      return word;
    }
    let wordList = [];
    for(let i = 0; i < n*n; i++) {
      wordList.push(pickWord());
    }
    setWordList(wordList);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const click = (cellInfo) => {
    const clickedCellsUpdate = {...clickedCells};
    if(!cellInfo.selected) {
      delete clickedCellsUpdate[cellInfo.id];
    } else {
      clickedCellsUpdate[cellInfo.id] = true;
    }
    setClickedCells(clickedCellsUpdate);
    if(checkBingo(n, Object.keys(clickedCellsUpdate))){
      setIsBingo(true);
    }
    else {
      setIsBingo(false);
    }
  }

  const arr = [...Array(n)];
  return (
    <div className="flex flex-col align-middle items-center">
        <div className="flex flex-col">
             {arr.map((_, y) =>
             <div className="flex flex-row" key={y}>{arr.map((_, x) => 
                <Cell key={x + "_" + y} id={x + y*n} content={wordList[x + y*n]} onClick={click} />
                )}
            </div>
            )}
        </div> 
        {isBingo && <h2 className="mt-10 text-4xl">🎉 BINGO! 🎉</h2>}
     </div>
  )
};

export default Grid;