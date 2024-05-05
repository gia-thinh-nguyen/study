"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Flashcard from "@/components/Flashcard";

const FlashcardCarousel = ({ flashcards }: { flashcards: any }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {flashcards?.map((flashcard: any) => (
        <Flashcard
          key={flashcard.flashcard_id}
          question={flashcard.question}
          answer={flashcard.answer}
        />
      ))}
    </Slider>
  );
};

export default FlashcardCarousel;
