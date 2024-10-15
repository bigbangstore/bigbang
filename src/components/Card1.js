import React, { useRef, useState, useEffect } from 'react';
import './styles/Card.css';

const products = [
  {
    id: 1,
    title: "ایرپاد پرو 2",
    price: "$۷۰۰ افغانی",
    imgSrc: "smartwatches/smartwatch1.jpg",
  },
  {
    id: 2,
    title: "ایرپاد پرو 3",
    price: "500 افغانی",
    imgSrc: "smartwatches/smartwatch2.jpeg",
  },
  {
    id: 3,
    title: "ایرپاد پرو ",
    price: "400 افغانی",
    imgSrc: "smartwatches/smartwatch3.jpeg",
  },
  {
    id: 4,
    title: "مونستر",
    price: "1500 افغانی",
    imgSrc: "smartwatches/smartwatch3.jpeg",
  },
];



const Card = () => {
  const cardRowRef = useRef(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const scrollInterval = useRef(null);

  const scrollToCard = (index) => {
    const cardWidth = 250; // Adjust this to the width of each card
    const offset = (cardRowRef.current.offsetWidth - cardWidth) / 2; // Centering offset
    const scrollPosition = index * cardWidth - offset;

    cardRowRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
    setCurrentCardIndex(index);
  };

  const scrollLeft = () => {
    const newIndex = Math.max(currentCardIndex - 1, 0);
    scrollToCard(newIndex);
  };

  const scrollRight = () => {
    const newIndex = Math.min(currentCardIndex + 1, products.length - 1);
    scrollToCard(newIndex);
  };

  // Center the current card on load (optional, for mobile)
  useEffect(() => {
    if (window.innerWidth <= 600) {
      scrollToCard(currentCardIndex);
    }
  }, [currentCardIndex]);

  const handleMouseDown = (direction) => {
    scrollInterval.current = setInterval(() => {
      cardRowRef.current.scrollLeft += direction === "left" ? -200 : 200;
    }, 16); // Smooth scroll at a speed of 30px
  };

  const handleMouseUp = () => {
    clearInterval(scrollInterval.current);
  };

  return (
    <div className="card-container">
      <button
        className="arrow left-arrow"
        onClick={scrollLeft}
        onMouseDown={() => handleMouseDown("left")}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // Stop scrolling if mouse leaves the button
      >
        &#9664;
      </button>

      <div className="card-row" ref={cardRowRef}>
        {products.map((product) => (
          <div key={product.id} className="card">
            <img
              src={require(`./images/${product.imgSrc}`)}
              alt={product.title}
              className="card-image"
            />
            <h3 className="card-title">{product.title}</h3>
            <p className="card-price">{product.price}</p>
          </div>
        ))}
      </div>

      <button
        className="arrow right-arrow"
        onClick={scrollRight}
        onMouseDown={() => handleMouseDown("right")}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        &#9654;
      </button>
    </div>
  );
};

export default Card;