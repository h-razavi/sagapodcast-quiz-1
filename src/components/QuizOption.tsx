import { useState } from "react";
type Props = {
  text: string;
  point: number;
  selected: boolean;
  onSelect: () => void;
};

const initialOptionStyles =
  "w-48 h-6 bg-opacity-30 rounded-md border-2 my-4 p-6 flex items-center justify-center cursor-pointer";
const initialOptionColors = " text-sky-800 bg-sky-600 border-sky-600";
const correctOptionColors =
  "bg-lime-300 text-lime-800 border-lime-500 animate-pulse";
const wrongOptionColors =
  "bg-rose-300 text-rose-800 border-rose-500 animate-pulse";

function QuizOption({ text, point, selected, onSelect }: Props) {
  function changeColorsOnSelect(point: number) {
    if (!selected) {
      return initialOptionStyles + initialOptionColors;
    } else if (selected && point === 1) {
      return initialOptionStyles + correctOptionColors;
    } else if (selected && point === 0) {
      return initialOptionStyles + wrongOptionColors;
    }
  }

  return (
    <button onClick={onSelect} className={changeColorsOnSelect(point)} disabled={selected} >
      {text}
    </button>
  );
}

export default QuizOption;
