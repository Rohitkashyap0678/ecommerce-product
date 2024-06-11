import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderSlick = ({ silderImage, thumbNail, className }) => {
    var settings = {
        dots: true,
        infinite: true, 
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Slider {...settings}>
                {silderImage?.map((imageUrl, index) => (
                    <div key={index} className=''>
                        <img className={`!object-cover !inline !min-h-[400px] !w-full !h-full ${className}`} src={imageUrl} alt={`image ${index} alt`} />
                    </div>
                ))}
                <img className={`!object-cover tain !inline !min-h-[400px] !w-full !h-full ${className}`} src={thumbNail} alt={`image alt`} />
            </Slider>
        </div>
    )
}

export default SliderSlick