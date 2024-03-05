import React, {useState} from 'react';
import "./dinesh.css"

const Portfolio = () => {
    const items = [
        {
          title: 'Item 1',
          image: 'path/to/image1.jpg',
          description: 'Description for Item 1',
        },
        {
          title: 'Item 2',
          image: 'path/to/image2.jpg',
          description: 'Description for Item 2',
        },
        {
          title: 'Item 3',
          image: 'path/to/image2.jpg',
          description: 'Description for Item 3',
        }
        // Add more items as needed
      ];


    const [currentIndex, setCurrentIndex] = useState(0);
   console.log(currentIndex)
    const goToPrevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
    };
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    };


  return (
    <>
    <div className="cart-slider">
      <button className="slider-btn prev-btn" onClick={goToPrevSlide}>
        &lt;
      </button>
      <div className="slider-content">
        {items.map((item, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : 'unactive'}`}
          >
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <button className="slider-btn next-btn" onClick={goToNextSlide}>
      <i class="bi bi-arrow-right"></i>
      </button>
    </div>
    </>
  );
};

export default Portfolio;
