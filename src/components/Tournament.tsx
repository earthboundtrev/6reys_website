import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Tournament: React.FC = () => {
  // Placeholder images for the carousel
  const carouselImages = [
    'https://placekitten.com/800/400',
    'https://placekitten.com/801/400',
    'https://placekitten.com/802/400',
  ];

  return (
    <div className="tournament-page">
      <h2>Epic Fighting Showdown</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.
      </p>

      <Carousel>
        {carouselImages.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Tournament image ${index + 1}`} />
          </div>
        ))}
      </Carousel>

      {/* <div className="tournament-results">
        <h3>Tournament Results</h3>
        {/* Replace the src with your actual Challonge embed URL */}
        {/* <iframe 
          src="https://challonge.com/example/module" 
          width="100%" 
          height="500" 
          frameBorder="0" 
          scrolling="auto" 
          allowTransparency={true}
        ></iframe> */}
      {/* </div> */}
    </div>
  );
};

export default Tournament;
