import Image from "next/image";
import Digital from "../Digital";
import CarrosselExtensao1 from "../CarrosselExtensao";

const Extensao = () => {
    return (
        <div className="relative bg-lightgrey">
            <div className='mx-auto max-w-7xl px-4 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/images/cursos/extensao1.jpeg" alt="man-icon" width={416} height={530} className="mx-auto md:mx-0 rounded-3xl" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">Curso de Extensão de Cílios Básico.</h2>
                        <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start"><strong>Com a Master Elisa Aires...</strong></p>
                        <p className="font-medium text-lightblack text-1xl mt-5 text-center lg:text-start">
                            Atuo na área de extensão de cílios há mais de 6 anos, + de 10 certificações, irei lhe instruir para sua caminhada.
                            Comigo você irá aprender os conteúdos do básico ao avançado, irá se surpreender com este curso que é completíssimo
                            para o início da sua caminhada profissional na área. <br /> <br /> Vou te proporcionar um curso com conteúdo rico e certeiro para
                            que você não se perca durante a sua caminhada com nosso curso e pós curso, em nosso acompanhamento, para um trajetória
                            inicial com segurança e confiança. <br /> <br /> Minha missão é transformar a vida de cada aluna, transmitindo todo conhecimento que
                            adquiri na minha jornada e contribuir no avanço de sua carreira! Vamos firmar esse compromisso juntas, bora?
                        </p>
                    </div>
                </div>
                <div className="my-12 pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer"></div>

                <Digital
                    title="Suporte Vitalício"
                    description="Suporte no pós curso através do aplicativo Telegram, com a Master Elisa Aires."
                    backgroundImgSrc="/images/cursos/curso-extensao.jpeg"
                    imageAlt="Curso Extensão de Cílios Básico"
                />

                <CarrosselExtensao1 />

            </div>




            <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
                <div className="max-w-3xl bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Para quem é esse curso?</h1>
                    <ul className="list-disc pl-6 text-gray-600 mb-4">
                        <li>♡ Quem já trabalha em alguma área da beleza, mas quer faturar mais com Cílios.</li>
                        <li>♡ Pessoas que estão em outra profissão e Não têm experiência Nenhuma em cílios ou na área da beleza.</li>
                        <li>♡ Quem já trabalha com cílios, mas NÃO está feliz com os resultados, técnicas e com a Agenda vazia.</li>
                    </ul>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Quais Técnicas tem no curso?</h2>
                    <ul className="list-disc pl-6 text-gray-600 mb-4">
                        <li>Técnicas Clássicas: Fio a Fio Clássico | Efeito Rímel | Efeito Molhado</li>
                    </ul>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Suporte Vitalício</h2>
                    <p className="text-gray-600 mb-4">Suporte no pós curso através do aplicativo Telegram, com a Master Elisa Aires.</p>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Bônus</h2>
                    <ul className="list-disc pl-6 text-gray-600 mb-4">
                        <li>Como fotografar</li>
                        <li>Edição de fotos e vídeos (apps)</li>
                    </ul>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">MASTER ELISA AIRES ♡</h2>
                    <p className="text-gray-600 mb-4">Eu Elisa, atuo na área de extensão de cílios há 6 anos, + de 10 certificações, irei lhe instruir para sua caminhada. Comigo você irá aprender os conteúdos do básico ao avançado, irá se surpreender com este curso que é completíssimo para o início da sua caminhada profissional na área. Vou te proporcionar um curso com conteúdo rico e certeiro para que você não se perca durante a sua caminhada com nosso curso e pós curso, em nosso acompanhamento, para um trajetória inicial com segurança e confiança. Minha missão é transformar a vida de cada aluno, transmitindo todo conhecimento que adquiri na minha jornada e contribuir no avanço de sua carreira! Vamos firmar esse compromisso juntas, bora?</p>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Conteúdo Programático ♡</h2>
                    <ul className="list-disc pl-6 text-gray-600 mb-4">
                        <li>MÓDULO 1: Biossegurança: EPI´s, descartáveis, higienização e ética profissional.</li>
                        <li>MÓDULO 2: Anatomia Ocular: Irritações e alergias, contraindicações e teste alérgico.</li>
                        <li>MÓDULO 3: Ciclo de vida dos fios: Fases de crescimento.</li>
                        <li>MÓDULO 4: Características dos fios; curvaturas, espessuras, tamanhos.</li>
                        <li>MÓDULO 5: Tipos de fios; fios tradicionais, fios elipses e fios tecnológicos.</li>
                        <li>MÓDULO 6: Pinças e suas variações.</li>
                        <li>MÓDULO 7: Adesivo: Composição, tempo de secagem, temperatura e umidade e armazenamento.</li>
                        <li>MÓDULO 8: Isolamento e Acoplagem dos fios: distanciamento e direcionamento.</li>
                        <li>MÓDULO 9: Mapping: Modelos e quando devem ser aplicados.</li>
                        <li>MÓDULO 10: Passo a passo de aplicação; ficha e questionário, higienização, isolamento inferior, preparação do fio, definir o mapping e finalização.</li>
                        <li>MÓDULO 11: Segredos da retenção.</li>
                        <li>MÓDULO 12: Manutenção e prazos.</li>
                        <li>MÓDULO 13: Remoção química e mecânica.</li>
                    </ul>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Cronograma do Curso ♡</h2>
                    <p className="text-gray-600 mb-4">♡ Primeiro dia: Iniciaremos com um Coffe Break e após esse momento daremos início a nossa aula com conteúdo teórico. Bônus: técnicas de marketing, fotografia, fidelização de clientes e fornecedores.</p>
                    <p className="text-gray-600 mb-4">♡ Segundo dia: Neste dia teremos nosso Coffe break e em seguida iniciaremos com o conteúdo teórico sobre a técnica e na sequência a aula prática nas modelos. Bônus: Como fotografar | Edição de fotos e vídeos (apps) Dois dias incríveis com esse curso completíssimo para você começar sua carreira na área de Extensão de Cílios, sim, o curso mais completo de todos.</p>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">O valor do investimento sairá por 1500,00</h2>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Vantagens do Curso ♡</h2>
                    <ul className="list-disc pl-6 text-gray-600 mb-4">
                        <li>Renda extra</li>
                        <li>Ampliar sua cartela de serviços</li>
                        <li>Atendimento a domicilio</li>
                        <li>Baixo investimento em material</li>
                        <li>Retorno financeiro rápido</li>
                        <li>Conquistar independência financeira</li>
                        <li>Início imediato na aplicação da técnica ensinada no curso</li>
                        <li>Trabalhar com as técnicas que mais crescem no mercado da estética no Brasil.</li>
                    </ul>
                    <p className="text-gray-600 mb-4">Aqui vamos te proporcionar conhecimento avançado e de alta qualidade. Assim você irá impactar o mundo com o seu trabalho. Esperamos contribuir e fazer parte da sua história e queremos que faça parte do time de alunas incríveis que passam por aqui. Vamos selar esse compromisso?</p>
                </div>
            </div>
        </div>
        // <div className="relative bg-lightgrey">

        //     <Image src="/images/sobre/spiral.svg" height={272} width={686} alt="Beatriz Beauté" className="absolute left-0 hidden lg:block -z-10" />

        //     <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8'>
        //         <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

        //             {/* COLUMN-1 */}
        //             <div>
        //                 <Image src="/images/sobre/beatriz.png" alt="man-icon" width={416} height={530} className="mx-auto md:mx-0 rounded-3xl" />
        //             </div>

        //             {/* COLUMN-2 */}
        //             <div className="relative">
        //                 <Image src="images/sobre/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" />
        //                 <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">Dedicada a realçar sua beleza natural.</h2>
        //                 <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">Beatriz Ribeiro, a inovadora, criativa e inventiva por trás da clínica de estética Beatriz Beauté, personifica a paixão e dedicação à beleza e ao bem-estar...</p>
        //                 <p className="text-2xl font-semibold mt-12 preline text-center lg:text-start"> Beatriz Ribeiro, CEO</p>
        //             </div>
        //         </div>
        //     </div>

        // </div>

    )
}

export default Extensao;
