import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg from "../../img/slider.svg"


export default class CorouselBox extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,

        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img className="slider_img" src={sliderImg} alt="" />
                    </div>
                    <div>
                        <img className="slider_img" src={sliderImg} alt="" />
                    </div>
                    <div>
                        <img className="slider_img" src={sliderImg} alt="" />
                    </div>


                </Slider>
            </div >
        );
    }
}