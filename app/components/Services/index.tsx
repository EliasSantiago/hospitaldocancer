"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    link: string;
    heading: string;
    heading2: string;
    imgSrc: string;
    description: string;
}

const postData: DataType[] = [
    {
        link: "https://api.whatsapp.com/send/?phone=5561984984950&text=Oiee%2C+BEATRIZ+FONSECA+%7C+BEAUT%C3%89+CLINIC.+Gostaria+de+agendar+um+servi%C3%A7o+e+viver+a+experi%C3%AAncia+Incr%C3%ADvel+BEATRIZ+BEAUT%C3%89+%3A%29&type=phone_number&app_absent=0",
        heading: 'Beauté | Lash Lifting',
        heading2: '',
        description: '"É um procedimento que irá realçar a sua beleza natural com a curvatura e alongamento dos seus próprios cílios."',
        imgSrc: '/images/services/lashlifting.jpeg',
    },
    {
        link: "https://api.whatsapp.com/send/?phone=5561984984950&text=Oiee%2C+BEATRIZ+FONSECA+%7C+BEAUT%C3%89+CLINIC.+Gostaria+de+agendar+um+servi%C3%A7o+e+viver+a+experi%C3%AAncia+Incr%C3%ADvel+BEATRIZ+BEAUT%C3%89+%3A%29&type=phone_number&app_absent=0",
        heading: 'Beauté | Sobrancelhas',
        heading2: '',
        description: '"Imagine acordar todas as manhãs com sobrancelhas perfeitamente definidas, que realçam a beleza natural do seu rosto."',
        imgSrc: '/images/services/sobrancelhas.jpeg',
    },
    {
        link: "https://api.whatsapp.com/send/?phone=5561984984950&text=Oiee%2C+BEATRIZ+FONSECA+%7C+BEAUT%C3%89+CLINIC.+Gostaria+de+agendar+um+servi%C3%A7o+e+viver+a+experi%C3%AAncia+Incr%C3%ADvel+BEATRIZ+BEAUT%C3%89+%3A%29&type=phone_number&app_absent=0",
        heading: 'Beauté | Extensão de Cílios',
        heading2: '',
        description: '"Realçamos sua beleza natural com nosso procedimento de extensão de cílios, com a naturalidade e praticidade que deseja."',
        imgSrc: '/images/services/extensao.jpeg',
    },
    {
        link: "https://api.whatsapp.com/send/?phone=5561984984950&text=Oiee%2C+BEATRIZ+FONSECA+%7C+BEAUT%C3%89+CLINIC.+Gostaria+de+agendar+um+servi%C3%A7o+e+viver+a+experi%C3%AAncia+Incr%C3%ADvel+BEATRIZ+BEAUT%C3%89+%3A%29&type=phone_number&app_absent=0",
        heading: 'Beauté | Nail Design',
        heading2: '',
        description: '"Nosso procedimento de nail design vai além de simplesmente pintar as unhas. É uma experiência de beleza personalizada com a sua naturalidade."',
        imgSrc: '/images/services/nail.jpeg',
    },
    {
        link: "https://api.whatsapp.com/send/?phone=5561984984950&text=Oiee%2C+BEATRIZ+FONSECA+%7C+BEAUT%C3%89+CLINIC.+Gostaria+de+agendar+um+servi%C3%A7o+e+viver+a+experi%C3%AAncia+Incr%C3%ADvel+BEATRIZ+BEAUT%C3%89+%3A%29&type=phone_number&app_absent=0",
        heading: 'Beauté | Lábios',
        heading2: '',
        description: '"Lábios tratados e revitalizados com o tratamento Beauté Gloss, são vários benefícios oferecidos no tratamento."',
        imgSrc: '/images/services/labios.jpeg',
    },
    {
        link: "https://api.whatsapp.com/send/?phone=5561984984950&text=Oiee%2C+BEATRIZ+FONSECA+%7C+BEAUT%C3%89+CLINIC.+Gostaria+de+agendar+um+servi%C3%A7o+e+viver+a+experi%C3%AAncia+Incr%C3%ADvel+BEATRIZ+BEAUT%C3%89+%3A%29&type=phone_number&app_absent=0",
        heading: 'Beauté | Limpeza de Pele',
        heading2: '',
        description: '"Revitalize sua pele com nosso protocolo de limpeza personalizada, para uma aparência de pele renovada e saudável."',
        imgSrc: '/images/services/pele.jpeg',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
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
            <div className="bg-lightgrey py-20" id="blog-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold">Nossos Procedimentos</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} >

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative'>
                                    <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="inline-block m-auto rounded-3xl" />

                                    <Link href={items.link}>
                                        <h3 className="absolute bg-gold-beatriz navbutton hover:text-black hover:bg-white text-white hover:shadow-xl py-3 px-6 rounded-full article-img">Agendar</h3>
                                    </Link>
                                    <h4 className='text-2xl font-bold pt-6 text-black'>{items.heading}</h4>
                                    <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4>

                                    <div>
                                        <h3 className='text-base font-normal pt-6 pb-2 opacity-75'>{items.description}</h3>
                                    </div>

                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
