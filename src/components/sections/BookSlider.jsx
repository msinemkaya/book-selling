import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BookCard from '../common/BookCard'

export default function BookSlider({ bookList }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:4,
    slidesToScroll: 1,
    arrows: true,
      responsive: [
        {
          breakpoint: 1124,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  };

  return (
    <Slider {...settings} className='xs:mx-6 mx-4'>
      {bookList.slice(0, 5).map((book) => <BookCard key={book.id} book={book}/>)}
    </Slider>
  )
}
