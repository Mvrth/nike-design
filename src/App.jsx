import Hero from './components/sections/Hero';
import Navbar from './components/Navbar';
import PopularProduct from './components/sections/PopularProduct';
import SuperQuality from './components/sections/SuperQuality';
import Services from './components/sections/Services';
import SpecialOffers from './components/sections/SpecialOffers';
import CustomerReviews from './components/sections/CustomerReviews';
import Subscribe from './components/sections/Subscribe';
import Footer from './components/Footer';

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-1 wide:padding-r padding padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full ">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
