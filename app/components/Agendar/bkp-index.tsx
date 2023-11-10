import Image from "next/image";

const Agendar = () => {
    return (
        <div className='mx-auto max-w-7xl my-5 sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-8'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-6xl sm:text-4xl font-bold text-darkpurple'>
                            Agendar procedimento agora.
                        </h1>
                        <h2 className="font-medium text-bluish text-2xl mt-5 text-center lg:text-start">Atendimento, Agendamento, Dúvidas, clique no botão abaixo.</h2>
                    </div>
                    <div className='my-7 text-center lg:text-start'>
                        <a href="https://api.whatsapp.com/send/?phone=5561984984950&text=Oiee%2C+BEATRIZ+FONSECA+%7C+BEAUT%C3%89+CLINIC.+Gostaria+de+agendar+um+servi%C3%A7o+e+viver+a+experi%C3%AAncia+Incr%C3%ADvel+BEATRIZ+BEAUT%C3%89+%3A%29&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-sm md:text-xl font-semibold hover:shadow-xl bg-gold-beatriz cta-button text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-white hover:text-bluish">
                            Agendar
                        </a>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className='lg:-m-24 lg:pt-20 hidden lg:block'>
                    <Image src="/images/banner/loja2.png" alt="hero-image" width={567} height={378} className="mx-auto my-auto rounded-3xl" />
                </div>

            </div>
        </div>
    )
}

export default Agendar;
