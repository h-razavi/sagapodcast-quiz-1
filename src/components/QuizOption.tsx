import React from "react";

type Props = {
  text: string;
  onSelect: () => void;
};

function QuizOption({ text, onSelect }: Props) {
  return (
    <button onClick={onSelect} className="w-48 h-6 text-sky-800 bg-sky-600 bg-opacity-30 rounded-md border-2 border-sky-600 my-4 p-6 flex items-center justify-center cursor-pointer active:bg-sky-200 active:text-white">
      {text}
    </button>
  );
}

export default QuizOption;
