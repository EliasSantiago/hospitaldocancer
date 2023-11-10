import Slider from './components/Slider/index';
import Services from './components/Services/index';
import Aboutus from './components/Aboutus/index';
import Sobre from './components/Sobre/index';
import Digital from './components/Digital/index';
import Cursos from './components/Cursos/index';
import Influencer from './components/Influencer/index';
import Ourteam from './components/Ourteam/index';
import Featured from './components/Featured/index';
import Manage from './components/Manage/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Articles from './components/Articles/index';
import Joinus from './components/Joinus/index';
import Insta from './components/Insta/index';
import Agendar from './components/Agendar';

export default function Home() {
  return (
    <main>
      <Slider />
      <Services />
      <Agendar />
      <Sobre />
      <Influencer />
      <Aboutus />
      {/* <Digital /> */}
      <Cursos />
      <Ourteam />
      <Featured />
      <Manage />
      <FAQ />
      <Testimonials />
      <Articles />
      <Joinus />
      <Insta />
    </main>
  )
}
