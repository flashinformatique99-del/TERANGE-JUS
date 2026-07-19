import Header from "./components/Header";
import Hero from "./components/Hero";
import FlavorMarquee from "./components/FlavorMarquee";
import JuiceCatalog from "./components/JuiceCatalog";
import FeaturedOffers from "./components/FeaturedOffers";
import Story from "./components/Story";
import Testimonials from "./components/Testimonials";
import DeliveryZones from "./components/DeliveryZones";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import OrderingPortal from "./components/OrderingPortal";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="min-h-screen bg-sand-50">
      <Header onOrder={() => scrollTo("commander")} />
      <main>
        <Hero onOrder={() => scrollTo("commander")} onCatalog={() => scrollTo("saveurs")} />
        <FlavorMarquee />
        <JuiceCatalog />
        <FeaturedOffers onOrder={() => scrollTo("commander")} />
        <Story />
        <Testimonials />
        <DeliveryZones />
        <FAQ />
        <Newsletter />
        <OrderingPortal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
