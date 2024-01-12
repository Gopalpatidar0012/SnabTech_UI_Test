import Banner from "@/component/Banner";
import Domaines from "@/component/Domaines";
import Environment from "@/component/Environment";
import Experts from "@/component/Experts";
import Fonctionnalités from "@/component/Fonctionnalités";
import Fondateurs from "@/component/Fondateurs";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Mission from "@/component/Mission";
import Offers from "@/component/Offers";
import Organization from "@/component/Organization";
import Testimonial from "@/component/Testimonial";
import Témoignages from "@/component/Témoignages";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Mission />
      <Fonctionnalités />
      <Experts />
      <Organization />
      <Offers />
      <Environment />
      <Témoignages />
      <Fondateurs />
      <Testimonial />
      <Domaines />
      <Footer />
    </div>
  );
}
