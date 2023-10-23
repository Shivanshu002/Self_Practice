import React, { useState, useEffect } from 'react';

const CardCarousel = ({ cards, interval = 3000 }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Calculate the index for the next card
      const nextIndex = (currentCardIndex + 1) % cards.length;
      setCurrentCardIndex(nextIndex);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [currentCardIndex, cards, interval]);

  return (
    <div className="w-full h-40 relative overflow-hidden">
      <div
        className="w-full h-40 p-4 flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentCardIndex * 20}%)` }}
      >
        {cards.map((card, index) => (
          <div key={index} className="w-1/5 p-4">
            {card}
          </div>
        ))}
      </div>
    </div>
  );
};

const AutoSlide = () => {
  const cardContent = [ // Replace this with your card content
    <div className="bg-blue-200 h-32 w-32">Card 1</div>,
    <div className="bg-green-200 h-32 w-32">Card 2</div>,
    <div className="bg-red-200 h-32 w-32">Card 3</div>,
    <div className="bg-yellow-200 h-32 w-32">Card 4</div>,
    <div className="bg-pink-200 h-32 w-32">Card 5</div>,
    <div className="bg-purple-200 h-32 w-32">Card 6</div>,
  ];

  return (
    <div className="w-full h-40">
      <CardCarousel cards={cardContent} />
    </div>
  );
};

export default AutoSlide;
