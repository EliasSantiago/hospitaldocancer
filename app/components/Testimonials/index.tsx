"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Bruna de Abreu",
        profession: '',
        comment: '"AMEI 😻 FOI UMA EXPERIÊNCIA INCRÍVEL E TOTALMENTE DIFERENTE! Fui tão bem tratada e cuidada que não queria mais sair do espaço. O atendimento é incrível, o carinho com que a Bia me recebeu e me atendeu é indescritível. Recomendo de olhos fechados. É muito raro encontrar um lugar onde te recebam com tanta atenção, cuidado e carinho. Já ganhou mais uma cliente! Com certeza voltarei novamente e realizarei outros procedimentos. Não largo mais esse espaço que fez com que eu me sentisse uma princesa..."',
        imgSrc: '/images/testimonial/bruna-c.png',
    },
    {
        name: "Beatriz Martins",
        profession: '',
        comment: '"Primeiramente já fui conquistada pelo atendimento, a Bia é uma princesa e todo o lugar tem a cara da marca. Atualmente é impossível ver cílios e não lembrar da lash me, nunca fiz nada nos meus cílios por medo e deixei bem claro isso, desde o primeiro contato ela foi me dando a segurança necessária para realizar o procedimento. Sai de lá realizada e muito feliz, vale cada minuto passado lá dentro. Obrigada demais!"',
        imgSrc: '/images/testimonial/beatriz.png',
    },
    {
        name: "Mayara Fialho",
        profession: '',
        comment: 'Boa Noite , hoje dia 28/10/2022 eu tive o privilégio de fazer as minhas lashes no estudo da Beatriz beauty , fui atendida pela Elisa , meu Deus que profissional impecável , estou encantada é muito feliz . Sobre o atendimento da Bia não existe palavras para desifrar o que eu senti , fui atendida como uma princesa do início ao fim, e para encerrar fui agraciada com um delicioso capuccino de Doce de leite. Meninas com todo o meu amor e carinho eu quero agradecer vocês pelo dia de hoje , vocês fizerão o meu dia mais feliz , se Deus quiser Quando eu retornar à Brasília irei vim aqui novamente 💓',
        imgSrc: '/images/testimonial/user.png',
    },
    {
        name: "Raquel Campos",
        profession: '',
        comment: 'Amei a experiência. Encantada com o ambiente e principalmente com o atendimento . E o que é aquele capuccino, dos deuses. Parabéns .... Virei cliente',
        imgSrc: '/images/testimonial/raquel.png',
    },
    {
        name: "Dayanne Ribeiro",
        profession: '',
        comment: '"Atendimento diferenciado, com total atenção e prestatividade. Ambiente que encanta logo à primeira vista, detalhes em cada lugar, como bilhete motivacional na bandeja em que me foi servido um maravilhoso capuccino com borda de chocolate. Não senti nenhuma dor durante o procedimento, relaxei tanto durante o processo que dormi. Ambiente me parecia totalmente esterelizado, e preparado para os clientes. Música ambiente confortável, e no banheiro utilitários femininos caso fossem necessários, além de outros artigos de cuidados pessoais. Amei, indico demais!"',
        imgSrc: '/images/testimonial/user.png',
    }
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
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
            <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="feedbacks">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">Veja o que estão dizendo.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">Veja o que estão dizendo.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">Veja o que estão dizendo.</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos" />
                                    <h4 className='text-base font-medium text-testColor my-4'>{items.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-xs font-medium  pb-2 opacity-50'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
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
