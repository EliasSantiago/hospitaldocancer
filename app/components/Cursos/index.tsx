import Link from 'next/link';

const Cursos = () => {
    return (
        <div id="cursos" className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>

                {/* COLUMN-1 */}

                <div className="bg-darkblue bg-cursos pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">BEAUTÉ ACADEMY</h2>
                    <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start">Curso <span className="text-white">de Design de Sobrancelhas.</span></h3>
                    <h5 className="text-white pt-2 mb-5 text-center sm:text-start">Desperte sua criatividade com nosso curso de design. Aprenda técnicas inovadoras e transforme suas ideias em designs impressionantes!</h5>
                    {/* <h3 className="text-3xl font-bold text-white leading-snug mb-5 text-center sm:text-start"><span className="text-sm">R$</span>  <span className="text-white text-sm">em até 5x s/ juros</span></h3> */}
                    <div className="text-center sm:text-start">
                        <Link href="">
                            <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-transparent border border-gold-beatriz hover:bg-gold-beatriz">Saiba mais</button>
                        </Link>
                    </div>
                </div>



                {/* COLUMN-2 */}

                <div className="bg-build pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">BEAUTÉ ACADEMY</h2>
                    <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start"><span className="text-white">Curso</span> de Extensão de Cílios Básico.</h3>
                    <h5 className="text-white bluish pt-2 mb-5 text-center sm:text-start">Aprenda a transformar olhares com nosso curso de extensão de cílios. Tornamos seus clientes mais confiantes em você!</h5>
                    {/* <h3 className="text-3xl font-bold text-white leading-snug mb-5 text-center sm:text-start"><span className="text-sm">R$</span>  <span className="text-white text-sm">em até 3x s/ juros</span></h3> */}
                    <div className="text-center sm:text-start">
                        <Link href="/curso-extensao">
                            <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-transparent border border-gold-beatriz hover:bg-gold-beatriz">Saiba mais</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cursos;
