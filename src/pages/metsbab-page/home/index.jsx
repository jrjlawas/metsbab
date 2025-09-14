import PageMeta from "@/components/PageMeta.jsx";
import Header from "../../metsbab-components/header";
import Hero from "../../metsbab-components/hero";
import Programs from "../../metsbab-components/programs";
import Testimonial from "../../metsbab-components/testimonial";
import Contact from "../../metsbab-components/contact";
import Footer from "../../metsbab-components/footer";
import BackToTop from "@/components/BackToTop.jsx";
import favLogo4 from "@/assets/img/logo/icon.png";

const HomePage = () => {
  return (
    <>
      <PageMeta title="Metsbab Marketing Sltd." icon={favLogo4} />
      <Header />
      <Hero />
      <Programs />
      <Testimonial />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
};
export default HomePage;
