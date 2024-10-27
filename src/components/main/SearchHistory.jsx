import React, { useState } from "react";

const SearchHistory = () => {
  const [buttons, setButtons] = useState([
    { id: 1, text: "تهران به استانبول" },
    { id: 2, text: "تهران به استانبول" },
    { id: 3, text: "تهران به دبی" },
    { id: 4, text: "تهران به شیراز" },
    { id: 5, text: "شیراز به تهران" },
    { id: 6, text: "شیراز به اصفهان" },
    { id: 7, text: "اصفهان به مشهد" },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextButton = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % buttons.length);
  };

  const prevButton = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + buttons.length) % buttons.length
    );
  };

  const removeButton = (id) => {
    setButtons(buttons.filter((button) => button.id !== id));
  };

  return (
    <div className="flex items-stretch justify-between max-w-full gap-4">
      <button onClick={prevButton} className="p-4 border rounded-r">
        &#9654;
      </button>
      <div className="w-full flex justify-between">
        {buttons.map((button, index) => (
          <div
            key={button.id}
            className={`p-4 border rounded ${
              index === currentIndex
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
          >
            <button onClick={() => removeButton(button.id)} className="p-2">
              ✖
            </button>
            {button.text}
          </div>
        ))}
      </div>
      <button onClick={nextButton} className="p-4 border rounded-l">
        &#9664;
      </button>
    </div>
  );
};

export default SearchHistory;
