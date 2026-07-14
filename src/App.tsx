import Navbar from './components/Navbar';
import WhatsAppDelivery from './components/WhatsAppDelivery';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Catering from './components/Catering';
import OrderOnline from './components/OrderOnline';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Menu />
      <Gallery />
      <Reviews />
      <Catering />
      <OrderOnline />
      <WhatsAppDelivery />
      <Contact />
      <Footer />
    </div>
  );
}
