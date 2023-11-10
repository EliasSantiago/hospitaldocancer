"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    description: string;
    title: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        description: '',
        title: '',
        imgSrc: '/images/slider/1.png',
    },
    {
        description: '',
        title: '',
        imgSrc: '/images/slider/2.png',
    },
    {
        description: '',
        title: '',
        imgSrc: '/images/slider/3.png',
    },
    {
        description: '',
        title: '',
        imgSrc: '/images/slider/4.png',
    }
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 3000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div id="home" className="text-center w-full overflow-hidden">
                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i} className='relative h-screen'>
                            <Image src={items.imgSrc} alt="Beatriz Beauté" layout="fill" objectFit="cover"/>
                            {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                                <h4 className='text-4xl font-bold pt-14 text-shadow-gray'>{items.title}</h4>
                                <h3 className='text-2xl font-normal pt-4 pb-2 text-shadow-gray'>{items.description}</h3>
                            </div> */}
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
