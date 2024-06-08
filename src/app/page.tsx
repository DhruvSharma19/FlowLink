import Image from 'next/image';
import Navbar from '@/components/home/Navbar/Navbar';
import Hero from '@/components/home/Hero-section/Hero';
import StickyNav from '@/components/home/Navbar/StickyNav';
import Productivity from '@/components/home/Productivity/Productivity';
import Collaboration from '@/components/home/Collaboration/Collaboration';
import Security from '@/components/home/Security/Security';
import Globe from '@/components/home/Footer/Globe';
import Footer from '@/components/home/Footer/Footer';

export default function Home() {
  return (
    <div className=' '>
      <div className='relative z-50'>
        <div className='absolute'>
          <Navbar />
        </div>
      </div>
      <div>
        <div className='overflow-hidden'>
          <div className='relative'>
            <img className='absolute left-0 right-0 top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image' width='4377' src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp" alt="" />
          </div>
          <div className='hero-section px-3 '>
            <Hero />
          </div>
          <StickyNav />
          <div id='productivity' className='home-campaign-productivity px-4 pt-8 overflow-hidden'>
            <Productivity />
          </div>
          <div id='collaboration' className='home-campaign-productivity px-4 pt-8  overflow-hidden'>
            <Collaboration />
          </div>
          <div id='security' className='home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden'>
            <Security />
          </div>
          <Globe />
          <div className='max-w-[1280px] mx-auto relative z-[2]  px-5'>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
