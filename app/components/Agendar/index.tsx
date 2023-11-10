import Image from "next/image";

const Agendar = () => {
    return (
        <div id="agendar" className="relative">

            {/* <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="Beatriz Beauté" className="absolute left-0 hidden lg:block -z-10" /> */}

            <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}
                    <div className="relative">
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">Agendar procedimento agora.</h2>
                        <p className="font-medium text-lightblack text-2xl mt-5 mb-7 text-center lg:text-start">Atendimento, Agendamento, Dúvidas, clique no botão abaixo</p>
                        <a href="https://api.whatsapp.com/send/?phone=5561984984950&text=Oiee%2C+BEATRIZ+FONSECA+%7C+BEAUT%C3%89+CLINIC.+Gostaria+de+agendar+um+servi%C3%A7o+e+viver+a+experi%C3%AAncia+Incr%C3%ADvel+BEATRIZ+BEAUT%C3%89+%3A%29&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-sm md:text-xl font-semibold hover:shadow-xl bg-gold-beatriz cta-button text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-white hover:text-bluish">
                            Agendar
                        </a>
                    </div>
                    {/* COLUMN-2 */}
                    <div>
                        <Image src="/images/banner/loja2.png" alt="man-icon" width={567} height={378} className="mx-auto md:mx-0 rounded-3xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agendar;
