import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from './Cards';
import list from "../assets/list.json"


function Freebook() {
    const filterData = list.filter((data) => data.category === "Free");
    // console.log(filterData);
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='font-semibold text-xl pb-2'>Free offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet, consecuetur adipisicing elit, Accusantium
          Lorem ipsum dolor sit amet, consecuetur adipisicing elit, Accusantium
          non suscipit, iure neque earum?
        </p>
        </div>
    <div>
    <Slider {...settings}>
        {filterData.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook
