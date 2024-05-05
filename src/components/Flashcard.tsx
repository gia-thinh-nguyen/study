import React, { useState } from "react";

const Flashcard = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <button
        onClick={toggleAnswer}
        className="text-blue-500 hover:text-blue-700 mb-2"
      >
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
      {showAnswer && <p className="text-gray-700">{answer}</p>}
    </div>
  );
};

export default Flashcard;
