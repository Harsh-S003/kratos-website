import ContactSection from '../sections/ContactSection';
import HeroSection from '../sections/HeroSection';
import PerformanceIndexSection from '../sections/PerformanceIndexSection';
import ProductfeatureSection from '../sections/ProductfeatureSection';
import Insoles from '../sections/Insoles';
import VideoShowcaseSection from '../sections/VideoShowcaseSection';
import PhotoSliderSection from '../sections/PhotoSliderSection';
import SocialSubscribeSection from '../sections/SocialSubscribeSection';
import ClientsLogosBanner from '../components/ClientLogosBanner';
const Home = () => {
  return (
    <>
      <HeroSection />
      <VideoShowcaseSection />
      <PhotoSliderSection />
      <PerformanceIndexSection />
      <ProductfeatureSection />
      <Insoles />
      <ContactSection />
      <ClientsLogosBanner />
      <SocialSubscribeSection />    
    </>
  );
};

export default Home;
